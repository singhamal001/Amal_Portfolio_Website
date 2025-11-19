import React from 'react';
import { ThreeDCard } from './ThreeDCard';
import { ACCENT_COLOR, RESUME } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background ambient effects */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#D97757] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-500 opacity-5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center z-10">
        
        {/* Text Content */}
        <div className="space-y-8 order-2 md:order-1">
          <div className="inline-block border border-[#333] rounded-full px-4 py-1 bg-[#1a1a1a]/50 backdrop-blur-sm">
            <span className="text-xs font-mono tracking-widest text-gray-400">AVAILABLE FOR PROJECTS</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.9]">
            Structuring <br/>
            <span className="italic text-gray-500">Intelligence</span>
          </h1>
          
          <div className="h-px w-24 bg-[#D97757]"></div>
          
          <p className="text-lg text-gray-400 max-w-md leading-relaxed font-light">
            I am <strong className="text-white">{RESUME.name}</strong>. A specialist in Generative AI & Machine Learning, 
            transforming unstructured chaos into structured, actionable intelligence for enterprise pipelines.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => document.getElementById('experience')?.scrollIntoView({behavior: 'smooth'})}
              className="px-8 py-3 bg-[#D97757] text-white font-semibold tracking-wide hover:bg-[#bf6244] transition-all duration-300"
            >
              VIEW WORK
            </button>
            <button 
              onClick={() => window.open(RESUME.contact.linkedin, '_blank')}
              className="px-8 py-3 border border-gray-700 text-gray-300 hover:border-white hover:text-white transition-all duration-300"
            >
              LINKEDIN
            </button>
            <button 
              onClick={() => window.open(RESUME.contact.github, '_blank')}
              className="px-8 py-3 border border-gray-700 text-gray-300 hover:border-white hover:text-white transition-all duration-300"
            >
              GITHUB
            </button>
          </div>
        </div>

        {/* 3D Visual Element */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <ThreeDCard className="w-full max-w-md aspect-[4/5]">
            <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#0c0c0e] border border-[#333] p-1 relative overflow-hidden shadow-2xl">
               {/* Content inside the card - Tech Vibe Image */}
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
               <div className="relative h-full flex flex-col justify-between p-8 bg-black/30 backdrop-blur-[2px]">
                  <div className="flex justify-between items-start">
                    <div className="text-4xl font-bold text-white/20">01</div>
                    <div className="w-8 h-8 border border-[#D97757] rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#D97757] rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="text-xs font-mono text-[#D97757]">CURRENT FOCUS</div>
                    <h3 className="text-3xl font-serif italic">Agentic AI Systems</h3>
                    <p className="text-sm text-gray-400">
                      Orchestrating multi-agent architectures using LangGraph to solve complex enterprise data retrieval challenges.
                    </p>
                  </div>
               </div>
            </div>
          </ThreeDCard>
        </div>
      </div>
    </div>
  );
};