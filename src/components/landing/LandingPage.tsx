import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Calendar, Users, ArrowRight, CheckCircle, ShieldCheck, Zap } from 'lucide-react';

interface LandingPageProps {
  onLogin: () => void;
}

export default function LandingPage({ onLogin }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#003366] rounded-xl flex items-center justify-center text-white">
              <GraduationCap size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-[#003366]">ZAB<span className="text-blue-500">DESK</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-[#003366] transition-colors">Features</a>
            <a href="#about" className="hover:text-[#003366] transition-colors">About</a>
            <a href="#support" className="hover:text-[#003366] transition-colors">Support</a>
          </div>
          <button 
            onClick={onLogin}
            className="px-6 py-2.5 bg-[#003366] text-white rounded-full font-semibold hover:bg-[#004080] transition-all shadow-lg shadow-blue-900/20 active:scale-95"
          >
            Login to Portal
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-bold mb-6 tracking-wide uppercase">
              The Official SZABIST Student Portal
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#003366] mb-8 tracking-tight leading-[1.1]">
              Your Academic Life, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Simplified.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Streamline your studies, track your progress, and stay connected with the SZABIST community through our modern, all-in-one digital campus.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={onLogin}
                className="w-full sm:w-auto px-8 py-4 bg-[#003366] text-white rounded-2xl font-bold text-lg hover:bg-[#004080] transition-all flex items-center justify-center gap-2 group shadow-xl shadow-blue-900/20"
              >
                Get Started Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-gray-50 text-gray-700 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all border border-gray-200">
                Explore Features
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-20 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2070" 
              alt="Student Dashboard Preview" 
              className="rounded-3xl shadow-2xl border border-gray-200 mx-auto max-w-5xl w-full object-cover h-[400px] md:h-[600px]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">Everything You Need to Succeed</h2>
            <p className="text-gray-600">A comprehensive suite of tools designed for the modern student.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="text-yellow-500" />, title: "Real-time Attendance", desc: "Track your presence across all courses with instant updates and low-attendance alerts." },
              { icon: <BookOpen className="text-blue-500" />, title: "LMS Integration", desc: "Access lecture materials, submit assignments, and view grades in one centralized location." },
              { icon: <Calendar className="text-green-500" />, title: "Smart Timetable", desc: "Stay organized with a dynamic schedule that syncs with your exams and deadlines." },
              { icon: <ShieldCheck className="text-purple-500" />, title: "Secure Results", desc: "View your semester results and transcripts with end-to-end encryption and privacy." },
              { icon: <Users className="text-red-500" />, title: "Faculty Connect", desc: "Communicate directly with your instructors and participate in course discussions." },
              { icon: <CheckCircle className="text-emerald-500" />, title: "AI Assistant", desc: "Get instant answers to academic queries and deadline reminders from our smart AI." },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow group">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#003366] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#003366] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">Trusted by 10,000+ SZABIST Students</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                  <p className="text-white/80 text-lg mb-6 italic">"ZABDESK has completely transformed how I manage my semester. The attendance tracking is a lifesaver!"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-400 rounded-full" />
                    <div>
                      <p className="text-white font-bold">Sara Ahmed</p>
                      <p className="text-white/60 text-sm">BSCS Student</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                  <p className="text-white/80 text-lg mb-6 italic">"The new UI is so much faster and intuitive. Submitting assignments has never been easier."</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full" />
                    <div>
                      <p className="text-white font-bold">Zain Malik</p>
                      <p className="text-white/60 text-sm">BBA Student</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#003366] rounded-lg flex items-center justify-center text-white">
              <GraduationCap size={18} />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#003366]">ZAB<span className="text-blue-500">DESK</span></span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 SZABIST University. All rights reserved.</p>
          <div className="flex gap-6 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-[#003366]">Privacy Policy</a>
            <a href="#" className="hover:text-[#003366]">Terms of Service</a>
            <a href="#" className="hover:text-[#003366]">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
