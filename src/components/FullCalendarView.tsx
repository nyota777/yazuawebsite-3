import React, { useMemo, useState } from 'react';
import { X, Calendar as CalendarIcon, List, MapPin, Clock, Users, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Dialog, DialogContent } from './ui/dialog';
import { Calendar } from './ui/calendar';
import { cn } from './ui/utils';

export type Event = {
  id: string;
  title: string;
  category: 'Camp' | 'Workshop' | 'Coaching' | 'Info Session' | 'Outdoor Adventure' | 'Program' | 'Community Event' | 'Information Session';
  startDate: Date;
  endDate?: Date;
  time?: string;
  location?: string;
  recurrence?: 'monthly' | 'quarterly' | null;
  slotsTotal?: number;
  slotsRemaining?: number;
  showJoinNow?: boolean;
  color?: string;
};

type FullCalendarViewProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  events: Event[];
};

type ViewMode = 'calendar' | 'list';

// Helper functions (defined outside component to avoid hoisting issues)
const formatDateKey = (date: Date): string => {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
};

const getThirdSaturdayOfMonth = (date: Date): Date => {
  const year = date.getFullYear();
  const month = date.getMonth();
  let saturdayCount = 0;
  for (let day = 1; day <= 31; day++) {
    const d = new Date(year, month, day);
    if (d.getMonth() !== month) break;
    if (d.getDay() === 6) {
      saturdayCount += 1;
      if (saturdayCount === 3) {
        return d;
      }
    }
  }
  return new Date(year, month, 1);
};

