import React from 'react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function EventCalendar() {
  const events = [
    {
      title: 'FORGE Program - New Cohort',
      date: 'February 15, 2026',
      time: '9:00 AM - 12:00 PM',
      location: 'Marula Close No. 40, Karen, Nairobi',
      category: 'Program Launch',
      color: 'bg-[#FF6F3C]',
    },
    {
      title: 'ManUp Leadership Adventure - Mt. Kenya',
      date: 'March 5-9, 2026',
      time: '5-Day Expedition',
      location: 'Mount Kenya National Park',
      category: 'Outdoor Adventure',
      color: 'bg-[#006B3F]',
    },
    {
      title: 'BUILD Innovation Workshop',
      date: 'March 20, 2026',
      time: '2:00 PM - 5:00 PM',
      location: 'YAZUA AFRIKA Headquarters',
      category: 'Workshop',
      color: 'bg-[#1A1A1A]',
    },
    {
      title: 'iDECIDE Life Coaching Session',
      date: 'April 10, 2026',
      time: '10:00 AM - 1:00 PM',
      location: 'Online & In-Person',
      category: 'Coaching',
      color: 'bg-[#8B7355]',
    },
    {
      title: 'Parent Information Session',
      date: 'April 25, 2026',
      time: '6:00 PM - 8:00 PM',
      location: 'YAZUA AFRIKA Headquarters',
      category: 'Information Session',
      color: 'bg-[#FF6F3C]',
    },
    {
      title: 'Community Impact Showcase',
      date: 'May 15, 2026',
      time: '3:00 PM - 6:00 PM',
      location: 'Karen Community Center',
      category: 'Community Event',
      color: 'bg-[#006B3F]',
    },
  ];

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
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-gray-600">
                    <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#006B3F]" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#006B3F]" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-[#FF6F3C] font-semibold hover:gap-4 transition-all duration-300">
                  Register Now <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#FF6F3C] text-white px-8 py-4 rounded-full hover:bg-[#e55a2a] transition-all duration-300 transform hover:scale-105">
            View Full Calendar
          </button>
        </div>
      </div>
    </section>
  );
}
