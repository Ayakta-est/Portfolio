import React, { useState } from "react";
import { SiGithub, SiLinkedin, SiWhatsapp, SiGmail } from 'react-icons/si';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "adrianhsilva403@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => console.error("Failed to copy: ", err));
  };

  const contacts = [
    {
      type: 'link',
      href: "https://github.com/Ayakta-est",
      icon: <SiGithub size={24} className="text-grey-600" />,
      label: "GitHub"
    },
    {
      type: 'link',
      href: "https://www.linkedin.com/in/adrianhsilva403",
      icon: <SiLinkedin size={24} className="text-blue-600" />,
      label: "LinkedIn"
    },
    {
      type: 'copy',
      onClick: copyEmail,
      icon: <SiGmail size={24} className="text-red-500" />,
      label: email
    },
    {
      type: 'link',
      href: "https://wa.me/3468576999",
      icon: <SiWhatsapp size={24} className="text-green-500" />,
      label: "WhatsApp"
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16 w-full">
      <h1 className="text-4xl font-extrabold mb-4">Contacto</h1>
      <p className="mb-8 max-w-md text-center"
      style={{ color: '#cfac91' }}>
        Puedes copiar mi correo o visitar mis perfiles:
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
        {contacts.map((c, i) => {
          if (c.type === 'link') {
            return (
              <a
                key={i}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-4 bg-gray-100 rounded-lg hover:shadow-lg transition"
              >
                <span>{c.icon}</span>
                <span className="text-gray-800 font-medium truncate">{c.label}</span>
              </a>
            );
          } else {
            return (
              <button
                key={i}
                onClick={c.onClick}
                className="flex items-center gap-3 px-5 py-4 bg-gray-100 rounded-lg hover:shadow-lg transition"
              >
                <span>{c.icon}</span>
                <span className="text-gray-800 font-medium truncate">{c.label}</span>
                <span className={`ml-auto text-sm ${copied ? 'text-green-500' : 'text-gray-400'}`}>
                  {copied ? 'Copiado!' : 'Copiar'}
                </span>
              </button>
            );
          }
        })}
      </div>
    </div>
  );
};
