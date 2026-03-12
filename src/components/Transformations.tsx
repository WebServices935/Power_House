import { TrendingDown, TrendingUp } from 'lucide-react';

export default function Transformations() {
  const transformations = [
    {
      name: 'Arjun Patel',
      result: 'Lost 15kg in 4 months',
      story: 'Complete lifestyle transformation with dedicated training and nutrition guidance.',
      before: '/images/Arjun Before.png',
      after: '/images/Arjun After.png',
      metric: '-15kg',
    },
    {
      name: 'Sneha Iyer',
      result: 'Gained 8kg muscle in 5 months',
      story: 'Strength training program resulted in incredible muscle gain and confidence boost.',
      before: '/images/Sneha Before.png?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/4944315/pexels-photo-4944315.jpeg?auto=compress&cs=tinysrgb&w=400',
      metric: '+8kg',
    },
    {
      name: 'Karthik Reddy',
      result: 'Lost 20kg in 6 months',
      story: 'From overweight to athletic - a journey of dedication and consistency.',
      before: '/images/Karthik Before.png?auto=compress&cs=tinysrgb&w=400',
      after: '/images/Karthik After.png?auto=compress&cs=tinysrgb&w=400',
      metric: '-20kg',
    },
  ];

  return (
    <section id="transformations" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            REAL <span className="text-yellow-500">TRANSFORMATIONS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Witness the incredible journeys of our members
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformations.map((transformation, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-yellow-500/20 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="grid grid-cols-2 gap-1 p-1">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <img
                    src={transformation.before}
                    alt="Before"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    BEFORE
                  </div>
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <img
                    src={transformation.after}
                    alt="After"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    AFTER
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{transformation.name}</h3>
                  <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-3 py-1 rounded-full font-bold">
                    {transformation.metric.startsWith('-') ? (
                      <TrendingDown className="w-4 h-4" />
                    ) : (
                      <TrendingUp className="w-4 h-4" />
                    )}
                    <span>{transformation.metric}</span>
                  </div>
                </div>
                <p className="text-yellow-500 font-semibold mb-2">{transformation.result}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{transformation.story}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
