import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "../hooks/useActiveSection";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const active = useActiveSection();

  const linkClass = (id) =>
    `hover:text-red-400 ${
      active === id ? "text-red-500 font-semibold" : "text-orange-200"
    }`;

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-white bg-gray-700 p-2 rounded"
        onClick={() => setIsOpen((o) => !o)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside style={{ backgroundColor: '#380f17' }}
        className={`
          fixed top-0 left-0 h-screen w-64 text-white px-4 py-6 z-40
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 lg:block 
        `}
      >  {/*checkear lg:static */}
    
        <h2 className="text-2xl font-bold mb-8 text-orange-200">Mi Portfolio</h2>
        <nav>
          <ul className="space-y-4">
            {[
                ["sobre-mi", "Sobre mí"],
                ["proyectos", "Proyectos"],
                ["skills", "Skills"],
                ["contacto", "Contacto"],
            ].map(([id, label]) => (
                <li key={id}>
                <a
                    href={`#${id}`}
                    onClick={() => setIsOpen(false)}
                    className={linkClass(id)}
                >
                    {label}
                </a>
                </li>
            ))}
            </ul>
        </nav>
      </aside>
    </>
  );
}
