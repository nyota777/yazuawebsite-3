import React, { useMemo, useState } from 'react';
import { Calendar, MapPin, Clock, ArrowRight, Users } from 'lucide-react';
import { motion } from 'motion/react';

export function EventCalendar() {
  const REGISTER_URL = 'https://book.heygoldie.com/Yazua-Afrika';

  const formatDate = (d: Date) =>
    new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(d);

  const formatDateRange = (start: Date, end: Date) => {
    const sameMonth = start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear();
    if (sameMonth) {
      const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(start);
      return `${month} ${start.getDate()} - ${end.getDate()}, ${start.getFullYear()}`;
    }
    return `${formatDate(start)} - ${formatDate(end)}`;
  };

  const getNextThirdSaturday = (from: Date) => {
    // next occurrence (including current month if still upcoming)
    const start = new Date(from.getFullYear(), from.getMonth(), from.getDate());
    start.setHours(0, 0, 0, 0);

    for (let i = 0; i < 14; i++) {
      const candidate = new Date(start.getFullYear(), start.getMonth() + i, 1);
      // find 3rd Saturday
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

  type EventItem = {
    id: string;
    title: string;
    category: string;
    color: string;
    time: string;
    location: string;
    dateLabel: string;
    sortDate: Date;
    endDate?: Date;
    slotsTotal?: number;
    slotsRemaining?: number;
    showJoinNow?: boolean;
  };

  const initialEvents: EventItem[] = useMemo(() => {
    const now = new Date();

    const manupNext = getNextThirdSaturday(now);

    const forgeStart = new Date('2026-07-13T00:00:00');
    const forgeEnd = new Date('2026-07-26T00:00:00');

    const workshopStart = new Date('2026-03-19T00:00:00');
    const workshopEnd = new Date('2026-03-21T00:00:00');

    const firepit = new Date('2026-03-20T00:00:00');
    const parentInfo = new Date('2026-04-25T00:00:00');
    const showcase = new Date('2026-05-10T00:00:00');

    return [
      {
        id: 'idecide-life-coaching',
        title: 'iDECIDE Life Coaching Session',
        category: 'Coaching',
        color: 'bg-[#8B7355]',
        dateLabel: 'Open Calendar',
        sortDate: now,
        time: '10:00 AM - 1:00 PM (personalised)',
        location: 'Online & In-Person',
        showJoinNow: true,
      },
      {
        id: 'manup-monthly',
        title: 'ManUp Leadership Adventure - Monthly',
        category: 'Outdoor Adventure',
        color: 'bg-[#006B3F]',
        dateLabel: `Every Third Saturday (Next: ${formatDate(manupNext)})`,
        sortDate: manupNext,
        time: 'Registration Ongoing - Every Third Saturday of the month',
        location: 'Location TBC',
      },
      {
        id: 'forge-facilitators-workshop',
        title: 'FORGE - Facilitators and Mentors Coaching Workshop',
        category: 'Workshop',
        color: 'bg-[#1A1A1A]',
        dateLabel: formatDateRange(workshopStart, workshopEnd),
        sortDate: workshopStart,
        endDate: workshopEnd,
        time: '11:00 AM - 3:00 PM',
        location: 'YAZUA AFRIKA Headquarters',
      },
      {
        id: 'build-firepit-session',
        title: 'BUILD Coaching Sessions - Group FirePit Session',
        category: 'Coaching',
        color: 'bg-[#FF6F3C]',
        dateLabel: formatDate(firepit),
        sortDate: firepit,
        time: '4:00 PM - 7:00 PM',
        location: 'Location TBC',
        slotsTotal: 8,
        slotsRemaining: 8,
      },
      {
        id: 'parent-info-session',
        title: 'Parent Information Session',
        category: 'Information Session',
        color: 'bg-[#FF6F3C]',
        dateLabel: formatDate(parentInfo),
        sortDate: parentInfo,
        time: '6:00 PM - 8:00 PM (every quarter)',
        location: 'Online',
        showJoinNow: true,
      },
      {
        id: 'community-impact-showcase',
        title: 'Community Impact Showcase',
        category: 'Community Event',
        color: 'bg-[#006B3F]',
        dateLabel: formatDate(showcase),
        sortDate: showcase,
        time: '10:00 AM - 6:00 PM',
        location: 'Embrace Boys Centre - Ruiru',
      },
      {
        id: 'forge-july-camp',
        title: 'FORGE - Registration On-going (July Camp)',
        category: 'Program',
        color: 'bg-[#FF6F3C]',
        dateLabel: formatDateRange(forgeStart, forgeEnd),
        sortDate: forgeStart,
        endDate: forgeEnd,
        time: 'July Camp: 13th - 26th July',
        location: 'Location TBC',
        slotsTotal: 12,
        slotsRemaining: 12,
      },
    ]
      .slice()
      .sort((a, b) => a.sortDate.getTime() - b.sortDate.getTime());
  }, []);

  const [slotsById, setSlotsById] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    for (const e of initialEvents) {
      if (typeof e.slotsRemaining === 'number') initial[e.id] = e.slotsRemaining;
    }
    return initial;
  });

  const events = useMemo(() => {
    return initialEvents.map((e) => {
      if (typeof e.slotsRemaining !== 'number') return e;
      return {
        ...e,
        slotsRemaining: slotsById[e.id] ?? e.slotsRemaining,
      };
    });
  }, [initialEvents, slotsById]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Upcoming <span className="text-[#FF6F3C]">Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for workshops, camps, and leadership programs designed to empower and
            inspire the next generation of leaders.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className={`${event.color} h-2`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    {event.category}
                  </span>
                  <Calendar className="w-5 h-5 text-[#FF6F3C]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#FF6F3C] transition-colors">
                  {event.title}
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3 text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#006B3F]" />
                    <span>{event.dateLabel}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-gray-600">
                    <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#006B3F]" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#006B3F]" />
                    <span>{event.location}</span>
                  </div>
                  {typeof event.slotsRemaining === 'number' && (
                    <div className="flex items-start gap-3 text-sm text-gray-600">
                      <Users className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#006B3F]" />
                      <span>
                        Slots remaining: <span className="font-semibold">{event.slotsRemaining}</span>
                        {typeof event.slotsTotal === 'number' ? ` / ${event.slotsTotal}` : ''}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={REGISTER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      if (typeof event.slotsRemaining !== 'number') return;
                      setSlotsById((prev) => {
                        const current = prev[event.id] ?? event.slotsRemaining ?? 0;
                        if (current <= 0) return prev;
                        return { ...prev, [event.id]: current - 1 };
                      });
                    }}
                    className={`flex items-center justify-center gap-2 font-semibold transition-all duration-300 ${
                      typeof event.slotsRemaining === 'number' && event.slotsRemaining <= 0
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-[#FF6F3C] hover:gap-4'
                    }`}
                    aria-disabled={typeof event.slotsRemaining === 'number' && event.slotsRemaining <= 0}
                    onMouseDown={(e) => {
                      if (typeof event.slotsRemaining === 'number' && event.slotsRemaining <= 0) {
                        e.preventDefault();
                      }
                    }}
                  >
                    Register Now <ArrowRight className="w-5 h-5" />
                  </a>

                  {event.showJoinNow && (
                    <button
                      type="button"
                      disabled
                      className="flex items-center justify-center gap-2 text-gray-400 font-semibold cursor-not-allowed"
                      title="Join link will be provided later"
                    >
                      Join Now <ArrowRight className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FF6F3C] text-white px-8 py-4 rounded-full hover:bg-[#e55a2a] transition-all duration-300 transform hover:scale-105"
          >
            View Full Calendar
          </a>
        </div>
      </div>
    </section>
  );
}
