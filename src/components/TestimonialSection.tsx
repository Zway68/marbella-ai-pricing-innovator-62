
import AnimatedReveal from './AnimatedReveal';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const testimonials = [
  {
    name: "Janice Wang",
    role: {
      en: "Master Student in Data Science at Boston University",
      zh: "波士顿大学数据科学硕士生"
    },
    quote: {
      en: "Marbella Education truly changed the way I learn, giving me a better understanding of the world of artificial intelligence.",
      zh: "Marbella Education真正改变了我的学习方式，使我更好地理解人工智能的世界。"
    }
  },
  {
    name: "Alex Rubinstein",
    role: {
      en: "Software Engineer at Google",
      zh: "谷歌软件工程师"
    },
    quote: {
      en: "Marbella Education's AI course was an incredible experience that I absolutely loved. Not only did it deepen my understanding of AI fundamentals like machine learning and neural networks, but it also showed me how AI is revolutionizing industries.",
      zh: "Marbella Education的AI课程是一次我非常喜爱的难以置信的经历。它不仅加深了我对机器学习和神经网络等AI基础知识的理解，还向我展示了AI如何革新各行各业。"
    }
  }
];

const TestimonialSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-marbella-50 to-white">
      <div className="container mx-auto">
        <AnimatedReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-2">
              <span className="chip">{t('Success Stories', '成功故事')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-marbella-950 mb-4">
              {t('What Our Students Say', '学生评价')}
            </h2>
            <p className="text-marbella-700 text-lg">
              {t('Hear from those who have experienced our AI education programs and how it transformed their careers.',
                '听听那些经历过我们AI教育项目的人如何评价以及它如何改变了他们的职业生涯。')}
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
                  "{language === 'en' ? testimonial.quote.en : testimonial.quote.zh}"
                </p>
                
                <div className="mt-auto">
                  <h4 className="font-semibold text-marbella-900">{testimonial.name}</h4>
                  <p className="text-sm text-marbella-600">{language === 'en' ? testimonial.role.en : testimonial.role.zh}</p>
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
