import { Award } from 'lucide-react';

export default function Trainers() {
  const trainers = [
    {
      name: 'Rajesh Kumar',
      specialization: 'Strength Coach',
      experience: '8 Years',
      image: 'https://images.pexels.com/photos/4944315/pexels-photo-4944315.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Priya Sharma',
      specialization: 'Fat Loss Specialist',
      experience: '6 Years',
      image: 'https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Vikram Singh',
      specialization: 'Personal Trainer',
      experience: '10 Years',
      image: 'https://images.pexels.com/photos/4944315/pexels-photo-4944315.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Anita Reddy',
      specialization: 'Functional Training Expert',
      experience: '7 Years',
      image: 'https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <section id="trainers" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            OUR <span className="text-yellow-500">TRAINERS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Train with certified professionals dedicated to your success
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-yellow-500/20 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-center mb-3">
                  <Award className="w-5 h-5 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1 text-center">{trainer.name}</h3>
                <p className="text-yellow-500 font-semibold text-center mb-1">{trainer.specialization}</p>
                <p className="text-gray-400 text-sm text-center">{trainer.experience} Experience</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
