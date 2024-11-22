import React from 'react';
import { Bot, Brain, Cpu, MessageSquare, Settings, Workflow } from 'lucide-react';

const services = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: "IA Conversationnelle",
    description: "Automatisez votre service client avec des chatbots intelligents disponibles 24/7."
  },
  {
    icon: <Workflow className="h-8 w-8" />,
    title: "Automatisation des processus",
    description: "Optimisez vos workflows avec des solutions d'automatisation sur mesure."
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Analyse prédictive",
    description: "Anticipez les tendances et prenez des décisions éclairées grâce au machine learning."
  },
  {
    icon: <Settings className="h-8 w-8" />,
    title: "Intégration système",
    description: "Connectez vos outils et applications existants avec nos solutions IA."
  },
  {
    icon: <Bot className="h-8 w-8" />,
    title: "Assistants virtuels",
    description: "Développement d'assistants IA personnalisés pour votre entreprise."
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "Solutions sur mesure",
    description: "Création de solutions IA adaptées à vos besoins spécifiques."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Nos Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Découvrez comment nous pouvons transformer votre entreprise avec nos solutions d'automatisation intelligente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-purple-500 transition-colors group"
            >
              <div className="text-purple-500 mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}