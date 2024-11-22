import React from 'react';
import { Bot, Sparkles, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-black to-purple-900 -z-10" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485')] bg-cover bg-center opacity-10 -z-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Bot className="h-12 w-12 text-purple-500" />
            <Sparkles className="h-8 w-8 text-purple-400 animate-pulse" />
            <Zap className="h-12 w-12 text-purple-500" />
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Automatisez votre entreprise avec l'
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Intelligence Artificielle
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transformez votre entreprise grâce à nos solutions d'automatisation intelligente.
            Optimisez vos processus, réduisez vos coûts et augmentez votre productivité.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-lg font-semibold">
              Découvrir nos services
            </button>
            <button className="px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors text-lg font-semibold backdrop-blur-sm">
              Demander une démo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}