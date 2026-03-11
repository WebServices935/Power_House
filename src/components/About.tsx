import { Target, Award, Heart, Zap } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Target,
      title: 'Strength Training',
      description: 'Professional strength and conditioning programs',
    },
    {
      icon: Zap,
      title: 'Fat Loss Programs',
      description: 'Scientifically designed fat loss transformations',
    },
    {
      icon: Award,
      title: 'Personal Training',
      description: 'One-on-one coaching with certified trainers',
    },
    {
      icon: Heart,
      title: 'Nutrition Guidance',
      description: 'Customized diet plans for optimal results',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            ABOUT <span className="text-yellow-500">THE GYM</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Your Journey to <span className="text-yellow-500">Greatness</span> Starts Here
            </h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Power House Gym is Bangalore's premier fitness destination, dedicated to transforming
              lives through strength, discipline, and excellence. With over 10 years of experience,
              we've helped thousands achieve their fitness goals.
            </p>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Our state-of-the-art facility features world-class equipment, certified trainers,
              and a supportive community that pushes you to be your best every single day.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-6 py-3 rounded-lg font-bold">
                ✓ Certified Trainers
              </div>
              <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-6 py-3 rounded-lg font-bold">
                ✓ Premium Equipment
              </div>
              <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-6 py-3 rounded-lg font-bold">
                ✓ AC Facility
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-yellow-500/20">
              <img
                src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Gym Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-2xl -z-10"></div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <feature.icon className="w-12 h-12 text-yellow-500 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
