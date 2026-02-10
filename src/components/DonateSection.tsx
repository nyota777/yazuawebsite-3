import React, { useState } from 'react';
import { Heart, Building, Mail, User, CreditCard, ChevronRight, CheckCircle2 } from 'lucide-react';

export function DonateSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    program: '',
    amount: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send data to backend
  };

  const programs = [
    "General Support",
    "Boy Child Empowerment",
    "Family Counseling",
    "Community Outreach",
    "Educational Support"
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-gray-900 mb-6">
            Support the Work of Yazua Afrika
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Your contribution directly supports our programs empowering boys, families, and communities across Africa. 
            Together, we can create lasting change and build stronger foundations for future generations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Donation Details Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-[#FF6F3C] px-8 py-6">
              <div className="flex items-center gap-3 text-white mb-2">
                <CreditCard className="w-6 h-6" />
                <h3 className="text-xl font-bold">M-PESA Paybill Details</h3>
              </div>
              <p className="text-orange-100 text-sm">Use the details below to complete your donation</p>
            </div>
            
            <div className="p-8 space-y-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 bg-orange-50 rounded-xl border border-orange-100">
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Paybill Number</p>
                  <p className="text-3xl font-bold text-gray-900">380430</p>
                </div>
                <div className="h-px md:h-12 w-full md:w-px bg-orange-200"></div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Account Number</p>
                  <p className="text-lg font-medium text-gray-900">Program/Activity Name</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600 mt-1">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Organization</h4>
                    <p className="text-gray-600">YAZUA AFRIKA</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-50 rounded-lg text-green-600 mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Important Note</h4>
                    <p className="text-gray-600">Please ensure you enter the correct program or activity name as the account number when making your donation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Donation Form */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pledge Your Support</h3>
              <p className="text-gray-600">Fill out this form to let us know about your donation.</p>
            </div>

            {submitted ? (
              <div className="text-center py-12 px-6 bg-green-50 rounded-xl border border-green-100">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 fill-current" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
                <p className="text-gray-600">
                  We appreciate your support. Please complete your donation via M-Pesa using the Paybill details provided.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[#FF6F3C] font-semibold hover:text-[#e55a2a]"
                >
                  Make another pledge
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      required
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-[#FF6F3C] focus:border-[#FF6F3C] transition-colors"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      required
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-[#FF6F3C] focus:border-[#FF6F3C] transition-colors"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
                    Program / Activity
                  </label>
                  <div className="relative">
                    <select
                      id="program"
                      required
                      className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-[#FF6F3C] focus:border-[#FF6F3C] transition-colors appearance-none bg-white"
                      value={formData.program}
                      onChange={(e) => setFormData({...formData, program: e.target.value})}
                    >
                      <option value="">Select a program</option>
                      {programs.map((prog) => (
                        <option key={prog} value={prog}>{prog}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                    Donation Amount (KES)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 font-medium">KES</span>
                    </div>
                    <input
                      type="number"
                      id="amount"
                      required
                      min="1"
                      className="block w-full pl-12 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-[#FF6F3C] focus:border-[#FF6F3C] transition-colors"
                      placeholder="1000"
                      value={formData.amount}
                      onChange={(e) => setFormData({...formData, amount: e.target.value})}
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-[#FF6F3C] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#e55a2a] transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                  >
                    <span>Proceed to Donate</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-xs text-gray-500 text-center mt-4">
                    Your details are safe with us. We do not store payment information.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
