import React from 'react';
import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ChatWidget } from '../components/ChatWidget';

export function AboutPage() {
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
      year: '2022 – Present', 
      title: 'Continental Expansion, National Strategy & Program Architecture', 
      description: 'Yazua Afrika entered a new phase of continental growth and institutional influence. We secured strategic mentorship partnerships with leading boys\' secondary schools across Kenya, embedding our mentorship and leadership frameworks as foundational pillars within their student development ecosystems. Simultaneously, Yazua Afrika expanded its implementation footprint across five African countries: Kenya, South Africa, Rwanda, Botswana, and the Democratic Republic of Congo, extending our model of relational mentorship, rites of passage, and leadership formation to diverse cultural and educational contexts. Beyond implementation, Yazua Afrika became a key contributor to the development of Kenya\'s National Male Engagement Strategy, positioning the organization as a national thought partner in shaping policy, practice, and long-term approaches to boys\' and young men\'s development. During this period, we also significantly strengthened our intellectual and program architecture, designing and refining proprietary curricula, leadership frameworks, mentorship methodologies, and flagship programs. This work ensured that Yazua Afrika\'s approach moved beyond isolated interventions toward a scalable, research-informed system for the holistic formation of boys and young men.' 
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              About <span className="text-[#FF6F3C]">Yazua Afrika</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-lg text-gray-700 leading-relaxed space-y-6 mb-12">
              <p>
                Yazua Afrika is a community-focused organization dedicated to nurturing potential and driving positive social impact across Africa.
              </p>
              <p>
                Through structured mentorship programs, community initiatives, and transparent donation platforms, Yazua Afrika empowers individuals to build skills, access guidance, and contribute meaningfully to sustainable development.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-50 rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Work
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                At Yazua Afrika, we exist to intentionally form boys and young men into grounded, ethical, and purpose-driven leaders. Our work is anchored in four interconnected pillars:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Mentorship & Boys Development
                  </h3>
                  <p className="text-lg text-gray-700">
                    We place consistent, trusted mentorship at the centre of development, ensuring every boy is seen, guided, and challenged to grow in identity, responsibility, and leadership.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Education & Skills for Life
                  </h3>
                  <p className="text-lg text-gray-700">
                    We go beyond academics to develop critical thinking, emotional intelligence, and practical life skills that prepare young people to navigate complexity with confidence and integrity.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Community & Social Impact
                  </h3>
                  <p className="text-lg text-gray-700">
                    We strengthen the ecosystems around boys, their families, schools, and communities, creating networks of support, accountability, and belonging that sustain long-term growth.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Ethical Partnerships & Transparency
                  </h3>
                  <p className="text-lg text-gray-700">
                    We collaborate with aligned partners through clear governance, shared values, and transparent engagement to ensure trust, integrity, and measurable impact.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 text-center"
            >
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                At Yazua Afrika, we believe lasting change happens when people are equipped, supported, and inspired to lead transformation within their own communities.
              </p>
            </motion.div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20"
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
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
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
      <Footer />
      <ChatWidget />
    </div>
  );
}

