import React, { useState } from 'react';
import { Target, Lightbulb, Mountain, BookOpen, ArrowRight, X, Users, CheckCircle, DollarSign } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function ProgramsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProgram, setSelectedProgram] = useState<null | typeof programs[0]>(null);

  const filters = ['All', 'Leadership', 'LEADERSHIP', 'Rites of Passage', 'Outdoor Adventure', 'Experiential Learning'];

  const programs = [
    {
      name: 'MAN UP LEADERSHIP ADVENTURES (AGES 9-13)', 
      category: 'Outdoor Adventure',
      description: 'Short, high-impact 3-5 day excursions involving hiking, camping, and outdoor challenges to inspire responsible leadership and build character.',
      icon: Mountain,
      image: `${import.meta.env.BASE_URL}Man_Up_Adventures.jpeg`,
      duration: '3-5 days',
      ageGroup: '9-13 years',
      pricing: 'Kes. 1,500 - Kes. 9,500',
      detailedInfo: {
        focus: 'Short, high-impact excursions lasting 3–5 days.',
        methodology: 'Participants engage in hiking, camping, and outdoor obstacle courses.',
        purpose: 'These adventures are designed to help young men discover their leadership potential and mission through group challenges and experiential learning.',
        keyFeatures: [
          'Multi-day hiking expeditions',
          'Camping and outdoor survival skills',
          'Outdoor obstacle courses',
          'Group leadership challenges',
          'Experiential learning activities',
          'Character development exercises'
        ]
      }
    },
    {
      name: 'FORGE (Ages 12-14)',
      category: 'Rites of Passage',
      description: 'A flagship 6-month program using physically challenging activities like obstacle courses and rock climbing to build grit, leadership, and identity through Rites of Passage.',
      icon: Target,
      image: `${import.meta.env.BASE_URL}forge_logo.png`,
      duration: '6 months',
      ageGroup: '12-14 years',
      pricing: 'Kes. 128,500',
      detailedInfo: {
        focus: 'A 6-month flagship leadership program centered on identity and positive masculinity.',
        methodology: 'It utilizes physically challenging activities, such as obstacle courses and rock climbing, to build "grit".',
        purpose: 'The program aims to initiate a mind-shift regarding entrepreneurial leadership and prepares boys for the "Rites of Passage" by helping them understand their role as men in society.',
        keyFeatures: [
          'Physically challenging obstacle courses',
          'Rock climbing and outdoor adventures',
          'Identity formation workshops',
          'Positive masculinity coaching',
          'Rites of Passage preparation',
          'Entrepreneurial leadership mindset'
        ]
      }
    },
    {
      name: 'IDECIDE (AGES 13-15) BOYS MENTORSHIP MODEL',
      category: 'Project-Based Learning',
      description: 'A 6-month intensive life coaching model combining online and outdoor activities, emphasizing decision-making skills, mission-setting, and personal development.',
      icon: BookOpen,
      image: `${import.meta.env.BASE_URL}iDECIDE-logo.jpeg`,
      duration: '6 months',
      ageGroup: '13-17 years',
      pricing: 'Kes. 28,800',
      detailedInfo: {
        focus: 'A 6-month intensive life coaching model consisting of eight interactive sessions.',
        methodology: 'This program combines online and outdoor activities, using tools like the iDECIDE Journal and the 20/20 Vision year planner to track progress.',
        purpose: 'It empowers young men to define their life mission, set goals, and develop the capacity to make decisions that positively impact their community.',
        keyFeatures: [
          'Eight interactive coaching sessions',
          'iDECIDE Journal for self-reflection',
          '20/20 Vision year planner',
          'Online and outdoor activities',
          'Life mission definition',
          'Goal setting and decision-making skills'
        ]
      }
    },
    {
      name: 'BUILD (Ages 18-24)',
      category: 'LEADERSHIP',
      description: 'A 3-month semi-incubation program for older youth focused on innovation, entrepreneurial leadership, and turning ideas into tangible projects and social enterprises.',
      icon: Lightbulb,
      image: `${import.meta.env.BASE_URL}build-image.jpg`,
      duration: '3 months',
      ageGroup: '18-24 years',
      pricing: 'Kes. 31,500',
      detailedInfo: {
        focus: 'A 3-month semi-incubation program for older youth.',
        methodology: 'It emphasizes project-based learning where students submit ideas and prototypes for refinement with the help of experienced tutors and engineers.',
        purpose: 'The goal is to turn innovative ideas into tangible projects and social enterprises, connecting the best participants with investors and industry partners for commercialization.',
        keyFeatures: [
          'Project-based learning approach',
          'Idea and prototype development',
          'Mentorship from experienced tutors and engineers',
          'Social enterprise development',
          'Investor connections',
          'Industry partnership opportunities'
        ]
      }
    },
    {
      name: 'MENTORSHIP CIRCLE',
      category: 'Leadership',
      description: 'Ongoing mentorship program connecting young men with experienced leaders for one-on-one guidance, support, and personal development.',
      icon: Users,
      image: `${import.meta.env.BASE_URL}mentorship-circle.jpg`,
      duration: 'Ongoing',
      ageGroup: 'All ages',
      pricing: 'Kes. 1,500 - Kes. 3,500',
      detailedInfo: {
        focus: 'An ongoing initiative that connects young men with experienced leaders for one-on-one guidance.',
        methodology: 'Structured mentorship meetings with regular check-ins and goal tracking.',
        purpose: 'It aims to bridge the gap between generations, allowing mentors to share wisdom while supporting the personal and professional growth of their mentees.',
        keyFeatures: [
          'One-on-one mentorship pairing',
          'Experienced leader guidance',
          'Personal development support',
          'Professional growth planning',
          'Intergenerational wisdom sharing',
          'Regular progress tracking'
        ]
      }
    },
    {
      name: 'X GLOBAL SUMMER EXPERIENCES',
      category: 'Project-Based Learning',
      description: 'Hands-on design thinking workshops where young men develop innovative solutions to real-world problems through collaborative projects.',
      icon: Lightbulb,
      image: `${import.meta.env.BASE_URL}XGlobal_Summer_Camps.jpeg`,
      duration: '4 months',
      ageGroup: 'All ages',
      pricing: '$350 - $5,000 (cost dependent on program)',
      detailedInfo: {
        focus: 'A 4-month program featuring hands-on design thinking workshops.',
        methodology: 'Participants collaborate on projects to develop innovative solutions for real-world problems.',
        purpose: 'It serves as a space for "makers, thinkers, and doers" to build and test ideas that can impact African communities.',
        keyFeatures: [
          'Design thinking methodology',
          'Hands-on project development',
          'Collaborative team projects',
          'Real-world problem solving',
          'Prototyping and testing',
          'Community impact focus'
        ]
      }
    },
  ];

  const filteredPrograms =
    activeFilter === 'All'
      ? programs
      : programs.filter((program) => program.category === activeFilter);

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#c7211a]">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive programs designed to transform boys into confident,
            capable leaders ready to make a positive impact.
          </p>
        </motion.div>

        {/* Programs Overview Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 max-w-4xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <video 
              controls 
              className="w-full"
              poster="https://images.unsplash.com/photo-1640951332580-1072ff909952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwYWR2ZW50dXJlJTIwY2FtcHxlbnwxfHx8fDE3Njc5NjE0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            >
              <source src={`${import.meta.env.BASE_URL}yazua-programs-overview.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-gray-600 mt-4">
            Watch this brief introduction to learn about all our programs and their impact
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program, index) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
              onClick={() => setSelectedProgram(program)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {program.duration}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  {React.createElement(program.icon, {
                    className: 'w-8 h-8 text-orange-600',
                  })}
                  <span className="text-sm text-orange-600 font-semibold uppercase tracking-wide">
                    {program.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {program.name}
                </h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                {program.name === 'X GLOBAL SUMMER EXPERIENCES' ? (
                  <div className="flex flex-col gap-2">
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLScgQFCd6OGjLMY_todC0RzURWWbU4vlCkuFQGOmSktdW2uzmA/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#FF6F3C] text-white px-6 py-3 rounded-full hover:bg-[#e55a2a] transition-all duration-300 transform hover:scale-105 font-semibold"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Register Now <ArrowRight className="w-5 h-5" />
                    </a>
                    <a
                      href="https://book.heygoldie.com/Yazua-Afrika"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-gray-100 text-gray-900 px-6 py-3 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 font-semibold"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Book Now <ArrowRight className="w-5 h-5" />
                    </a>
                    <button className="flex items-center gap-2 text-orange-600 font-semibold hover:gap-4 transition-all duration-300">
                      Learn More <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <button className="flex items-center gap-2 text-orange-600 font-semibold hover:gap-4 transition-all duration-300">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Program Detail Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            onClick={() => setSelectedProgram(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={selectedProgram.image}
                  alt={selectedProgram.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  aria-label="Close"
                >
                  <X className="w-6 h-6 text-gray-900" />
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-3">
                    {React.createElement(selectedProgram.icon, {
                      className: 'w-10 h-10 text-[#FF6F3C]',
                    })}
                    <span className="text-sm text-white font-semibold uppercase tracking-wide bg-[#FF6F3C] px-3 py-1 rounded-full">
                      {selectedProgram.category}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {selectedProgram.name}
                  </h2>
                  <div className="flex gap-4 text-white/90 text-sm">
                    <span>⏱️ {selectedProgram.duration}</span>
                    <span>👥 {selectedProgram.ageGroup}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Pricing */}
                {selectedProgram.pricing && (
                  <div className="mb-8 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6 border-2 border-orange-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <DollarSign className="w-6 h-6 text-[#FF6F3C]" />
                      Pricing
                    </h3>
                    <p className="text-2xl font-bold text-[#FF6F3C]">
                      {selectedProgram.pricing}
                    </p>
                  </div>
                )}
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  {selectedProgram.description}
                </p>

                {/* Focus */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Target className="w-6 h-6 text-[#FF6F3C]" />
                    Focus
                  </h3>
                  <p className="text-gray-700 leading-relaxed pl-8">
                    {selectedProgram.detailedInfo.focus}
                  </p>
                </div>

                {/* Methodology */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-[#FF6F3C]" />
                    Methodology
                  </h3>
                  <p className="text-gray-700 leading-relaxed pl-8">
                    {selectedProgram.detailedInfo.methodology}
                  </p>
                </div>

                {/* Purpose */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Lightbulb className="w-6 h-6 text-[#FF6F3C]" />
                    Purpose
                  </h3>
                  <p className="text-gray-700 leading-relaxed pl-8">
                    {selectedProgram.detailedInfo.purpose}
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-[#FF6F3C]" />
                    Key Features
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3 pl-8">
                    {selectedProgram.detailedInfo.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#006B3F] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                  {selectedProgram.name === 'X GLOBAL SUMMER EXPERIENCES' ? (
                    <>
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScgQFCd6OGjLMY_todC0RzURWWbU4vlCkuFQGOmSktdW2uzmA/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#FF6F3C] text-white px-8 py-4 rounded-full hover:bg-[#e55a2a] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 font-semibold"
                      >
                        Register Now
                        <ArrowRight className="w-5 h-5" />
                      </a>
                      <a
                        href="https://book.heygoldie.com/Yazua-Afrika"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-100 text-gray-900 px-8 py-4 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 font-semibold"
                      >
                        Book Now
                        <ArrowRight className="w-5 h-5" />
                      </a>
                    </>
                  ) : (
                    <a
                      href="https://book.heygoldie.com/Yazua-Afrika"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#FF6F3C] text-white px-8 py-4 rounded-full hover:bg-[#e55a2a] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 font-semibold"
                    >
                      Book Now
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  )}
                  <a
                    href="tel:+254734631650"
                    className="flex-1 bg-gray-100 text-gray-900 px-8 py-4 rounded-full hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
                  >
                    Call Us
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}