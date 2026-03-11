import { Clock, Sun, Moon } from 'lucide-react';

export default function Timings() {
  return (
    <section id="timings" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            GYM <span className="text-yellow-500">TIMINGS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">We're open when you need us</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-500/30 rounded-2xl p-8 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 p-4 rounded-full">
                <Sun className="w-10 h-10 text-black" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-4">Morning Session</h3>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-yellow-500" />
              <p className="text-3xl font-black text-yellow-500">5:30 AM - 11:00 AM</p>
            </div>
            <p className="text-gray-400 text-center">Perfect for early risers and professionals</p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-500/30 rounded-2xl p-8 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 p-4 rounded-full">
                <Moon className="w-10 h-10 text-black" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-4">Evening Session</h3>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-yellow-500" />
              <p className="text-3xl font-black text-yellow-500">4:30 PM - 10:30 PM</p>
            </div>
            <p className="text-gray-400 text-center">Ideal for post-work training sessions</p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-yellow-600/10 to-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 max-w-2xl mx-auto">
          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-white font-bold text-lg mb-2">Personal Training Hours</h4>
              <p className="text-gray-400">
                Available throughout the day. Book your slot with our certified trainers for
                one-on-one sessions tailored to your goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
