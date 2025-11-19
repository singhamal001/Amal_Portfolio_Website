import React from 'react';
import { RESUME } from '../constants';
import { Mail, MapPin, Phone, Linkedin, Github } from 'lucide-react';

export const ContactFooter: React.FC = () => {
  return (
    <footer className="bg-[#0c0c0e] border-t border-gray-800 pt-20 pb-10 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
            Let's <br/>
            <span className="text-[#D97757] italic">Connect.</span>
          </h2>
          <p className="text-gray-400 max-w-md mb-8">
            Currently delivering high-impact GenAI solutions. Open to discussing architecture, RAG pipelines, or consulting opportunities.
          </p>
        </div>

        <div className="space-y-6 font-mono text-sm">
          <div className="flex items-center gap-4 p-4 border border-gray-800 bg-[#131316] hover:border-[#D97757] transition-colors group">
            <Mail className="text-gray-500 group-hover:text-[#D97757]" />
            <a href={`mailto:${RESUME.contact.email}`} className="text-gray-300 group-hover:text-white">{RESUME.contact.email}</a>
          </div>
          
          <div className="flex items-center gap-4 p-4 border border-gray-800 bg-[#131316] hover:border-[#D97757] transition-colors group">
            <Phone className="text-gray-500 group-hover:text-[#D97757]" />
            <span className="text-gray-300 group-hover:text-white">{RESUME.contact.phone}</span>
          </div>

          <div className="flex items-center gap-4 p-4 border border-gray-800 bg-[#131316] hover:border-[#D97757] transition-colors group">
            <MapPin className="text-gray-500 group-hover:text-[#D97757]" />
            <span className="text-gray-300 group-hover:text-white">{RESUME.contact.location}</span>
          </div>

          <div className="flex items-center gap-4 p-4 border border-gray-800 bg-[#131316] hover:border-[#D97757] transition-colors group cursor-pointer" onClick={() => window.open(RESUME.contact.linkedin, '_blank')}>
             <Linkedin className="text-gray-500 group-hover:text-[#D97757]" />
             <span className="text-gray-300 group-hover:text-white">Connect on LinkedIn</span>
          </div>

          <div className="flex items-center gap-4 p-4 border border-gray-800 bg-[#131316] hover:border-[#D97757] transition-colors group cursor-pointer" onClick={() => window.open(RESUME.contact.github, '_blank')}>
             <Github className="text-gray-500 group-hover:text-[#D97757]" />
             <span className="text-gray-300 group-hover:text-white">Check out on GitHub</span>
          </div>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-gray-900 text-center text-gray-600 text-xs font-mono">
        © {new Date().getFullYear()} Amal Singh. Built with React, Tailwind & Gemini API.
      </div>
    </footer>
  );
};