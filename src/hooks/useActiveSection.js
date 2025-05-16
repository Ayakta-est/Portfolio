import { useEffect, useState } from "react";

const IDS = ["sobre-mi", "proyectos", "skills", "contacto"];

export function useActiveSection() {
  const [active, setActive] = useState(IDS[0]);

  useEffect(() => {
    const container = document.querySelector("main");
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Busca la sección que más ocupa el centro del viewport
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActive(visible.target.id);
        }
      },
      {
        root: container,
        threshold: [0.5],     // al menos 50 % visible
      }
    );

    IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}
