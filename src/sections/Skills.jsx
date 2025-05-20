import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiFlask,
  SiSqlalchemy,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiGithub,
} from "react-icons/si";

export const Skills = () => {
  const programmingLanguages = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-600" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "Python", icon: <SiPython className="text-yellow-500" /> },
  ];

  const frameworksAndLibraries = [
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
    { name: "Flask", icon: <SiFlask className="text-gray-300" /> },
    { name: "SQLAlchemy", icon: <SiSqlalchemy className="text-purple-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-700" /> },
  ];

  const toolsAndTech = [
    { name: "Git", icon: <SiGit className="text-red-600" /> },
    { name: "GitHub", icon: <SiGithub className="text-white" /> },
  ];

  const renderSkills = (title, skills) => (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <ul className="flex flex-wrap justify-center gap-8">
        {skills.map(({ name, icon }) => (
          <li key={name} className="flex flex-col items-center w-20">
            <div className="text-4xl mb-1">{icon}</div>
            <span className="text-sm text-white text-center">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="text-center w-full px-4">
      <h1 className="text-4xl font-bold mb-6">Skills</h1>
      <p className="mb-6 text-[#cfac91]">
        Tecnologías y herramientas con las que trabajo:
      </p>

      {renderSkills("Lenguajes de programación", programmingLanguages)}
      {renderSkills("Frameworks y librerías", frameworksAndLibraries)}
      {renderSkills("Tecnologías y herramientas", toolsAndTech)}
    </div>
  );
};
