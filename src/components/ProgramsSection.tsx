import React, { useState } from 'react';
import { Target, Lightbulb, Mountain, BookOpen, ArrowRight, X, Users, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function ProgramsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProgram, setSelectedProgram] = useState<null | typeof programs[0]>(null);

  const filters = ['All', 'Leadership', 'LEADERSHIP', 'Rites of Passage', 'Outdoor Adventure', 'Experiential Learning'];

  const programs = [
    {
      name: "FORGE: Africa's Premier Rites of Passage Program",
      category: 'Rites of Passage',
      description: 'Our flagship Rites of Passage program; run over 6-months of mentorship, coaching and development, with a 14-day Rites camp that involves mentorship sessions, adventure activities, obstacle courses and rock climbing to build grit, leadership, and identity through experiential learning.',
      icon: Target,
      image: `${import.meta.env.BASE_URL}forge_logo.png`,
      duration: '6 months',
      ageGroup: '12-14 years',
      price: 'KSh 128,500',
      detailedInfo: {
        focus: 'A 6-month Rites program centred on identity and positive masculinity.',
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
      name: 'BUILD (Ages 18-24)',
      category: 'LEADERSHIP',
      description: 'A 3-month semi-incubation program for older youth focused on innovation, entrepreneurial leadership, and turning ideas into tangible projects and social enterprises.',
      icon: Lightbulb,
      image: `${import.meta.env.BASE_URL}build-image.jpg`,
      duration: '3 months',
      ageGroup: '18-24 years',
      price: 'KSh 44,000',
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
      name: 'iDECIDE (Ages 13-15) Boys Mentorship Model',
      category: 'Project-Based Learning',
      description: 'A 4-month intensive life coaching model combining online and outdoor activities, emphasising decision-making skills, mission-setting, and personal development.',
      icon: BookOpen,
      image: `${import.meta.env.BASE_URL}iDECIDE-logo.jpeg`,
      duration: '4 months',
      ageGroup: '13-15 years',
      price: 'KSh 28,500',
      detailedInfo: {
        focus: 'A 4-month intensive life coaching model consisting of twelve interactive sessions.',
        methodology: 'This program combines online and outdoor activities, using tools like the iDECIDE Journal and the 20/20 Vision year planner to track progress.',
        purpose: 'It empowers young men to define their life mission, set goals, and develop the capacity to make decisions that positively impact their community.',
        keyFeatures: [
          'Twelve interactive coaching sessions',
          'iDECIDE Journal for self-reflection',
          '20/20 Vision year planner',
          'Online and outdoor activities',
          'Life mission definition',
          'Goal setting and decision-making skills'
        ]
      }
    },
    {
      name: 'ManUp Leadership Adventures (Ages 9-13)',
      category: 'Outdoor Adventure',
      description: 'Short, high-impact 3-5 day excursions involving hiking, camping, and outdoor challenges to inspire responsible leadership and build character.',
      icon: Mountain,
      image: `${import.meta.env.BASE_URL}Man_Up_Adventures.jpeg`,
      duration: '3-5 days',
      ageGroup: '9-13 years',
      price: 'Varies by activity',
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
      name: 'Mentorship Circle (1-on-1 Coaching)',
      category: 'Leadership',
      description: 'Ongoing mentorship program connecting young men with experienced leaders for one-on-one guidance, support, and personal development.',
      icon: Users,
      image: `${import.meta.env.BASE_URL}mentorship-circle.jpg`,
      duration: 'Ongoing',
      ageGroup: 'All ages',
      price: 'KSh 5,000',
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
      name: 'X Global Summer Experiences',
      category: 'Project-Based Learning',
      description: 'Hands-on design thinking workshops where young men develop innovative solutions to real-world problems through collaborative projects.',
      icon: Lightbulb,
      image: `${import.meta.env.BASE_URL}XGlobal_Summer_Camps.jpeg`,
      duration: '4 months',
      ageGroup: 'All ages',
      price: 'Varies',
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
            Our <span className="text-orange-600">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive programs designed to transform boys into confident,
            capable leaders ready to make a positive impact.
          </p>
        </motion.div>

        {/* Programs Featured Videos Stack */}
        <div className="flex flex-col gap-16 mb-20 max-w-4xl mx-auto w-full">
          {/* Programs Overview Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col w-full"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Programs Overview
            </h3>
            <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-50 aspect-video w-full">
              <video 
                controls 
                className="w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1640951332580-1072ff909952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwYWR2ZW50dXJlJTIwY2FtcHxlbnwxfHx8fDE3Njc5NjE0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
              >
                <source src={`${import.meta.env.BASE_URL}yazua-programs-overview.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-center text-gray-600 text-sm mt-4">
              Watch this brief introduction to learn about all our programs and their impact
            </p>
          </motion.div>

          {/* FORGE Program Featured Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col w-full items-center text-center pt-12 border-t border-gray-250/50"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-1 font-serif">
              FORGE PROGRAM
            </h3>
            <p className="text-orange-600 font-semibold text-lg mb-6 uppercase tracking-wider">
              Africa's Premier Rites of Passage Programme
            </p>
            <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-50 aspect-video w-full mb-6">
              <video 
                controls 
                className="w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwYWR2ZW50dXJlJTIwY2FtcHxlbnwxfHx8fDE3Njc5NjE0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
              >
                <source src={`${import.meta.env.BASE_URL}wamba_mim_shark (1).mp4`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="max-w-2xl mx-auto space-y-3">
              <p className="text-xl sm:text-2xl font-serif italic text-gray-950 font-semibold leading-relaxed">
                "Every Boy Deserves a Moment That Changes the Direction of His Life."
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                FORGE is Yazua Afrika's flagship 14-day residential rites of passage programme for boys aged 12–14 years.
              </p>
            </div>
          </motion.div>
        </div>

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
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    {React.createElement(program.icon, {
                      className: 'w-8 h-8 text-orange-600',
                    })}
                    <span className="text-sm text-orange-600 font-semibold uppercase tracking-wide">
                      {program.category}
                    </span>
                  </div>
                  {program.price && (
                    <span className="text-sm font-bold text-gray-950 bg-gray-100 px-3 py-1 rounded-lg">
                      {program.price}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {program.name}
                </h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <button className="flex items-center gap-2 text-orange-600 font-semibold hover:gap-4 transition-all duration-300">
                  Learn More <ArrowRight className="w-5 h-5" />
                </button>
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
                    {selectedProgram.name.includes('FORGE') ? "FORGE: Africa's Premier Rites of Passage Program" : selectedProgram.name}
                  </h2>
                  <div className="flex gap-4 text-white/90 text-sm">
                    <span>⏱️ {selectedProgram.duration}</span>
                    <span>👥 {selectedProgram.ageGroup}</span>
                    {selectedProgram.price && <span>💰 {selectedProgram.price}</span>}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {selectedProgram.name.includes('FORGE') ? (
                  <div className="space-y-8">
                    {/* Tagline */}
                    <div className="border-l-4 border-[#FF6F3C] pl-4 py-2 italic text-xl font-medium text-gray-800 bg-orange-50/50 rounded-r-xl">
                      "Every Boy Deserves a Moment That Changes the Direction of His Life."
                    </div>

                    {/* Introductory narrative */}
                    <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                      <p>
                        A boy does not become a man because he turns thirteen. He becomes a man through challenge, responsibility, mentorship. Through moments that ask more of him than he thought he could give.
                      </p>
                      <p>
                        For thousands of years, communities understood this. They created rites of passage that marked the transition from dependence to responsibility, from childhood to contribution.
                      </p>
                      <p>
                        Modern society has largely abandoned these rituals. Boys are expected to figure it out on their own.
                      </p>
                      <p className="font-semibold text-gray-900 border-b border-gray-100 pb-2">
                        FORGE exists to restore what has been lost.
                      </p>
                      <p>
                        FORGE is Yazua Afrika's flagship 14-day residential rites of passage for boys aged 12–14 years. It is an immersive experience that combines adventure, leadership formation, mentorship, service and brotherhood to help boys discover who they are and who they are becoming.
                      </p>
                      <p className="italic font-semibold text-[#FF6F3C]">
                        This is not a holiday camp. It is an intentional journey of formation.
                      </p>
                    </div>

                    {/* Why FORGE? */}
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 text-[#FF6F3C]">Why FORGE?</h3>
                      <div className="space-y-3 text-gray-700 leading-relaxed">
                        <p>
                          Adolescence is one of the most important transitions in a young man's life. It is the season when boys begin asking deeper questions:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
                          <div className="bg-white p-3 rounded-xl border border-gray-200 text-center font-semibold text-gray-800">Who am I?</div>
                          <div className="bg-white p-3 rounded-xl border border-gray-200 text-center font-semibold text-gray-800">What kind of man do I want to become?</div>
                          <div className="bg-white p-3 rounded-xl border border-gray-250 text-center font-semibold text-gray-800">Where do I belong?</div>
                        </div>
                        <p>
                          Without guidance, boys often seek answers from peers, social media and unhealthy influences.
                        </p>
                        <p className="font-semibold text-gray-900">
                          At FORGE, they find something different. They find mentors. They find challenge. They find brotherhood.
                        </p>
                        <p>
                          Most importantly, they begin building an identity rooted in character rather than popularity, courage rather than performance, and purpose rather than pressure.
                        </p>
                      </div>
                    </div>

                    {/* Built Around Three Pillars */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-[#FF6F3C] rounded-full inline-block"></span>
                        Built Around Three Pillars
                      </h3>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white border-2 border-gray-100 rounded-xl p-5 hover:border-orange-200 transition-colors shadow-sm">
                          <h4 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-wide text-[#FF6F3C]">Structure</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            Boys flourish when healthy boundaries create safety and consistency. FORGE provides an environment where discipline, responsibility and accountability become daily habits rather than occasional lessons.
                          </p>
                        </div>
                        <div className="bg-white border-2 border-gray-100 rounded-xl p-5 hover:border-orange-200 transition-colors shadow-sm">
                          <h4 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-wide text-[#FF6F3C]">Formation</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            Character is not taught in lectures. It is formed through experience. Every activity—from preparing meals to leading a team, overcoming obstacles and reflecting around the campfire—is designed to cultivate resilience, humility, emotional intelligence, leadership and integrity.
                          </p>
                        </div>
                        <div className="bg-white border-2 border-gray-100 rounded-xl p-5 hover:border-orange-200 transition-colors shadow-sm">
                          <h4 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-wide text-[#FF6F3C]">Purpose</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            Every boy carries unique gifts. FORGE helps him recognise them. By the end of the journey, each participant begins to understand that masculinity is not about dominance or status—it is about responsibility, contribution and service.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* What Happens During the 14 Days? */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-[#FF6F3C] rounded-full inline-block"></span>
                        What Happens During the 14 Days?
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Each experience builds upon the previous one, creating a transformational journey rather than a collection of activities. The experience includes:
                      </p>
                      <div className="grid md:grid-cols-2 gap-3 pl-2">
                        {[
                          "White-water rafting in Sagana",
                          "High ropes and outdoor adventure challenges",
                          "Leadership development workshops",
                          "Team challenges and problem-solving activities",
                          "Daily mentoring circles",
                          "Campfire conversations",
                          "Reflection and journaling",
                          "Character and values formation",
                          "Brotherhood experiences",
                          "Service and responsibility activities",
                          "Personal growth coaching"
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
                            <span className="w-1.5 h-1.5 bg-[#006B3F] rounded-full flex-shrink-0"></span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* What Your Son Will Gain */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-[#FF6F3C] rounded-full inline-block"></span>
                        What Your Son Will Gain
                      </h3>
                      <p className="text-gray-600 mb-4">
                        These are qualities that continue developing long after the programme ends. By the end of FORGE, boys leave with:
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pl-2">
                        {[
                          "Greater confidence",
                          "Emotional resilience",
                          "Stronger self-discipline",
                          "Leadership skills",
                          "Healthy friendships",
                          "Improved communication",
                          "Greater independence",
                          "Respect for self and others",
                          "Practical life skills",
                          "A clearer sense of identity",
                          "A deeper understanding of responsibility",
                          "A personal vision for the future"
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
                            <span className="w-1.5 h-1.5 bg-[#FF6F3C] rounded-full flex-shrink-0"></span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* The Power of Brotherhood & A Safe Experience */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-orange-50/50 p-5 rounded-xl border border-orange-100">
                        <h4 className="font-bold text-gray-900 mb-2 text-orange-700 font-semibold">The Power of Brotherhood</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          Boys become better men in the company of other boys who are pursuing the same ideals. FORGE intentionally creates a brotherhood where boys encourage one another, learn together, overcome challenges together and celebrate one another's growth. Many leave with friendships that last for years.
                        </p>
                      </div>
                      <div className="bg-green-50/30 p-5 rounded-xl border border-green-100">
                        <h4 className="font-bold text-gray-900 mb-2 text-green-800 font-semibold">A Safe, Highly Personal Experience</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          To ensure every boy receives meaningful mentorship and individual attention, each cohort is intentionally limited to 12 participants. This allows our mentors to know every boy personally, support his individual journey and create a deeply engaging learning environment.
                        </p>
                      </div>
                    </div>

                    {/* Programme Details */}
                    <div className="bg-gray-900 text-white rounded-2xl p-6 shadow-lg border border-gray-800">
                      <h4 className="text-xl font-bold mb-4 text-[#FF6F3C] uppercase tracking-wide">Programme Details</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                        <div className="space-y-4">
                          <div>
                            <span className="text-gray-400 block text-xs uppercase font-semibold">Age Group</span>
                            <span className="text-lg font-semibold">12–14 Years</span>
                          </div>
                          <div>
                            <span className="text-gray-400 block text-xs uppercase font-semibold">Duration</span>
                            <span className="text-lg font-semibold">14 Days (Residential)</span>
                          </div>
                          <div>
                            <span className="text-gray-400 block text-xs uppercase font-semibold">Locations</span>
                            <span className="text-lg font-semibold">Sagana & Scripture Mission, Karen</span>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <span className="text-gray-400 block text-xs uppercase font-semibold">2026 Cohorts</span>
                            <span className="text-lg font-semibold block">📅 13–26 July 2026</span>
                            <span className="text-lg font-semibold block">📅 4–17 August 2026</span>
                          </div>
                          <div>
                            <span className="text-[#FF6F3C] block text-xs uppercase font-semibold">Investment</span>
                            <span className="text-2xl font-bold text-white">KSh 128,500 <span className="text-xs text-gray-400 font-normal">(All Inclusive)</span></span>
                            <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                              The programme fee includes accommodation, meals, transport during programme activities, adventure experiences, white-water rafting, training materials, mentorship, facilitation and all scheduled activities.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Is FORGE Right for Your Son? */}
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-gray-700 leading-relaxed text-sm">
                      <h4 className="font-bold text-gray-950 mb-2">Is FORGE Right for Your Son?</h4>
                      <p>
                        FORGE is designed for boys who are ready to grow in confidence, leadership and character. Whether your son is adventurous or reserved, confident or uncertain, FORGE meets him where he is and helps him take meaningful steps toward becoming the young man he is capable of being.
                      </p>
                    </div>

                    {/* A Rite of Passage. A Beginning. */}
                    <div className="text-center py-4 border-t border-b border-gray-150 my-6">
                      <p className="text-lg font-semibold text-gray-900 max-w-2xl mx-auto italic">
                        "Parents often tell us they see noticeable changes after FORGE. Not because fourteen days can finish the work of raising a young man. But because fourteen intentional days can change the direction of one."
                      </p>
                      <p className="text-sm text-gray-500 mt-2 font-medium">At Yazua Afrika, we believe every boy deserves that opportunity.</p>
                    </div>

                    {/* CTA Register Box */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                      <a
                        href="https://forms.gle/KBUKxbZijTuQVhhF8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#FF6F3C] text-white px-8 py-4 rounded-full hover:bg-[#e55a2a] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 font-semibold"
                      >
                        Register for FORGE 2026
                        <ArrowRight className="w-5 h-5" />
                      </a>
                      <a
                        href="tel:+254734631650"
                        className="flex-1 bg-gray-100 text-gray-900 px-8 py-4 rounded-full hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
                      >
                        Call Us
                      </a>
                    </div>
                  </div>
                ) : (
                  <>
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
                      <a
                        href="https://forms.gle/ysGpcAzpi9VqisPG6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#FF6F3C] text-white px-8 py-4 rounded-full hover:bg-[#e55a2a] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 font-semibold"
                      >
                        Book Now
                        <ArrowRight className="w-5 h-5" />
                      </a>
                      <a
                        href="tel:+254734631650"
                        className="flex-1 bg-gray-100 text-gray-900 px-8 py-4 rounded-full hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
                      >
                        Call Us
                      </a>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}