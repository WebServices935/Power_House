import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            GET IN <span className="text-yellow-500">TOUCH</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Visit us or reach out today</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                POWER HOUSE <span className="text-yellow-500">GYM</span>
              </h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Ready to transform your body and life? Join Bangalore's premier fitness destination.
                Visit us for a free tour and consultation.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Address</h4>
                    <p className="text-gray-400">
                      Power House Gym<br />
                      #24, 2nd Floor, 100 Feet Road<br />
                      Indiranagar, Bangalore<br />
                      Karnataka - 560038
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Phone</h4>
                    <a href="tel:+919731268151" className="text-gray-400 hover:text-yellow-500 transition-colors">
                      +91 97312 68151
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Email</h4>
                    <a href="mailto:info@powerhousegym.in" className="text-gray-400 hover:text-yellow-500 transition-colors">
                      info@powerhousegym.in
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href="https://wa.me/919731268151"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <a
                  href="tel:+919731268151"
                  className="flex-1 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-yellow-500/50 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>

              <div className="mt-8">
                <h4 className="text-white font-bold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="bg-gray-800 p-3 rounded-lg hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-500 transition-all group"
                  >
                    <Facebook className="w-6 h-6 text-yellow-500 group-hover:text-black" />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-800 p-3 rounded-lg hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-500 transition-all group"
                  >
                    <Instagram className="w-6 h-6 text-yellow-500 group-hover:text-black" />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-800 p-3 rounded-lg hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-500 transition-all group"
                  >
                    <Youtube className="w-6 h-6 text-yellow-500 group-hover:text-black" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-2xl overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0685595245595!2d77.64073831482213!3d12.971598990858775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gym Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
