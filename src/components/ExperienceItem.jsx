// components/ExperienceItem.jsx - VERSIÓN FIEL AL DISEÑO
import React from 'react';

const ExperienceItem = ({ experience }) => {
  return (
    <div className="mb-10 pb-10 border-b border-gray-300 last:border-b-0 last:mb-0 last:pb-0">
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
            {experience.company}
          </h3>
          <p className="text-xl text-gray-700 font-medium">{experience.role}</p>
        </div>
        
        {/* PERÍODO */}
        <span className="mt-2 md:mt-0 text-gray-600 font-medium text-lg">
          {experience.period}
        </span>
      </div>
      
      {/* LISTA CON VIÑETAS */}
      <ul className="space-y-2 text-gray-700 text-lg">
        {experience.description.split('\n').map((item, index) => (
          <li key={index} className="flex items-start">
            {/* <span className="mr-3 mt-2 w-2 h-2 bg-gray-900 rounded-full flex-shrink-0"></span> */}
            <span>{item.trim()}</span>
          </li>
        ))}
      </ul>
      
      {/* APTITUDES */}
      {experience.skills && (
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Aptitudes:</h4>
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-base"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceItem;