import React from 'react';
import { Brain, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-purple-500" />
            <span className="ml-2 text-white font-bold text-xl">NexusAI</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#accueil" className="text-gray-300 hover:text-white px-3 py-2 transition-colors">Accueil</a>
              <a href="#services" className="text-gray-300 hover:text-white px-3 py-2 transition-colors">Services</a>
              <a href="#process" className="text-gray-300 hover:text-white px-3 py-2 transition-colors">Process</a>
              <a href="#exploria" className="text-gray-300 hover:text-white px-3 py-2 transition-colors">Explor'IA</a>
              <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 transition-colors">Contact</a>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Démarrer un projet
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90">
            <a href="#accueil" className="text-gray-300 hover:text-white block px-3 py-2">Accueil</a>
            <a href="#services" className="text-gray-300 hover:text-white block px-3 py-2">Services</a>
            <a href="#process" className="text-gray-300 hover:text-white block px-3 py-2">Process</a>
            <a href="#exploria" className="text-gray-300 hover:text-white block px-3 py-2">Explor'IA</a>
            <a href="#contact" className="text-gray-300 hover:text-white block px-3 py-2">Contact</a>
            <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Démarrer un projet
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}