export function FullCalendarView({ open, onOpenChange, events }: FullCalendarViewProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('calendar');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  const REGISTER_URL = 'https://book.heygoldie.com/Yazua-Afrika';

  // Get all dates that have events
  const eventDates = useMemo(() => {
    const dates = new Set<string>();
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    
    events.forEach((event) => {
      if (event.recurrence === 'monthly') {
        // For monthly recurring events, generate next 12 occurrences (third Saturday of each month)
        const start = new Date(now);
        for (let i = 0; i < 12; i++) {
          const monthDate = new Date(start.getFullYear(), start.getMonth() + i, 1);
          const thirdSat = getThirdSaturdayOfMonth(monthDate);
          if (thirdSat >= now) {
            dates.add(formatDateKey(thirdSat));
          }
        }
      } else if (event.recurrence === 'quarterly') {
        // For quarterly recurring events, generate next 4 occurrences
        const start = new Date(event.startDate);
        start.setHours(0, 0, 0, 0);
        for (let i = 0; i < 4; i++) {
          const nextDate = new Date(start);
          nextDate.setMonth(start.getMonth() + (i * 3));
          if (nextDate >= now) {
            dates.add(formatDateKey(nextDate));
          }
        }
      } else if (event.endDate) {
        // Date range event
        const start = new Date(event.startDate);
        start.setHours(0, 0, 0, 0);
        const end = new Date(event.endDate);
        end.setHours(23, 59, 59, 999);
        const current = new Date(start);
        while (current <= end) {
          dates.add(formatDateKey(current));
          current.setDate(current.getDate() + 1);
        }
      } else {
        // Single day event
        const eventDate = new Date(event.startDate);
        eventDate.setHours(0, 0, 0, 0);
        dates.add(formatDateKey(eventDate));
      }
    });
    
    return dates;
  }, [events]);

  // Get events for a specific date
  const getEventsForDate = (date: Date): Event[] => {
    const dateKey = formatDateKey(date);
    return events.filter((event) => {
      if (event.recurrence === 'monthly') {
        // Check if this date is the third Saturday of its month
        const thirdSat = getThirdSaturdayOfMonth(date);
        return formatDateKey(thirdSat) === dateKey;
      } else if (event.recurrence === 'quarterly') {
        // Check if this date matches the quarterly pattern
        const eventDate = new Date(event.startDate);
        const eventMonth = eventDate.getMonth();
        const eventDay = eventDate.getDate();
        const checkDate = new Date(date);
        checkDate.setHours(0, 0, 0, 0);
        eventDate.setHours(0, 0, 0, 0);
        
        if (checkDate.getMonth() === eventMonth && checkDate.getDate() === eventDay) {
          const monthsDiff = (checkDate.getFullYear() - eventDate.getFullYear()) * 12 + 
                            (checkDate.getMonth() - eventDate.getMonth());
          return monthsDiff >= 0 && monthsDiff % 3 === 0;
        }
        return false;
      } else if (event.endDate) {
        const start = new Date(event.startDate);
        start.setHours(0, 0, 0, 0);
        const end = new Date(event.endDate);
        end.setHours(23, 59, 59, 999);
        const checkDate = new Date(date);
        checkDate.setHours(0, 0, 0, 0);
        return checkDate >= start && checkDate <= end;
      } else {
        const eventDate = new Date(event.startDate);
        eventDate.setHours(0, 0, 0, 0);
        const checkDate = new Date(date);
        checkDate.setHours(0, 0, 0, 0);
        return formatDateKey(eventDate) === formatDateKey(checkDate);
      }
    });
  };

  const getNextThirdSaturday = (from: Date): Date => {
    const start = new Date(from.getFullYear(), from.getMonth(), from.getDate());
    start.setHours(0, 0, 0, 0);

    for (let i = 0; i < 14; i++) {
      const candidate = new Date(start.getFullYear(), start.getMonth() + i, 1);
      let saturdayCount = 0;
      for (let day = 1; day <= 31; day++) {
        const d = new Date(candidate.getFullYear(), candidate.getMonth(), day);
        if (d.getMonth() !== candidate.getMonth()) break;
        if (d.getDay() === 6) {
          saturdayCount += 1;
          if (saturdayCount === 3) {
            d.setHours(0, 0, 0, 0);
            if (d >= start) return d;
            break;
          }
        }
      }
    }
    return start;
  };

  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    }).format(date);
  };

  const formatDateRange = (start: Date, end: Date): string => {
    const sameMonth = start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear();
    if (sameMonth) {
      const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(start);
      return `${month} ${start.getDate()} - ${end.getDate()}, ${start.getFullYear()}`;
    }
    return `${formatDate(start)} - ${formatDate(end)}`;
  };

  // Sorted events for list view
  const sortedEvents = useMemo(() => {
    return [...events].sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
  }, [events]);

  // Get selected date events
  const selectedDateEvents = selectedDate ? getEventsForDate(selectedDate) : [];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl w-full h-[90vh] max-h-[90vh] p-0 bg-white overflow-hidden flex flex-col z-[100]">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Full <span className="text-[#c7211a]">Calendar</span>
          </h2>
          <div className="flex items-center gap-4">
            {/* View Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('calendar')}
                className={cn(
                  'px-4 py-2 rounded-md transition-all duration-200 flex items-center gap-2',
                  viewMode === 'calendar'
                    ? 'bg-white text-[#c7211a] shadow-sm font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                <CalendarIcon className="w-4 h-4" />
                <span className="hidden sm:inline">Calendar</span>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={cn(
                  'px-4 py-2 rounded-md transition-all duration-200 flex items-center gap-2',
                  viewMode === 'list'
                    ? 'bg-white text-[#c7211a] shadow-sm font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                <List className="w-4 h-4" />
                <span className="hidden sm:inline">List</span>
              </button>
            </div>
            <button
              onClick={() => onOpenChange(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
          {viewMode === 'calendar' ? (
            <>
              {/* Calendar View */}
              <div className="flex-1 p-6 overflow-y-auto">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  month={currentMonth}
                  onMonthChange={setCurrentMonth}
                  className="rounded-md"
                  classNames={{
                    months: 'flex flex-col sm:flex-row gap-4',
                    month: 'space-y-4',
                    caption: 'flex justify-center pt-1 relative items-center mb-4',
                    caption_label: 'text-lg font-semibold text-gray-900',
                    nav: 'space-x-1 flex items-center',
                    nav_button: cn(
                      'h-8 w-8 bg-transparent p-0 opacity-50 hover:opacity-100 text-gray-900 hover:bg-gray-100 rounded-md flex items-center justify-center'
                    ),
                    nav_button_previous: 'absolute left-1',
                    nav_button_next: 'absolute right-1',
                    table: 'w-full border-collapse space-x-1',
                    head_row: 'flex',
                    head_cell: 'text-gray-500 rounded-md w-9 font-normal text-sm',
                    row: 'flex w-full mt-2',
                    cell: cn(
                      'h-9 w-9 text-center text-sm p-0 relative',
                      '[&:has([aria-selected])]:bg-red-50',
                      'first:[&:has([aria-selected])]:rounded-l-md',
                      'last:[&:has([aria-selected])]:rounded-r-md',
                      'focus-within:relative focus-within:z-20'
                    ),
                    day: cn(
                      'h-9 w-9 p-0 font-normal rounded-md',
                      'hover:bg-gray-100',
                      'aria-selected:bg-[#c7211a]',
                      'aria-selected:text-white',
                      'aria-selected:hover:bg-[#4e2b14]',
                      'focus:bg-[#c7211a] focus:text-white'
                    ),
                    day_today: 'bg-red-100 text-gray-900 font-semibold',
                    day_outside: 'day-outside text-gray-400 opacity-50',
                    day_disabled: 'text-gray-300 opacity-50',
                    day_hidden: 'invisible',
                  }}
                  modifiers={{
                    hasEvent: (date) => eventDates.has(formatDateKey(date)),
                  }}
                  modifiersClassNames={{
                    hasEvent: 'relative after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-[#c7211a] after:rounded-full',
                  }}
                />
              </div>

              {/* Event Details Panel */}
              <div className="w-full md:w-96 border-t md:border-t-0 md:border-l border-gray-200 p-6 overflow-y-auto bg-gray-50">
                {selectedDate ? (
                  <>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      {formatDate(selectedDate)}
                    </h3>
                    {selectedDateEvents.length > 0 ? (
                      <div className="space-y-4">
                        {selectedDateEvents.map((event) => (
                          <EventDetailCard key={event.id} event={event} registerUrl={REGISTER_URL} />
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-center py-8">No events on this date</p>
                    )}
                  </>
                ) : (
                  <div className="text-center py-8">
                    <CalendarIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">Select a date to view events</p>
                  </div>
                )}
              </div>
            </>
          ) : (
            /* List View */
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="space-y-4">
                {sortedEvents.map((event) => (
                  <EventDetailCard key={event.id} event={event} registerUrl={REGISTER_URL} />
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Event Detail Card Component
function EventDetailCard({ event, registerUrl }: { event: Event; registerUrl: string }) {
  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    }).format(date);
  };

  const formatDateRange = (start: Date, end: Date): string => {
    const sameMonth = start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear();
    if (sameMonth) {
      const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(start);
      return `${month} ${start.getDate()} - ${end.getDate()}, ${start.getFullYear()}`;
    }
    return `${formatDate(start)} - ${formatDate(end)}`;
  };

  const getDateLabel = (): string => {
    if (event.recurrence === 'monthly') {
      return 'Every Third Saturday (Monthly)';
    } else if (event.recurrence === 'quarterly') {
      return `${formatDate(event.startDate)} (Quarterly)`;
    } else if (event.endDate) {
      return formatDateRange(event.startDate, event.endDate);
    } else {
      return formatDate(event.startDate);
    }
  };

  const categoryColors: Record<string, string> = {
    Camp: 'bg-[#c7211a]',
    Workshop: 'bg-[#1A1A1A]',
    Coaching: 'bg-[#8B7355]',
    'Info Session': 'bg-[#c7211a]',
    'Information Session': 'bg-[#c7211a]',
    'Outdoor Adventure': 'bg-[#006B3F]',
    Program: 'bg-[#c7211a]',
    'Community Event': 'bg-[#006B3F]',
  };

  const categoryColor = categoryColors[event.category] || 'bg-gray-600';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
    >
      <div className={`${categoryColor} h-1 rounded-t-xl -mx-5 -mt-5 mb-4`}></div>
      <div className="flex items-start justify-between mb-3">
        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          {event.category}
        </span>
      </div>
      <h4 className="text-lg font-bold text-gray-900 mb-3">{event.title}</h4>
      <div className="space-y-2 mb-4">
        <div className="flex items-start gap-2 text-sm text-gray-600">
          <CalendarIcon className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#c7211a]" />
          <span>{getDateLabel()}</span>
        </div>
        {event.time && (
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#c7211a]" />
            <span>{event.time}</span>
          </div>
        )}
        {event.location && (
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#c7211a]" />
            <span>{event.location}</span>
          </div>
        )}
        {typeof event.slotsRemaining === 'number' && (
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <Users className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#c7211a]" />
            <span>
              Slots remaining: <span className="font-semibold">{event.slotsRemaining}</span>
              {typeof event.slotsTotal === 'number' ? ` / ${event.slotsTotal}` : ''}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <a
          href={registerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#c7211a] text-white px-4 py-2 rounded-full hover:bg-[#4e2b14] transition-all duration-300 flex items-center justify-center gap-2 font-semibold text-sm"
        >
          Register Now <ArrowRight className="w-4 h-4" />
        </a>
        {event.showJoinNow && (
          <button
            type="button"
            disabled
            className="flex-1 text-gray-400 px-4 py-2 rounded-full border border-gray-300 font-semibold text-sm cursor-not-allowed"
            title="Join link will be provided later"
          >
            Join Now
          </button>
        )}
      </div>
    </motion.div>
  );
}

