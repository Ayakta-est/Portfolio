import React from "react";

export const Contact = () => {
  return (
    <div className="text-center max-w-xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Contacto</h1>
      <p className="mb-8 text-gray-700">
        Puedes encontrarme en las siguientes plataformas o escribirme directamente:
      </p>

      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-8">
        {/* GitHub */}
        <a
          href="https://github.com/tu_usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-800 hover:text-blue-500 transition"
        >
          {/* Puedes reemplazar estos span por tus SVGs personalizados */}
          <span>🐙</span>
          <span>GitHub</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/tu_usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-800 hover:text-blue-500 transition"
        >
          <span>🔗</span>
          <span>LinkedIn</span>
        </a>

        {/* Email */}
        <a
          href="mailto:tu_correo@example.com"
          className="flex items-center gap-2 text-gray-800 hover:text-blue-500 transition"
        >
          <span>✉️</span>
          <span>Correo</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/3468576999"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-800 hover:text-blue-500 transition"
        >
          <span>📱</span>
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}