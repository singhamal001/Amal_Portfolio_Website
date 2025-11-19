import React from 'react';
import { RESUME } from '../constants';
import { ThreeDCard } from './ThreeDCard';

const SkillIcon: React.FC<{ name: string }> = ({ name }) => {
  // Simple pseudo-icon generator based on first letter
  return (
    <div className="w-10 h-10 border border-gray-700 flex items-center justify-center text-sm font-bold text-gray-500 group-hover:text-[#D97757] group-hover:border-[#D97757] transition-all">
      {name.substring(0, 2).toUpperCase()}
    </div>
  );
};

export const Skills: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16 md:flex justify-between items-end border-b border-gray-800 pb-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-serif mb-4">Technical <span className="text-[#D97757] italic">Arsenal</span></h2>
          <p className="text-gray-400 max-w-xl">
            A comprehensive toolkit built for scaling AI from research notebooks to production-grade enterprise systems.
          </p>
        </div>
        <div className="hidden md:block text-right font-mono text-xs text-gray-500">
          STACK OVERVIEW_2025
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {RESUME.skills.map((category, idx) => (
          <ThreeDCard key={idx} className="h-full">
            <div className="h-full bg-[#131316] border border-gray-800 p-8 hover:border-[#D97757] transition-colors group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-800 group-hover:bg-[#D97757] transition-colors"></div>
              
              <h3 className="text-xl font-bold mb-8 tracking-wider uppercase flex items-center gap-3">
                <span className="text-[#D97757]">0{idx + 1}.</span> {category.name}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-[#0c0c0e] border border-gray-800 text-sm text-gray-300 font-mono hover:text-white hover:border-gray-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Decor element */}
              <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg width="60" height="60" viewBox="0 0 100 100" className="fill-[#D97757]">
                   <circle cx="50" cy="50" r="40" />
                </svg>
              </div>
            </div>
          </ThreeDCard>
        ))}
      </div>
    </div>
  );
};