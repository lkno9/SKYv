import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import ContactModal from './ContactModal';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Contactez-nous
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Prêt à transformer votre entreprise ? Contactez-nous pour discuter de vos besoins.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
          >
            Nous contacter
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
            <div className="flex items-center space-x-4">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Notre adresse</h3>
                <p className="text-gray-300">123 Avenue de l'Innovation<br />75001 Paris, France</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
            <div className="flex items-center space-x-4">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <Mail className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">contact@nexusai.fr</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
            <div className="flex items-center space-x-4">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <Phone className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Téléphone</h3>
                <p className="text-gray-300">+33 1 23 45 67 89</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}