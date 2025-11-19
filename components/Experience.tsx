import React from 'react';
import { RESUME } from '../constants';

export const Experience: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-20">
        <span className="text-[#D97757] font-mono text-sm tracking-[0.2em] uppercase">Career Trajectory</span>
        <h2 className="text-4xl md:text-6xl font-serif mt-4">Professional Experience</h2>
      </div>

      <div className="relative border-l border-gray-800 ml-4 md:ml-0 space-y-12">
        {RESUME.experience.map((job, index) => (
          <div key={job.id} className="relative md:pl-12 pl-8 group">
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-2 w-3 h-3 bg-[#0c0c0e] border border-[#D97757] rounded-full group-hover:bg-[#D97757] transition-colors"></div>
            
            <div className="md:flex gap-8 items-start">
              <div className="md:w-1/4 mb-2 md:mb-0">
                <div className="font-mono text-xs text-[#D97757] mb-1">{job.period}</div>
                <div className="text-sm text-gray-500">{job.location}</div>
              </div>
              
              <div className="md:w-3/4">
                <h3 className="text-2xl font-serif font-medium text-white mb-1 group-hover:text-[#D97757] transition-colors">
                  {job.role}
                </h3>
                <div className="text-lg text-gray-400 mb-4 font-light">{job.company}</div>
                
                <ul className="space-y-3">
                  {job.details.map((detail, i) => (
                    <li key={i} className="text-gray-400 text-sm leading-relaxed flex gap-3">
                      <span className="mt-1.5 w-1 h-1 bg-gray-600 rounded-full shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 pt-10 border-t border-gray-800">
         <h3 className="font-serif text-2xl mb-6">Education</h3>
         <div className="grid md:grid-cols-2 gap-8">
            {RESUME.education.map((edu, i) => (
                <div key={i} className="bg-[#131316] p-6 border border-gray-800">
                    <h4 className="font-bold text-white mb-2">{edu.degree}</h4>
                    <p className="text-[#D97757] text-sm mb-2">{edu.institution}</p>
                    <p className="text-gray-500 text-xs font-mono">{edu.details}</p>
                </div>
            ))}
         </div>
      </div>
    </div>
  );
};