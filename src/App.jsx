import React from "react";
import Sidebar from "./components/Sidebar";
import { AboutMe } from "./sections/AboutMe";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Contact } from "./sections/Contact";

export default function App() {
  return (
    <div className="h-screen relative lg:flex">

      <Sidebar />

      <main className="h-screen flex-grow overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <section
          id="sobre-mi"
          className="snap-start w-full min-h-screen flex items-center justify-center bg-emerald-900 p-8"
        >
          <AboutMe />
        </section>

        <section id="proyectos" className="snap-start w-full min-h-screen flex items-center justify-center bg-gray-100 p-8">
          <Projects />
        </section>

        <section
          id="skills"
          className="snap-start min-h-screen flex items-center justify-center bg-gray-100 p-8"
        >
          <Skills />
        </section>

        <section
          id="contacto"
          className="snap-start min-h-screen flex items-center justify-center bg-white p-8"
        >
           <Contact />
        </section>
      </main>
    </div>
  );
}
