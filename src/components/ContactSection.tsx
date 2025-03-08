
import { useState } from 'react';
import AnimatedReveal from './AnimatedReveal';
import { Mail, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/lib/supabase';

const ContactSection = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Store the contact submission in Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          { 
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ]);
        
      if (error) throw error;
      
      // Show success toast
      toast({
        title: t("Message sent!", "消息已发送！"),
        description: t("We'll get back to you as soon as possible.", "我们会尽快回复您。"),
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: t("Something went wrong", "出现了问题"),
        description: t("Please try again later.", "请稍后再试。"),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <AnimatedReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-2">
              <span className="chip">{t('Get In Touch', '联系我们')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-marbella-950 mb-4">
              {t('Contact Us', '联系方式')}
            </h2>
            <p className="text-marbella-700 text-lg">
              {t('Have questions about our programs or pricing? Reach out to us and we\'ll be happy to help.',
                '对我们的项目或价格有疑问？请联系我们，我们很乐意为您提供帮助。')}
            </p>
          </div>
        </AnimatedReveal>

        <div className="grid gap-12 md:grid-cols-2">
          <AnimatedReveal>
            <div className="glass-card rounded-2xl p-8 h-full">
              <h3 className="text-xl font-bold text-marbella-900 mb-6">{t('Contact Information', '联系信息')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-marbella-100 flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-marbella-600" />
                  </div>
                  <div>
                    <p className="text-sm text-marbella-600 mb-1">{t('Phone', '电话')}</p>
                    <p className="text-marbella-900 font-medium">+1 (412) 419-5156</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-marbella-100 flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-marbella-600" />
                  </div>
                  <div>
                    <p className="text-sm text-marbella-600 mb-1">{t('Email', '电子邮件')}</p>
                    <p className="text-marbella-900 font-medium">jason@marbellaai.com</p>
                  </div>
                </div>
                
                <div className="bg-marbella-50 rounded-xl p-6 mt-8">
                  <h4 className="font-medium text-marbella-900 mb-2">{t('WeChat', '微信')}</h4>
                  <p className="text-marbella-700 mb-4">{t('Connect with Dr. Jason Dou on WeChat', '通过微信与杜博士联系')}</p>
                  <p className="text-marbella-900 font-medium">JasonDouProfessional</p>
                </div>
              </div>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={200}>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-marbella-900 mb-6">{t('Send Us a Message', '给我们发送消息')}</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-marbella-700 mb-1">
                    {t('Your Name', '您的姓名')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-marbella-200 focus:ring-2 focus:ring-marbella-400 focus:border-transparent transition-all outline-none"
                    required
                    placeholder={t('Enter your name', '输入您的姓名')}
                    disabled={isLoading}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-marbella-700 mb-1">
                    {t('Email Address', '电子邮箱地址')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-marbella-200 focus:ring-2 focus:ring-marbella-400 focus:border-transparent transition-all outline-none"
                    required
                    placeholder={t('Enter your email', '输入您的电子邮箱')}
                    disabled={isLoading}
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-marbella-700 mb-1">
                    {t('Phone Number (Optional)', '电话号码（可选）')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-marbella-200 focus:ring-2 focus:ring-marbella-400 focus:border-transparent transition-all outline-none"
                    placeholder={t('Enter your phone number', '输入您的电话号码')}
                    disabled={isLoading}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-marbella-700 mb-1">
                    {t('Your Message', '您的留言')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-marbella-200 focus:ring-2 focus:ring-marbella-400 focus:border-transparent transition-all outline-none resize-none"
                    required
                    placeholder={t('Write your message here...', '在此处撰写您的留言...')}
                    disabled={isLoading}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="button-primary w-full flex items-center justify-center"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span>{t('Sending...', '发送中...')}</span>
                  ) : (
                    <>
                      <span>{t('Send Message', '发送留言')}</span>
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
