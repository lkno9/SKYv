import React from 'react';
import { ClipboardCheck, FileSearch, Lightbulb, Rocket, Target, Users } from 'lucide-react';

const steps = [
  {
    icon: <FileSearch className="h-8 w-8" />,
    title: "Analyse des Besoins",
    description: "Étude approfondie de vos processus actuels et identification des opportunités d'automatisation."
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Définition des Objectifs",
    description: "Établissement des KPIs et des résultats attendus pour votre projet d'automatisation."
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Conception de Solution",
    description: "Élaboration d'une solution sur mesure intégrant les technologies IA adaptées."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Validation Collaborative",
    description: "Présentation et ajustement de la solution avec vos équipes."
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Implémentation",
    description: "Déploiement progressif de la solution avec formation des utilisateurs."
  },
  {
    icon: <ClipboardCheck className="h-8 w-8" />,
    title: "Suivi & Optimisation",
    description: "Monitoring continu et optimisation des performances."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Notre Processus
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Une méthodologie éprouvée pour transformer votre entreprise avec l'IA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500 transition-all group"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-purple-900 rounded-lg p-4 shadow-lg group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-center">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}