import { Facebook, Instagram, Youtube, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Gym', id: 'about' },
    { label: 'Trainers', id: 'trainers' },
    { label: 'Transformations', id: 'transformations' },
    { label: 'Timings', id: 'timings' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-black border-t border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/Power_House_Gym.png" alt="Power House Gym" className="h-12 w-12" />
              <span className="ml-3 text-xl font-bold text-white">
                POWER HOUSE <span className="text-yellow-500">GYM</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Transform your body and mind at Bangalore's premier fitness destination.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-500 transition-all group"
              >
                <Facebook className="w-5 h-5 text-yellow-500 group-hover:text-black" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-500 transition-all group"
              >
                <Instagram className="w-5 h-5 text-yellow-500 group-hover:text-black" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-500 transition-all group"
              >
                <Youtube className="w-5 h-5 text-yellow-500 group-hover:text-black" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.slice(0, 4).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-yellow-500 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">More Links</h3>
            <ul className="space-y-2">
              {quickLinks.slice(4).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-yellow-500 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>#24, 2nd Floor, 100 Feet Road</li>
              <li>Indiranagar, Bangalore - 560038</li>
              <li className="pt-2">
                <a href="tel:+919731268151" className="hover:text-yellow-500 transition-colors">
                  +91 97312 68151
                </a>
              </li>
              <li>
                <a href="mailto:info@powerhousegym.in" className="hover:text-yellow-500 transition-colors">
                  info@powerhousegym.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-yellow-500/20 pt-8">
          <p className="text-center text-gray-400 flex items-center justify-center gap-2 flex-wrap">
            © 2026 Power House Gym - All Rights Reserved
            <span className="flex items-center gap-1">
              | Made with <Heart className="w-4 h-4 fill-yellow-500 text-yellow-500" /> in Bangalore
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
