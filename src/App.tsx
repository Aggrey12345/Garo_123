/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Github, Twitter, Linkedin, Mail, ExternalLink, MapPin, Briefcase } from "lucide-react";

export default function App() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-white selection:text-black">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <main className="relative max-w-7xl mx-auto px-6 pt-24 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 0.2 }}
                className="text-xs uppercase tracking-[0.2em] font-medium"
              >
                Available for New Projects
              </motion.div>
              <h1 className="text-7xl lg:text-8xl font-medium tracking-tight leading-[0.9]">
                User <br />
                <span className="text-zinc-500 italic font-serif text-6xl lg:text-7xl">Profile</span>
              </h1>
              <p className="max-w-md text-lg text-zinc-400 leading-relaxed">
                Full-stack developer focused on creating clean, performant, and user-centric web applications. 
                Currently specializing in React, TypeScript, and modern deployment workflows.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            <div className="space-y-6 pt-8 border-t border-white/10 max-w-sm">
              <div className="flex items-center gap-3 text-zinc-500">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium uppercase tracking-wider text-zinc-400">San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-500">
                <Briefcase className="w-4 h-4" />
                <span className="text-sm font-medium uppercase tracking-wider text-zinc-400">Senior Software Engineer</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 group">
              <img 
                src="/images/profile.jpg" 
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
                onError={(e) => {
                   // Fallback for placeholder
                   (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-end justify-between">
                  <div className="space-y-1">
                    <div className="text-xs uppercase tracking-widest text-zinc-400 font-medium">Build No.</div>
                    <div className="font-mono text-sm tracking-wider">RD-2024-88A</div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium text-sm"
                  >
                    View Case Study <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </div>
            
            {/* Minimal floating elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center p-4"
            >
              <div className="text-center">
                <div className="text-xs text-zinc-500 uppercase tracking-tighter">Exp.</div>
                <div className="text-xl font-bold">12+</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 text-zinc-600 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© 2024 Vercel Ready React App. All rights reserved.</div>
        <div className="flex gap-8 uppercase tracking-[0.2em] text-[10px] font-medium">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
}
