import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: 'Amit Desai',
      image: 'https://images.pexels.com/photos/4944315/pexels-photo-4944315.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      review: 'This gym completely changed my lifestyle. Amazing trainers and great environment. Best decision I ever made!',
    },
    {
      name: 'Neha Gupta',
      image: 'https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      review: 'Lost 12kg in 3 months! The personal training program is worth every penny. Highly recommended.',
    },
    {
      name: 'Rohan Malhotra',
      image: 'https://images.pexels.com/photos/4944315/pexels-photo-4944315.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      review: 'World-class equipment and professional trainers. The transformation programs actually work!',
    },
    {
      name: 'Priyanka Singh',
      image: 'https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      review: 'Best gym in Bangalore! Clean, well-maintained, and the staff is incredibly supportive.',
    },
    {
      name: 'Suresh Kumar',
      image: 'https://images.pexels.com/photos/4944315/pexels-photo-4944315.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      review: 'The nutrition guidance along with training made all the difference. Gained 8kg muscle mass!',
    },
    {
      name: 'Divya Rao',
      image: 'https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      review: 'From day one, the team has been incredibly motivating. This place feels like a second home.',
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            MEMBER <span className="text-yellow-500">REVIEWS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Hear from our satisfied members</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <Quote className="w-10 h-10 text-yellow-500/30 mb-4" />

              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <p className="text-gray-300 text-base leading-relaxed mb-6 italic">
                "{review.review}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-yellow-500/50"
                />
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <p className="text-yellow-500 text-sm">Member</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
