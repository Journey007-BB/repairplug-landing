"use client";
import React, { useState } from 'react';
import { MessageCircle, MapPin, CheckCircle, ArrowRight, Menu, X } from 'lucide-react';
import Image from 'next/image'

export default function RepairPlugLanding() {
  const [showMenu, setShowMenu] = useState(false);
  const [zipCode, setZipCode] = useState('');
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const handleGetStarted = () => {
    // Check if ZIP code is in Michigan (48000-49999)
    const zipNum = parseInt(zipCode);
    const isMichigan = zipNum >= 48000 && zipNum <= 49999;
    
    if (zipCode && !isMichigan) {
      setShowWaitlist(true);
    } else if (zipCode && isMichigan) {
      // Navigate to chatbot (in full app)
      window.location.href = '/chat';
      // Later this will be: router.push('/chat')
    } else {
      alert('Please enter a ZIP code');
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Image src="/logo.png" alt="Logo" width={100} height={27} />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#for-shops" className="text-gray-700 hover:text-gray-900">For Shops</a>
              <button className="px-4 py-2 text-white rounded-lg" style={{ backgroundColor: '#0070C0' }}>
                Sign In
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setShowMenu(!showMenu)}
            >
              {showMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              <a href="#for-shops" className="block text-gray-700">For Shops</a>
              <button className="w-full px-4 py-2 text-white rounded-lg" style={{ backgroundColor: '#0070C0' }}>
                Sign In
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Your AI Car Repair Assistant —
                <span style={{ color: '#0070C0' }}> We Handle Everything!</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
              A remote control for your car's repair—automating every step from issue to appointment. 

              Tell our AI chat what you need to get your car fixed and TADA it's done!
              </p>

              {/* ZIP Code Input */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <label className="block text-sm font-medium mb-2">Enter your ZIP code to get started</label>
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="text"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      maxLength="5"
                    />
                  </div>
                  <button
                    onClick={handleGetStarted}
                    className="px-6 py-3 text-white font-semibold rounded-lg flex items-center gap-2 hover:opacity-90 transition"
                    style={{ backgroundColor: '#0070C0' }}
                  >
                    Get My Car Fixed
                    <ArrowRight size={20} />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">Currently serving Michigan • More states coming soon</p>
              </div>
            </div>

            {/* Video Placeholder */}
            <div className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center overflow-hidden">
              {!videoPlaying ? (
                <div className="text-center">
                  <div 
                    className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-gray-50 transition"
                    onClick={() => setVideoPlaying(true)}
                  >
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-gray-800 border-b-8 border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-gray-600 font-medium">Watch: How RepairPlug Works</p>
                  <p className="text-sm text-gray-500">2 min explainer video</p>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/jkABpf-edSs?autoplay=1"
                  title="How RepairPlug Works"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 text-center mb-10">Get your car fixed in 4 automated steps</p>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              {
                step: '1',
                title: 'Describe the Problem',
                description: 'Tell our AI chatbot what\'s wrong with your car—text, voice, or upload a photo',
                icon: MessageCircle
              },
              {
                step: '2',
                title: 'AI Diagnoses',
                description: 'Our AI asks follow-up questions like a real mechanic and provides likely diagnoses',
                icon: CheckCircle
              },
              {
                step: '3',
                title: 'Get Matched',
                description: 'We manage the quotes from verified shops based on your preferences — compare the quotes based on fair pricing insights — and provide you recommendations',
                icon: MapPin
              },
              {
                step: '4',
                title: 'Book & Track',
                description: 'We schedule your appointment and track repair progress in real-time. No more wondering "is it done yet?',
                icon: CheckCircle
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundColor: '#0070C0' }}>
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Modal */}
      {showWaitlist && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-8">
            <h3 className="text-2xl font-bold mb-4">Join the Waitlist</h3>
            <p className="text-gray-600 mb-6">
              We're rapidly expanding—join the waitlist to be notified when RepairPlug comes to your area!
            </p>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="flex gap-3">
              <button
                onClick={() => setShowWaitlist(false)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert('Thanks for joining! We\'ll notify you soon.');
                  setShowWaitlist(false);
                }}
                className="flex-1 px-4 py-3 text-white rounded-lg hover:opacity-90"
                style={{ backgroundColor: '#0070C0' }}
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span style={{ color: '#0070C0' }}>Repair</span>
                <span>Plug</span>
              </div>
              <p className="text-gray-400">AI-powered car repair marketplace</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 RepairPlug. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}