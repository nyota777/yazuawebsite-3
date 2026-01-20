import React from 'react';
import { motion } from 'motion/react';

export function AboutSection() {
  const milestones = [
    { 
      year: '2011', 
      title: 'Carpe Diem Consultancy Registered', 
      description: 'Registered Carpe Diem Consultancy to help drive and give the mentorship programs a vehicle for operations.' 
    },
    { 
      year: '2016', 
      title: 'First Structured Mentorship Curriculum', 
      description: 'Developed the first structured mentorship curriculum for teenage boys. Took 200 boys through the model in sports academies, schools and churches.' 
    },
    { 
      year: '2019', 
      title: 'Rites of Passage & BUILD Models', 
      description: 'Developed a 1. Rites of Passage Model 2. BUILD Model for boys aged 18 - 24 years. 3. Completed the iDECIDE Journal of Mentorship for boys.' 
    },
    { 
      year: '2020', 
      title: 'First Online Mentorship Program', 
      description: 'Ran the first fully online boys mentorship program over the Covid years.' 
    },
    { 
      year: '2021', 
      title: 'Leadership & Entrepreneurship Games', 
      description: 'Developed a puzzle and card game for mentoring boys on leadership and entrepreneurship within the continent of Africa.' 
    },
    { 
      year: '2022', 
      title: 'Continental Expansion & National Strategy Development', 
      description: 'Secured strategic partnerships with 5 boys high schools across Kenya, establishing our mentorship programs as a cornerstone of youth development. Expanded our reach with implementation and presence in 5 African countries: Kenya, South Africa, Rwanda, Botswana, and the Democratic Republic of Congo. Developed the National Male Engagement Strategy for Kenya, positioning YAZUA AFRIKA as a key player in shaping the future of boys\' mentorship at a national level.' 
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <img 
              src={`${import.meta.env.BASE_URL}yazua_logo.png`} 
              alt="YAZUA AFRIKA Logo" 
              className="h-24 w-auto bg-transparent"
              style={{ backgroundColor: 'transparent' }}
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-[#FF6F3C]">YAZUA AFRIKA</span>
          </h2>
          <div className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed space-y-4 text-left">
            <p>
              Yazua Afrika exists because boyhood is not a waiting room, it is a formative terrain. What happens here determines the kind of men our societies inherit.
            </p>
            <p>
              We are a boys' development organisation dedicated to the intentional formation of young men for leadership, responsibility, and meaningful contribution. Drawing on experiential development models, we work at the intersection of mentorship, project-based learning, and outdoor challenge. Boys do not grow by instruction alone, but by experience that demands courage, reflection, and choice.
            </p>
            <p>
              Development is not accidental, it is FORGED. Through rites of passage, sustained mentorship sessions, and carefully designed experiences, we guide boys as they learn to test themselves, understand their strengths, confront failure, and build character under pressure. In a world increasingly loud with shallow definitions of masculinity, we offer something quieter, deeper, and more enduring: competence, integrity, empathy, and purpose.
            </p>
            <p>
              Our vision is generational. We imagine communities shaped by men who are grounded rather than entitled, capable rather than performative, and accountable to something larger than themselves. Men who can lead, collaborate, care, and create value at home, at work, and in society.
            </p>
            <p className="font-semibold">
              Yazua Afrika is not about fixing broken boys. It is about taking boyhood seriously, and giving it the structure, challenge, and guidance it has always required.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200 hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-4xl font-bold text-orange-600 mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-full md:w-2/12 flex justify-center my-4 md:my-0">
                    <div className="w-6 h-6 bg-orange-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-full md:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}