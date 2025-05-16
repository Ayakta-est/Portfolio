import React from "react";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 ml-0 md:ml-64 w-full h-screen 
        overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      >
        <section
          id="sobre-mi"
          className="snap-start min-h-screen flex items-center justify-center bg-gray-100 p-8"
        >
          <h1 className="text-4xl font-bold">Sobre mí</h1>
        </section>

        <section
          id="proyectos"
          className="snap-start min-h-screen flex items-center justify-center bg-white p-8"
        >
          <h1 className="text-4xl font-bold">Proyectos</h1>
        </section>

        <section
          id="skills"
          className="snap-start min-h-screen flex items-center justify-center bg-gray-100 p-8"
        >
          <h1 className="text-4xl font-bold">Skills</h1>
        </section>

        <section
          id="contacto"
          className="snap-start min-h-screen flex items-center justify-center bg-white p-8"
        >
          <h1 className="text-4xl font-bold">Contacto</h1>
        </section>
      </main>
    </div>
  );
}
