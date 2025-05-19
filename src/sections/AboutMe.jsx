import React from "react";

export const AboutMe = () => {
  return (
    <div className="relative bg-zinc-800 w-full min-h-screen flex items-center justify-center py-16 px-4">
      {/* Placeholder para foto en esquina superior derecha */}
      <div className="absolute top-6 right-6 bg-gray-400 vw-15 vh-15 flex items-center justify-center">
        <img src="https://i.pinimg.com/736x/c1/7a/47/c17a476deb955681c90b474d85f9f32d.jpg" />
      </div>

      <div className="max-w-3xl text-left bg-white bg-opacity-80 backdrop-blur-md p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Sobre mí</h1>
        <p className="mb-6 text-gray-800">
          Desarrollador Full Stack graduado en 4Geeks Academy. Apasionado por el
          Frontend creativo, los juegos complejos y las posibilidades de la IA en
          proyectos digitales.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-gray-900">Lo que estoy haciendo ahora</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>
            Explorando formas de integrar IA en proyectos creativos para mejorar la
            experiencia del usuario y facilitar la autonomía del servidor.
          </li>
          <li>
            Diseñando y programando juegos complejos como desafío personal y profesional.
          </li>
          <li>
            Enfocándome en el Frontend, buscando crear diseños originales y usables.
          </li>
        </ul>
      </div>
    </div>
  );
};