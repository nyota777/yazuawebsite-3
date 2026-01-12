import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { motion } from 'motion/react';

export function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Leadership', 'Youth Development', 'Success Stories', 'Program Updates'];

  const blogPosts = [
    {
      title: '10 Essential Leadership Skills Every Young Man Should Develop',
      excerpt: 'Discover the key leadership competencies that will set young men up for success in their personal and professional lives.',
      image: 'https://images.unsplash.com/photo-1623863568368-69e4cbe6cc0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1lbiUyMGxlYWRlcnNoaXAlMjB0cmFpbmluZ3xlbnwxfHx8fDE3Njc5NjE0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Leadership',
      author: 'David Kimani',
      date: 'Jan 5, 2026',
      readTime: '5 min read',
    },
    {
      title: 'The Power of Outdoor Adventure in Character Development',
      excerpt: 'How wilderness experiences and outdoor challenges build resilience, confidence, and teamwork in young men.',
      image: 'https://images.unsplash.com/photo-1640951332580-1072ff909952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwYWR2ZW50dXJlJTIwY2FtcHxlbnwxfHx8fDE3Njc5NjE0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Youth Development',
      author: 'Peter Wanjiru',
      date: 'Dec 28, 2025',
      readTime: '7 min read',
    },
    {
      title: 'From Mentee to Mentor: A Journey of Transformation',
      excerpt: 'Read inspiring stories of young men who have gone through our programs and are now mentoring the next generation.',
      image: 'https://images.unsplash.com/photo-1639432038099-4379f2d421cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50b3JzaGlwJTIweW91dGh8ZW58MXx8fHwxNzY3OTYxNDI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Success Stories',
      author: 'James Mwangi',
      date: 'Dec 20, 2025',
      readTime: '6 min read',
    },
    {
      title: 'Entrepreneurship Education: Building Future Business Leaders',
      excerpt: 'Learn how our entrepreneurship programs equip young men with practical business skills and innovative thinking.',
      image: 'https://images.unsplash.com/photo-1732539539294-4cc2f38fac9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXJzaGlwJTIwd29ya3Nob3B8ZW58MXx8fHwxNzY3OTYxNDI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Program Updates',
      author: 'Sarah Njeri',
      date: 'Dec 15, 2025',
      readTime: '8 min read',
    },
    {
      title: 'The Importance of Positive Masculinity in Youth Development',
      excerpt: 'Exploring healthy masculinity and how we help young men develop positive identities and relationships.',
      image: 'https://images.unsplash.com/photo-1562577308-c8b2614b9b9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbGVhZGVyc2hpcCUyMGFjdGl2aXR5fGVufDF8fHx8MTc2Nzk2MTQyNnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Youth Development',
      author: 'Michael Ochieng',
      date: 'Dec 10, 2025',
      readTime: '6 min read',
    },
    {
      title: 'New Program Launch: Innovation Lab 2026',
      excerpt: 'Announcing our newest program focused on design thinking, technology, and social innovation for young changemakers.',
      image: 'https://images.unsplash.com/photo-1758270705317-3ef6142d306f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwY29sbGFib3JhdGlvbiUyMHlvdXRofGVufDF8fHx8MTc2Nzk2MTQyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Program Updates',
      author: 'Grace Akinyi',
      date: 'Dec 5, 2025',
      readTime: '4 min read',
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
            Insights & <span className="text-orange-600">Stories</span>
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
                  <button className="flex items-center gap-2 text-orange-600 font-semibold hover:gap-4 transition-all duration-300">
                    Read More <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-orange-600 text-white px-8 py-4 rounded-full hover:bg-orange-700 transition-all duration-300 transform hover:scale-105">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
}
