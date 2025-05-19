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
    "TypeScript",
  ];

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Skills</h1>
      <p className="mb-4 text-gray-700">Tecnologías y herramientas con las que trabajo:</p>
      <ul className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-gray-600 text-white px-4 py-2 rounded-full shadow-sm hover:bg-green-700 transition"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}