import React from 'react';
import { BookOpen, Brain, GraduationCap, Users } from 'lucide-react';

export default function ExplorIA() {
  return (
    <section id="exploria" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Explor'IA</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Sensibilisation et Éducation à l'Intelligence Artificielle
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500 transition-all">
            <h3 className="text-2xl font-bold text-white mb-4">Démystifions l'Intelligence Artificielle</h3>
            <p className="text-white">
              Faisons tomber les idées reçues et découvrons ensemble les réelles possibilités de l'IA.
            </p>
          </div>
          
          <div className="p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500 transition-all">
            <h3 className="text-2xl font-bold text-white mb-4">Une Technologie Accessible à Tous</h3>
            <p className="text-white">
              Les solutions IA ne sont pas réservées aux experts. Grâce à nos ateliers, nous rendons l'IA compréhensible et accessible à tous.
            </p>
          </div>
        </div>

        {/* Method Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Notre Méthode : Apprendre par l'Expérience
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500 transition-all">
                <div className="bg-purple-900 p-4 rounded-lg">
                  <BookOpen className="h-6 w-6 text-purple-300" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Ateliers Pratiques</h4>
                  <ul className="text-white space-y-2">
                    <li>• Sessions interactives pour comprendre l'IA</li>
                    <li>• Exercices pratiques et concrets</li>
                    <li>• Études de cas réels</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500 transition-all">
                <div className="bg-purple-900 p-4 rounded-lg">
                  <Users className="h-6 w-6 text-purple-300" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Sensibilisation Collective</h4>
                  <ul className="text-white space-y-2">
                    <li>• Interventions dans les écoles et entreprises</li>
                    <li>• Ateliers de groupe interactifs</li>
                    <li>• Accompagnement personnalisé</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500 transition-all">
              <h4 className="text-xl font-bold text-white mb-4">Éduquer pour un Futur Meilleur</h4>
              <p className="text-white">
                La formation et la sensibilisation à l'IA permettent à chacun de se préparer aux défis numériques de demain.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Prêt à découvrir l'IA ?
          </h3>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Rejoignez nos ateliers et découvrez comment l'IA peut transformer votre façon d'apprendre et de travailler.
          </p>
          <button className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
            Réserver un atelier
          </button>
        </div>
      </div>
    </section>
  );
}