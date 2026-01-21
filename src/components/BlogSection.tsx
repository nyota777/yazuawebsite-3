import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { motion } from 'motion/react';

export function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Leadership', 'Youth Development', 'Success Stories', 'Program Updates'];

  const blogPosts = [
    {
      title: 'THE FIRE',
      excerpt: 'We often speak of missing boys when they\'ve run away, dropped out, or disappeared from school or society altogether. But some boys begin to disappear long before they leave. They vanish in plain sight, silent in the classroom, withdrawn at the dinner table, performing masculinity like a soldier reciting commands he does not believe in. Their minds are loud, but their voices have gone quiet. Their hearts ache, but their faces remain blank. Their names are on the roll call, but they are not seen.',
      image: `${import.meta.env.BASE_URL}forge_logo.png`,
      category: 'Leadership',
      author: 'Eric Mungai',
      date: 'Jan 5, 2026',
      readTime: '5 min read',
      link: 'https://open.substack.com/pub/ericmungai/p/raising-men-who-wont-crumble-775?r=5jvuu9&utm_campaign=post&utm_medium=web',
    },
    {
      title: 'Boys Responsibility',
      excerpt: '🔥 THE FIRE - There comes a point in every boy\'s life when the question of weight emerges, not the weight of muscle or body, but the weight of RESPONSIBILITY. Responsibility is not something boys are born with. It is not instinctive, nor does it fall neatly into place with age. It is FORGED. And like iron under heat, it requires pressure, friction, and repetition. We cannot expect boys to carry the burdens of manhood tomorrow, if we do not invite them to shoulder responsibilities, however small, today.',
      image: `${import.meta.env.BASE_URL}forge_logo.png`,
      category: 'Youth Development',
      author: 'Eric Mungai',
      date: 'Dec 28, 2025',
      readTime: '7 min read',
      link: 'https://substack.com/home/post/p-174597395',
    },
    {
      title: 'Digital Loneliness: The Silent Erosion of Boyhood',
      excerpt: '🔥 THE FIRE - Here\'s a question worth sitting with: What if the loneliness epidemic among boys isn\'t a failure of connection, but a crisis of recognition? We\'ve built a world where a boy can accumulate thousands of followers yet remain fundamentally unknown, speak constantly yet never be truly heard. The architecture of digital life promised us community, but delivered performance. And boys, more than anyone, are paying the price. We\'ve replaced the friction of embodied presence, the messy, inefficient, gloriously human work of friendship with the frictionless ease of algorithmic relation.',
      image: `${import.meta.env.BASE_URL}forge_logo.png`,
      category: 'Success Stories',
      author: 'Eric Mungai',
      date: 'Dec 20, 2025',
      readTime: '6 min read',
      link: 'https://substack.com/home/post/p-176996413',
    },
  ];

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Insights & <span className="text-[#c7211a]">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read the latest stories, tips, and updates about leadership development,
            youth empowerment, and the transformative work happening at YAZUA AFRIKA.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Tag className="w-4 h-4" />
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  {post.link ? (
                    <a 
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-orange-600 font-semibold hover:gap-4 transition-all duration-300"
                    >
                      Read More <ArrowRight className="w-5 h-5" />
                    </a>
                  ) : (
                    <button className="flex items-center gap-2 text-orange-600 font-semibold hover:gap-4 transition-all duration-300">
                      Read More <ArrowRight className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <a 
            href="https://substack.com/@ericmungai?utm_source=share&utm_medium=android&r=2uo5zv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-600 text-white px-8 py-4 rounded-full hover:bg-orange-700 transition-all duration-300 transform hover:scale-105"
          >
            Read More Articles
          </a>
        </div>
      </div>
    </section>
  );
}
