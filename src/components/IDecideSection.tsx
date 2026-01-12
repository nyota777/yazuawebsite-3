import React, { useState } from 'react';
import { CheckCircle, Target, Lightbulb, Mountain, Users } from 'lucide-react';
import { motion } from 'motion/react';

export function IDecideSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const questions = [
    {
      question: 'What aspect of leadership interests you most?',
      options: [
        { text: 'Team Leadership & Collaboration', icon: Users },
        { text: 'Personal Development & Self-Discovery', icon: Target },
        { text: 'Innovation & Problem Solving', icon: Lightbulb },
        { text: 'Resilience & Character Building', icon: Mountain },
      ],
    },
    {
      question: 'What is your preferred learning style?',
      options: [
        { text: 'Hands-on Projects & Practical Experience', icon: Lightbulb },
        { text: 'Outdoor Activities & Adventure', icon: Mountain },
        { text: 'One-on-One Mentorship & Coaching', icon: Users },
        { text: 'Workshops & Group Discussions', icon: Target },
      ],
    },
    {
      question: 'What impact do you want to make?',
      options: [
        { text: 'Start a Business or Social Enterprise', icon: Lightbulb },
        { text: 'Become a Community Leader', icon: Users },
        { text: 'Inspire and Mentor Others', icon: Target },
        { text: 'Create Positive Social Change', icon: Mountain },
      ],
    },
  ];

  const handleAnswer = (option: string) => {
    setAnswers({ ...answers, [currentStep]: option });
    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
  };

  const isComplete = Object.keys(answers).length === questions.length;

  const getRecommendation = () => {
    const answerValues = Object.values(answers);
    if (answerValues.some((a) => a.includes('Business') || a.includes('Innovation'))) {
      return {
        program: 'Entrepreneur Boot Camp',
        description:
          'Perfect for aspiring entrepreneurs and innovators who want to create business solutions and social enterprises.',
      };
    } else if (answerValues.some((a) => a.includes('Outdoor') || a.includes('Resilience'))) {
      return {
        program: 'Wilderness Expedition',
        description:
          'Ideal for those seeking character development through outdoor challenges and adventure experiences.',
      };
    } else if (answerValues.some((a) => a.includes('Mentorship') || a.includes('Inspire'))) {
      return {
        program: 'Mentorship Circle',
        description:
          'Great for young men who value guidance and want to develop through meaningful relationships with mentors.',
      };
    } else {
      return {
        program: 'Young Leaders Academy',
        description:
          'Perfect for those seeking comprehensive leadership training and personal development.',
      };
    }
  };

  return (
    <section id="idecide" className="py-20 bg-gradient-to-br from-orange-50 to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-orange-600">iDecide</span> - Find Your Path
          </h2>
          <p className="text-xl text-gray-600">
            Answer a few questions to discover which YAZUA AFRIKA program is right for you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
        >
          {!isComplete ? (
            <>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-600">
                    Question {currentStep + 1} of {questions.length}
                  </span>
                  <span className="text-sm font-semibold text-orange-600">
                    {Math.round(((currentStep + 1) / questions.length) * 100)}%
                  </span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: `${((currentStep + 1) / questions.length) * 100}%`,
                    }}
                    transition={{ duration: 0.5 }}
                    className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
                  />
                </div>
              </div>

              {/* Question */}
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  {questions[currentStep].question}
                </h3>

                <div className="space-y-4">
                  {questions[currentStep].options.map((option, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(option.text)}
                      className={`w-full flex items-center gap-4 p-6 rounded-2xl border-2 transition-all duration-300 ${
                        answers[currentStep] === option.text
                          ? 'border-orange-600 bg-orange-50'
                          : 'border-gray-200 hover:border-orange-300 hover:bg-gray-50'
                      }`}
                    >
                      {React.createElement(option.icon, {
                        className: 'w-8 h-8 text-orange-600 flex-shrink-0',
                      })}
                      <span className="text-left text-lg text-gray-900 font-medium">
                        {option.text}
                      </span>
                      {answers[currentStep] === option.text && (
                        <CheckCircle className="w-6 h-6 text-orange-600 ml-auto" />
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Navigation */}
              {currentStep > 0 && (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="mt-8 text-orange-600 hover:text-orange-700 font-semibold"
                >
                  ← Previous Question
                </button>
              )}
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Perfect Match Found!
              </h3>
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 mb-8">
                <h4 className="text-2xl font-bold text-orange-600 mb-3">
                  {getRecommendation().program}
                </h4>
                <p className="text-lg text-gray-700">{getRecommendation().description}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-orange-600 text-white px-8 py-4 rounded-full hover:bg-orange-700 transition-all duration-300 transform hover:scale-105">
                  Apply to This Program
                </button>
                <button
                  onClick={resetQuiz}
                  className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full hover:bg-orange-50 transition-all duration-300"
                >
                  Retake Quiz
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-orange-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Personalized Path</h4>
            <p className="text-sm text-gray-600">
              Get matched with programs that align with your goals and interests.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Expert Guidance</h4>
            <p className="text-sm text-gray-600">
              Learn from experienced mentors and coaches throughout your journey.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-6 h-6 text-orange-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Real Impact</h4>
            <p className="text-sm text-gray-600">
              Develop skills that create lasting change in your life and community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
