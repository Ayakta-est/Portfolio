import React from "react";

export const Skills = () => {
  const skills = [
    "React",
    "Flask",
    "SQLAlchemy",
    "Tailwind CSS",
    "JavaScript",
    "Python",
    "Git & GitHub",
    "Docker",
  ];

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Skills</h1>
      <p className="mb-4 text-gray-700">Tecnologías y herramientas con las que trabajo:</p>
      <ul className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full shadow-sm hover:bg-blue-200 transition"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}