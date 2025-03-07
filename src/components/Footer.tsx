
import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-marbella-950 text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Marbella<span className="text-marbella-400">AI</span></h3>
            <p className="text-marbella-200 text-sm">
              {t('Bridging the AI literacy gap, empowering individuals and communities with knowledge and skills to thrive in an AI-driven world.',
                '弥合AI素养差距，通过知识和技能赋能个人和社区，使其在AI驱动的世界中蓬勃发展。')}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('Programs', '项目')}</h4>
            <ul className="space-y-2 text-marbella-200">
              <li><a href="#" className="hover:text-white transition-colors">{t('Beginner AI Literacy', '初级AI素养')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('Intermediate AI Programming', '中级AI编程')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('Advanced AI Research', '高级AI研究')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('Corporate Partnerships', '企业合作')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('Resources', '资源')}</h4>
            <ul className="space-y-2 text-marbella-200">
              <li><a href="#" className="hover:text-white transition-colors">{t('About Us', '关于我们')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('Our Mentors', '我们的导师')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('Testimonials', '客户见证')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('FAQ', '常见问题')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('Contact', '联系方式')}</h4>
            <ul className="space-y-4 text-marbella-200">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 (412) 419-5156</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>jason@marbellaai.com</span>
              </li>
              <li>
                <span className="block mb-1">{t('WeChat:', '微信:')}</span>
                <span className="text-white">JasonDouProfessional</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-marbella-800 pt-8 text-center text-marbella-400 text-sm">
          <p>&copy; {new Date().getFullYear()} {t('Marbella Education. All rights reserved.', 'Marbella Education。版权所有。')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
