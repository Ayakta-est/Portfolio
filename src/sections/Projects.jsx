import React from "react";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiFlask,
  SiPostgresql,
  SiSqlite,
} from 'react-icons/si';

const projects = [
  {
    title: "Games of the Past",
    image: "https://i.pinimg.com/736x/8c/62/28/8c6228f748cd6c3e878d3ea1d42bbb73.jpg",
    url: "https://tuproyecto.com/videogame-store",
    technologies: ["React", "Flask", "PostgreSQL"],
    description: "Plataforma para jugar juegos retro como Pacman, Buscaminas y Tetris",
  },
  {
    title: "Qué,Cómo y Cuándo",
    image: "https://i.pinimg.com/736x/8c/62/28/8c6228f748cd6c3e878d3ea1d42bbb73.jpg",
    url: "https://tuproyecto.com/meal-planner",
    technologies: ["React", "Tailwind", "Python"],
    description: "App que busca resolver todas las cuestiones que nos puede dar al pensar sobre nuestra alimentación. Qué comer, cómo prepararlo y cuántas cantidades debería comer según mi objetivo",
  },
  {
    title: "Portfolio 3D",
    image: "https://i.pinimg.com/736x/8c/62/28/8c6228f748cd6c3e878d3ea1d42bbb73.jpg",
    url: "https://tuproyecto.com/3d-portfolio",
    technologies: ["Tailwind", "React", "GSAP"],
    description: "Portfolio interactivo con diseño 3D animado",
  },
  {
    title: "Gestor de entrenamientos",
    image: "https://i.pinimg.com/736x/8c/62/28/8c6228f748cd6c3e878d3ea1d42bbb73.jpg",
    url: "https://tuproyecto.com/workout-manager",
    technologies: ["React", "Flask", "SQLite"],
    description: "Aplicación para seguir rutinas de entrenamiento personalizadas",
  },
];

const iconMap = {
  React: <SiReact title="React" size={20} className="text-blue-400" />, 
  HTML5: <SiHtml5 title="HTML5" size={20} className="text-orange-600" />, 
  JavaScript: <SiJavascript title="JavaScript" size={20} className="text-yellow-500" />,
  Tailwind: <SiTailwindcss title="Tailwind CSS" size={20} className="text-teal-400" />,
  Python: <SiPython title="Python" size={20} className="text-blue-500" />,
  Flask: <SiFlask title="Flask" size={20} className="text-gray-400" />,
  PostgreSQL: <SiPostgresql title="PostgreSQL" size={20} className="text-blue-700" />,
  SQLite: <SiSqlite title="SQLite" size={20} className="text-blue-300" />,
};

export const Projects = () => {
  return (
    <div className="text-center px-4 py-10 bg-black min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-white">Proyectos</h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 border-2 border-green-400 rounded-2xl overflow-hidden transition-transform hover:scale-105 shadow-lg shadow-green-500/50 flex flex-col"
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            </a>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-white">{project.title}</h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mb-4">
                {project.technologies.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-gray-800 border border-green-800 px-4 py-2 rounded-full shadow-inner"
                  >
                    {iconMap[tech]}
                    <span className="text-sm text-white">{tech}</span>
                  </div>
                ))}
              </div>
              <a
                href={project.url}
                className="mt-auto inline-block bg-green-700 hover:bg-green-900 text-white font-semibold py-2 px-6 rounded-full transition"
              >
                Ver proyecto
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};