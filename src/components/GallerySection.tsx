import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      type: 'image',
      src: `${import.meta.env.BASE_URL}gallery1.jpg`,
      title: 'Leadership Training Session',
      category: 'Leadership',
    },
    {
      type: 'image',
      src: `${import.meta.env.BASE_URL}gallery2.jpg`,
      title: 'Outdoor Adventure Camp',
      category: 'Adventure',
    },
    {
      type: 'image',
      src: `${import.meta.env.BASE_URL}gallery3.jpg`,
      title: 'Mentorship Program',
      category: 'Mentorship',
    },
    {
      type: 'image',
      src: `${import.meta.env.BASE_URL}gallery4.jpg`,
      title: 'Entrepreneurship Workshop',
      category: 'Entrepreneurship',
    },
    {
      type: 'image',
      src: `${import.meta.env.BASE_URL}gallery5.jpg`,
      title: 'Team Building Activities',
      category: 'Leadership',
    },
    {
      type: 'image',
      src: `${import.meta.env.BASE_URL}gallery6.jpg`,
      title: 'Project Collaboration',
      category: 'Innovation',
    },
    {
      type: 'image',
      src: `${import.meta.env.BASE_URL}20251130_134531.jpg`,
      title: 'Program Highlights',
      category: 'Programs',
    },
    {
      type: 'image',
      src: `${import.meta.env.BASE_URL}IMG-20251201-WA0157.jpg`,
      title: 'Youth Development',
      category: 'Development',
    },
  ];

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-600">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore moments from our programs, camps, and workshops that showcase the
            transformative journey of our young leaders.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-sm mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                </div>
              </div>
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Video Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Testimonials & Highlights
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-lg cursor-pointer group">
              <img
                src="https://images.unsplash.com/photo-1623863568368-69e4cbe6cc0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1lbiUyMGxlYWRlcnNoaXAlMjB0cmFpbmluZ3xlbnwxfHx8fDE3Njc5NjE0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Video Testimonial"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold">Student Success Stories</p>
              </div>
            </div>
            <div className="relative h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-lg cursor-pointer group">
              <video 
                src={`${import.meta.env.BASE_URL}Camp Highlights 2025.mp4`}
                className="w-full h-full object-cover"
                muted
                loop
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold">Camp Highlights 2025</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-orange-600 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 text-white hover:text-orange-600 transition-colors"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-5xl max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryItems[selectedImage].src}
                alt={galleryItems[selectedImage].title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <h3 className="text-white text-2xl font-bold">
                  {galleryItems[selectedImage].title}
                </h3>
                <p className="text-gray-300 mt-2">
                  {galleryItems[selectedImage].category}
                </p>
              </div>
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 text-white hover:text-orange-600 transition-colors"
            >
              <ChevronRight className="w-12 h-12" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
