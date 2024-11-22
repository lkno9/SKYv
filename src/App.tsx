import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import ExplorIA from './components/ExplorIA';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <ExplorIA />
        <Contact />
      </main>
      
      <footer className="bg-black text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 NexusAI. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;