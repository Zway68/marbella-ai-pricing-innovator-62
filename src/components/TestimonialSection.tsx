
import AnimatedReveal from './AnimatedReveal';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Janice Wang",
    role: "Master Student in Data Science at Boston University",
    quote: "Marbella Education truly changed the way I learn, giving me a better understanding of the world of artificial intelligence."
  },
  {
    name: "Alex Rubinstein",
    role: "Software Engineer at Google",
    quote: "Marbella Education's AI course was an incredible experience that I absolutely loved. Not only did it deepen my understanding of AI fundamentals like machine learning and neural networks, but it also showed me how AI is revolutionizing industries."
  },
  {
    name: "Dr. Jason Dou",
    role: "Postdoc Research Fellow in AI at Harvard",
    quote: "Dr. Dou and his team revolutionized the way I think and the way I work in the digital age. The Marbella AI Thinking Bootcamp is a must for new graduate want to break into the AI domain."
  }
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-marbella-50 to-white">
      <div className="container mx-auto">
        <AnimatedReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-2">
              <span className="chip">Success Stories</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-marbella-950 mb-4">
              What Our Students Say
            </h2>
            <p className="text-marbella-700 text-lg">
              Hear from those who have experienced our AI education programs and how it transformed their careers.
            </p>
          </div>
        </AnimatedReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimatedReveal key={index} delay={100 * index}>
              <div className="testimonial-card h-full flex flex-col">
                <div className="mb-4 text-marbella-400">
                  <Quote size={32} />
                </div>
                
                <p className="text-marbella-700 text-lg italic mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>
                
                <div className="mt-auto">
                  <h4 className="font-semibold text-marbella-900">{testimonial.name}</h4>
                  <p className="text-sm text-marbella-600">{testimonial.role}</p>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
