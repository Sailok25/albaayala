// components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project }) => {
  // Verifica si la imagen existe
  const hasImage = project.image && typeof project.image === 'string';

  const handleImageError = (e) => {
    // Si la imagen falla, muestra el placeholder
    e.target.style.display = 'none';
    const placeholder = e.target.nextElementSibling;
    if (placeholder && placeholder.style) {
      placeholder.style.display = 'flex';
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 group h-full flex flex-col">
      {/* IMAGEN DEL PROYECTO */}
      <div className="h-48 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex-shrink-0">
        {hasImage ? (
          <>
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              onError={handleImageError}
            />
            {/* Placeholder oculto inicialmente */}
            <div 
              className="absolute inset-0 hidden items-center justify-center"
              style={{ display: 'none' }}
            >
              <div className="text-4xl text-gray-300 font-bold opacity-70">
                {project.title.charAt(0)}
              </div>
            </div>
          </>
        ) : (
          // Placeholder si no hay imagen
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl text-gray-300 font-bold opacity-70">
              {project.title.charAt(0)}
            </div>
          </div>
        )}
        
        {/* TECNOLOGÍAS*/}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 max-w-[80%]">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* CONTENIDO */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
          {project.description}
        </p>
        
        {/* BOTONES */}
        <div className="flex gap-3 mt-auto">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-black flex-1 text-center py-2.5 text-sm hover:scale-[1.02] transition-transform rounded-lg"
          >
            REPOSITORY
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-black flex-1 text-center py-2.5 text-sm hover:scale-[1.02] transition-transform rounded-lg"
          >
            VIEW DEMO
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;