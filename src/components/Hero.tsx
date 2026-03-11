import { Dumbbell, Users, Trophy } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight">
            POWER HOUSE
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400">
              GYM
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-yellow-500 font-bold mb-4 tracking-wide">
            Build Strength. Transform Your Body.
          </p>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Experience elite training, world-class equipment, and expert guidance.
            Your transformation starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="w-full sm:w-auto bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105">
              Join Now
            </button>
            <button className="w-full sm:w-auto border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 hover:text-black transition-all duration-300">
              Free Trial
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-black/40 backdrop-blur-sm border border-yellow-500/20 rounded-lg p-6 hover:border-yellow-500/50 transition-all duration-300">
              <Users className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
              <div className="text-4xl font-black text-white mb-2">500+</div>
              <div className="text-gray-400 font-medium">Active Members</div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-yellow-500/20 rounded-lg p-6 hover:border-yellow-500/50 transition-all duration-300">
              <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
              <div className="text-4xl font-black text-white mb-2">1000+</div>
              <div className="text-gray-400 font-medium">Transformations</div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-yellow-500/20 rounded-lg p-6 hover:border-yellow-500/50 transition-all duration-300">
              <Dumbbell className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
              <div className="text-4xl font-black text-white mb-2">10+</div>
              <div className="text-gray-400 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
