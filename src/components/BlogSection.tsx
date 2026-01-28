import React, { useMemo, useState } from 'react';
import { Calendar, User, ArrowRight, Tag, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const forgeLogo = '/forge_logo.png';
const impactNumbers2025 = '/impact-numbers-2025.png';

type BlogPost = {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  link?: string;
  content?: string;
  fullContent?: Record<string, string>;
};

export function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const categories = ['All', 'Leadership', 'Youth Development', 'Success Stories', 'Program Updates'];

  const blogPosts: BlogPost[] = [
    {
      title: "LET'S FOLD OUR SLEEVES",
      excerpt:
        'In 2025, we slowly but intentionally chipped at our numbers (Kenya). Held up against those numbers and odds, it seems futile—but change is usually brought about by a small number of individuals, crazy enough to think they can transform society, and disciplined enough to #BUILD it.',
      content: `LET'S FOLD OUR SLEEVES

In 2025, we slowly but intentionally chipped at our numbers (Kenya)

In Africa, 40% of the 1.3 billion population are teens under 15 years; half of that are young boys growing up in a society where the idea of masculinity is informed by brute force, sexual conquest, accumulation of money by any means, gambling, violence, civil unrest and rigid traditions that reward dominance over character.

Held up against those numbers and odds, it seems futile - our work and the small numbers, but change is usually brought about by a small number of individuals, crazy enough to think they can transform society, and disciplined enough to #BUILD it.

This is our small something. And yes, we are crazy enough to think we can shift and change the story, trajectory and outcomes of the 200+ million teenage boys on the continent.

This year, 2026, we will hit our five thousand boys milestone, in Kenya alone (every boy is a milestone), and each boy represents a hopeful future.

As Yazua Afrika continues to grow within the continent and the region, we look forward to implementing mentorship programs in at least 5 Sub-Saharan Nations, deepening partnerships with boys' schools, sports academies, and community organizations, and expanding access to our boys' mentorship journals and development tools for institutions/organizations that mentor, train, coach and walk with boys daily.

We offer research-informed mentorship curricula and program models designed to operate across diverse cultural, educational and community contexts, because boys' development isn't a nice-to-have in our continent; it's a MUST HAVE if we are to secure everyone's future, and safeguard the dignity of all.

That's the work of nation-building.
One Boy at a Time

Will you join us in making this a reality?
- Introduce us to a school
- A boys Sports Academy
- An Organization involved in social development
- A boys center
- Sponsor a school/group of boys
- Amplify and share our work

We can change the trajectory of boys in Kenya and the continent within #OurLifetime

www.yazuaafrika.com`,
      image: impactNumbers2025,
      category: 'Program Updates',
      author: 'Yazua Afrika',
      date: 'Jan 27, 2026',
      readTime: '3 min read',
    },
    {
      title: 'THE FIRE 🔥',
      excerpt: 'Masculinity is not a destination—it is a process. Like raw iron in the hands of a blacksmith, a man is shaped by fire, struck by the hammer of experience, and cooled in the waters of reflection. The question is never if we will be FORGED, but by WHO & HOW. For too long, masculinity has been framed as something rigid, something inherited rather than cultivated. But true strength is not found in resistance—it is found in discipline, adaptability, and purpose. A man is MADE, not born.',
      fullContent: {
        theFire: 'Masculinity is not a destination—it is a process. Like raw iron in the hands of a blacksmith, a man is shaped by fire, struck by the hammer of experience, and cooled in the waters of reflection. The question is never if we will be FORGED, but by WHO & HOW. For too long, masculinity has been framed as something rigid, something inherited rather than cultivated. But true strength is not found in resistance—it is found in discipline, adaptability, and purpose. A man is MADE, not born.',
        theHammer: 'What—or who—has shaped your understanding of masculinity the most? Was it the silent lessons of a father figure? The demands of responsibility? The fire of failure? Or the quiet defiance of choosing your own path? And here\'s the real question: Is your current definition of masculinity serving you—or are you serving it? Too often, we live within definitions that no longer fit us, bound by expectations that do not build us. The true test of manhood is not how well we conform, but how boldly we refine and redefine what strength, leadership, and integrity mean for us today.',
        theForge: 'Engage: Growth is never a solo journey. Find a friend, a mentor, or a group and have a real conversation about this. Let\'s sharpen each other. Share: If this resonated with you, pass it along to a brother, a father, a son—someone who is walking their own journey of manhood. Create a #space to talk and share your ideas and thoughts. Reflect: Take five minutes today to journal or voice-record your thoughts: What version of masculinity am I FORGING? What do I need to let go of, and what do I need to embrace?',
        theEdge: 'This week, pay attention to the moments that shape you. Not the big, dramatic turning points—but the small, unnoticed choices. How you respond to stress. How you carry your burdens. How you hold yourself accountable. A man is not made in the grand gestures but in the unseen discipline of daily living. Every day is a chance to #FORGE yourself. The fire is waiting. Step into it. Until the next FORGED FRIDAY, Eric'
      },
      image: forgeLogo,
      category: 'Leadership',
      author: 'Eric Mungai',
      date: 'Feb 21, 2025',
      readTime: '8 min read',
      link: 'https://open.substack.com/pub/ericmungai/p/raising-men-who-wont-crumble-775?r=5jvuu9&utm_campaign=post&utm_medium=web',
    },
    {
      title: 'THE FIRE',
      excerpt: 'We often speak of missing boys when they\'ve run away, dropped out, or disappeared from school or society altogether. But some boys begin to disappear long before they leave. They vanish in plain sight, silent in the classroom, withdrawn at the dinner table, performing masculinity like a soldier reciting commands he does not believe in. Their minds are loud, but their voices have gone quiet. Their hearts ache, but their faces remain blank. Their names are on the roll call, but they are not seen.',
      image: forgeLogo,
      category: 'Leadership',
      author: 'Eric Mungai',
      date: 'Jan 5, 2026',
      readTime: '5 min read',
      link: 'https://open.substack.com/pub/ericmungai/p/raising-men-who-wont-crumble-775?r=5jvuu9&utm_campaign=post&utm_medium=web',
    },
    {
      title: 'Boys Responsibility',
      excerpt: '🔥 THE FIRE - There comes a point in every boy\'s life when the question of weight emerges, not the weight of muscle or body, but the weight of RESPONSIBILITY. Responsibility is not something boys are born with. It is not instinctive, nor does it fall neatly into place with age. It is FORGED. And like iron under heat, it requires pressure, friction, and repetition. We cannot expect boys to carry the burdens of manhood tomorrow, if we do not invite them to shoulder responsibilities, however small, today.',
      image: forgeLogo,
      category: 'Youth Development',
      author: 'Eric Mungai',
      date: 'Dec 28, 2025',
      readTime: '7 min read',
      link: 'https://substack.com/home/post/p-174597395',
    },
    {
      title: 'Digital Loneliness: The Silent Erosion of Boyhood',
      excerpt: '🔥 THE FIRE - Here\'s a question worth sitting with: What if the loneliness epidemic among boys isn\'t a failure of connection, but a crisis of recognition? We\'ve built a world where a boy can accumulate thousands of followers yet remain fundamentally unknown, speak constantly yet never be truly heard. The architecture of digital life promised us community, but delivered performance. And boys, more than anyone, are paying the price. We\'ve replaced the friction of embodied presence, the messy, inefficient, gloriously human work of friendship with the frictionless ease of algorithmic relation.',
      image: forgeLogo,
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

  const maxIndex = filteredPosts.length - 1;
  const isFirst = currentIndex === 0;
  const isLast = currentIndex >= maxIndex;

  const nextPosts = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isLast) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevPosts = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isFirst) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const visiblePosts = filteredPosts.slice(currentIndex, currentIndex + 1);
  const selectedPostContent = useMemo(() => {
    if (!selectedPost) return '';
    if (selectedPost.content) return selectedPost.content;
    if (selectedPost.fullContent) return Object.values(selectedPost.fullContent).join('\n\n');
    return '';
  }, [selectedPost]);

  return (
    <section id="blog" className="py-20 bg-white overflow-hidden">
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
              onClick={() => {
                setSelectedCategory(category);
                setCurrentIndex(0); // Reset to first page when filter changes
              }}
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

        {/* Blog Carousel */}
        <div className="relative max-w-5xl mx-auto px-4 md:px-6">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentIndex}-${selectedCategory}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="flex justify-center"
              >
                {visiblePosts.map((post) => (
                  <motion.article
                    key={post.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group w-full max-w-lg"
                  >
                    <div className="relative h-40 md:h-44 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-5 md:p-6">
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                        <span className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{post.readTime}</span>
                        {post.link ? (
                          <a 
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-orange-600 text-sm font-semibold hover:gap-3 transition-all duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Read More <ArrowRight className="w-4 h-4" />
                          </a>
                        ) : (
                          <button
                            className="flex items-center gap-2 text-orange-600 text-sm font-semibold hover:gap-3 transition-all duration-300"
                            type="button"
                            onClick={() => setSelectedPost(post)}
                          >
                            Read More <ArrowRight className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            {filteredPosts.length > 1 && (
              <>
                <button
                  onClick={prevPosts}
                  disabled={isFirst}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full md:-translate-x-6 bg-white rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out z-20 ${
                    isFirst
                      ? 'opacity-40 cursor-not-allowed text-gray-400'
                      : 'hover:shadow-xl hover:bg-orange-600 hover:text-white text-orange-600 cursor-pointer'
                  }`}
                  aria-label="Previous post"
                  type="button"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextPosts}
                  disabled={isLast}
                  className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-full md:translate-x-6 bg-white rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out z-20 ${
                    isLast
                      ? 'opacity-40 cursor-not-allowed text-gray-400'
                      : 'hover:shadow-xl hover:bg-orange-600 hover:text-white text-orange-600 cursor-pointer'
                  }`}
                  aria-label="Next post"
                  type="button"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Dot Indicators */}
            {filteredPosts.length > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                {filteredPosts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ease-in-out ${
                      index === currentIndex
                        ? 'bg-orange-600 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to post ${index + 1}`}
                    type="button"
                  />
                ))}
              </div>
            )}
          </div>
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

      {/* Blog Post Modal (for in-site posts without external link) */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="relative h-48 md:h-60 overflow-hidden rounded-t-2xl">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {selectedPost.category}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  aria-label="Close"
                  type="button"
                >
                  <X className="w-6 h-6 text-gray-900" />
                </button>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {selectedPost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {selectedPost.date}
                  </span>
                  <span className="text-sm text-gray-500">{selectedPost.readTime}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {selectedPost.title}
                </h3>

                <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {selectedPostContent}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
