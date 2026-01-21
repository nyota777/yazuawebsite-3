import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle message sending (could integrate with WhatsApp API or chat service)
      alert(`Message sent: ${message}`);
      setMessage('');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-[#78912b] to-[#4e2b14] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Chat with Us</h3>
                  <p className="text-white/90 text-xs">We typically reply in minutes</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-lg p-1 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="h-80 p-4 bg-gray-50 overflow-y-auto">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-[#78912b] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-semibold">YA</span>
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-none p-3 shadow-sm max-w-[80%]">
                    <p className="text-gray-800 text-sm">
                      Hello! 👋 Welcome to YAZUA AFRIKA. How can we help you today?
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <button className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 hover:border-[#78912b] hover:text-[#78912b] transition-colors">
                    Program Information
                  </button>
                  <button className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 hover:border-[#78912b] hover:text-[#78912b] transition-colors">
                    Registration
                  </button>
                  <button className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 hover:border-[#78912b] hover:text-[#78912b] transition-colors">
                    Schedule Visit
                  </button>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#78912b] text-sm"
                />
                <button
                  type="submit"
                  className="bg-[#78912b] text-white p-2 rounded-full hover:bg-[#4e2b14] transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Or chat with us on{' '}
                <a
                  href="https://wa.me/254734631650"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#78912b] hover:underline"
                >
                  WhatsApp
                </a>
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-r from-[#78912b] to-[#4e2b14] rounded-full shadow-2xl flex items-center justify-center hover:shadow-[#78912b]/50 transition-all duration-300"
      >
        {isOpen ? (
          <X className="w-8 h-8 text-white" />
        ) : (
          <MessageCircle className="w-8 h-8 text-white" />
        )}
      </motion.button>
    </div>
  );
}
