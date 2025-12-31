import React from 'react';

const CertificationCard = ({ certification }) => {
  const hasImage = certification.photoUrl && typeof certification.photoUrl === 'string';

  const handleImageError = (e) => {
    e.target.style.display = 'none';
    const placeholder = e.target.nextElementSibling;
    if (placeholder && placeholder.style) {
      placeholder.style.display = 'flex';
    }
  };

  // Función para abrir imagen en nueva ventana
  const openImageInNewWindow = () => {
    if (certification.photoUrl) {
      window.open(certification.photoUrl, '_blank');
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 group h-full flex flex-col">
      {/* IMAGEN DEL CERTIFICADO */}
      <div className="h-48 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex-shrink-0 cursor-pointer" onClick={openImageInNewWindow}>
        {hasImage ? (
          <>
            <img 
              src={certification.photoUrl} 
              alt={certification.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              onError={handleImageError}
            />
            {/* Placeholder oculto inicialmente */}
            <div 
              className="absolute inset-0 hidden items-center justify-center"
              style={{ display: 'none' }}
            >
              <div className="text-4xl text-gray-300 font-bold opacity-70">
                {certification.name.charAt(0)}
              </div>
            </div>
          </>
        ) : (
          // Placeholder si no hay imagen
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl text-gray-300 font-bold opacity-70">
              {certification.name.charAt(0)}
            </div>
          </div>
        )}
      </div>
      
      {/* CONTENIDO */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{certification.name}</h3>
        
        <div className="mb-6 flex-grow space-y-3">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-gray-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="text-gray-600">
              <span className="font-semibold">Emisor:</span> {certification.issuer}
            </span>
          </div>
          
          <div className="flex items-start">
            <svg className="w-5 h-5 text-gray-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-gray-600">
              <span className="font-semibold">Fecha:</span> {certification.date}
            </span>
          </div>
        </div>
        
        {/* BOTÓN */}
        <div className="flex gap-3 mt-auto">
          <button
            onClick={openImageInNewWindow}
            className="btn-outline-black flex-1 text-center py-2.5 text-sm hover:scale-[1.02] transition-transform rounded-lg"
          >
            VER CERTIFICADO
          </button>
          {certification.verifyUrl && certification.verifyUrl !== "#" && (
            <a
              href={certification.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-black flex-1 text-center py-2.5 text-sm hover:scale-[1.02] transition-transform rounded-lg"
            >
              VERIFICAR
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;