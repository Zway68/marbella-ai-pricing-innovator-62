
import { useParallax } from '@/lib/animations';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const parallaxBg = useParallax(0.05);
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Gradient */}
      <div 
        ref={parallaxBg}
        className="absolute inset-0 bg-gradient-to-b from-marbella-50 to-white -z-10"
      />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-marbella-100/50 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-marbella-200/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block mb-2">
            <span className="chip">{t('Leading AI Education', '领先的AI教育')}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-marbella-950 animate-fade-in">
            {t('Marbella High School', '马贝拉高中')}<br />
            <span className="text-marbella-600">{t('AI Talent Program', 'AI人才计划')}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-marbella-700 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            {t(
              'Empowering the next generation with premier AI education through our hybrid pricing model that ensures quality, accessibility and industry connection.',
              '通过我们的混合定价模式为下一代提供优质的AI教育，确保质量、可及性和行业连接。'
            )}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <a href="#pricing" className="button-primary">
              {t('View Pricing Options', '查看价格选项')}
            </a>
            <a href="#contact" className="button-outline">
              {t('Contact Us', '联系我们')}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-marbella-400 flex justify-center">
          <div className="w-1.5 h-3 bg-marbella-400 rounded-full mt-2 animate-pulse-subtle"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
