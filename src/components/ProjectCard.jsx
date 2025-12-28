// components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 group">
      {/* IMAGEN DEL PROYECTO */}
      <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl text-gray-300 group-hover:scale-110 transition-transform duration-700">
            {project.technologies[0].charAt(0)}
          </div>
        </div>
        {/* TECNOLOGÍAS */}
        <div className="absolute top-4 left-4 flex gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-bold"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* CONTENIDO */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {project.description}
        </p>
        
        {/* BOTONES */}
        <div className="flex gap-4">
          <a
            href={project.repoUrl}
            className="btn-outline-black flex-1 text-center py-3 hover:scale-[1.02] transition-transform"
          >
            REPOSITORY
          </a>
          <a
            href={project.demoUrl}
            className="btn-black flex-1 text-center py-3 hover:scale-[1.02] transition-transform"
          >
            VIEW DEMO
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;