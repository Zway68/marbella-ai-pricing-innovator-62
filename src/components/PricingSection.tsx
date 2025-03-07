
import AnimatedReveal from './AnimatedReveal';
import { Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const PricingSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-white to-marbella-50">
      <div className="container mx-auto">
        <AnimatedReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-2">
              <span className="chip">{t('Flexible Options', '灵活选择')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-marbella-950 mb-4">
              {t('Hybrid Pricing Model', '混合定价模式')}
            </h2>
            <p className="text-marbella-700 text-lg">
              {t(
                'We offer a comprehensive pricing structure designed to provide quality education while ensuring accessibility through various options.',
                '我们提供全面的定价结构，旨在通过各种选择提供优质教育同时确保可及性。'
              )}
            </p>
          </div>
        </AnimatedReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Core Tuition Fees */}
          <AnimatedReveal delay={100}>
            <div className="pricing-card h-full flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-marbella-900 mb-2">{t('Core Tuition Fees', '核心学费')}</h3>
                <p className="text-marbella-600 text-sm">{t('Foundational learning options', '基础学习选项')}</p>
              </div>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div className="border-t border-marbella-100 pt-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-marbella-100 flex items-center justify-center mr-3">
                      <span className="text-marbella-700 font-medium text-sm">B</span>
                    </div>
                    <h4 className="font-medium">{t('Beginner (AI Literacy)', '初级（AI素养）')}</h4>
                  </div>
                  <p className="text-sm text-marbella-700 ml-11">{t('12 Weeks - Online + Live Tutoring', '12周 - 在线 + 直播辅导')}</p>
                  <p className="text-marbella-900 font-semibold ml-11 mt-1">$1,500 - $2,000</p>
                </div>
                
                <div className="border-t border-marbella-100 pt-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-marbella-100 flex items-center justify-center mr-3">
                      <span className="text-marbella-700 font-medium text-sm">I</span>
                    </div>
                    <h4 className="font-medium">{t('Intermediate (AI Programming)', '中级（AI编程）')}</h4>
                  </div>
                  <p className="text-sm text-marbella-700 ml-11">{t('16 Weeks - Online + In-Person Workshops', '16周 - 在线 + 线下研讨会')}</p>
                  <p className="text-marbella-900 font-semibold ml-11 mt-1">$3,000 - $4,500</p>
                </div>
                
                <div className="border-t border-marbella-100 pt-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-marbella-100 flex items-center justify-center mr-3">
                      <span className="text-marbella-700 font-medium text-sm">A</span>
                    </div>
                    <h4 className="font-medium">{t('Advanced (AI Research)', '高级（AI研究）')}</h4>
                  </div>
                  <p className="text-sm text-marbella-700 ml-11">{t('20 Weeks - Immersive In-Person + Mentorship', '20周 - 沉浸式线下 + 行业导师指导')}</p>
                  <p className="text-marbella-900 font-semibold ml-11 mt-1">$6,000 - $8,000</p>
                </div>
              </div>
              
              <div className="text-sm text-marbella-600 space-y-2">
                <div className="flex items-start">
                  <Check size={16} className="text-marbella-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p>{t('Early Bird Discount: 10-15% off', '早鸟优惠: 10-15% 折扣')}</p>
                </div>
                <div className="flex items-start">
                  <Check size={16} className="text-marbella-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p>{t('Group Discount: 5-10% off (3+ students)', '团体优惠: 5-10% 折扣 (3+学生)')}</p>
                </div>
              </div>
            </div>
          </AnimatedReveal>

          {/* Premium Services */}
          <AnimatedReveal delay={200}>
            <div className="pricing-card h-full flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-marbella-900 mb-2">{t('Premium Services', '高级服务')}</h3>
                <p className="text-marbella-600 text-sm">{t('Personalized learning experiences', '个性化学习体验')}</p>
              </div>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div className="border-t border-marbella-100 pt-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-marbella-100 flex items-center justify-center mr-3">
                      <span className="text-marbella-700 font-medium text-sm">1:1</span>
                    </div>
                    <h4 className="font-medium">{t('1-on-1 Mentorship', '一对一导师指导')}</h4>
                  </div>
                  <p className="text-sm text-marbella-700 ml-11">{t('AI Experts & University Professors', 'AI专家与大学教授')}</p>
                  <p className="text-marbella-900 font-semibold ml-11 mt-1">{t('$500/hour', '$500/小时')}</p>
                </div>
                
                <div className="border-t border-marbella-100 pt-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-marbella-100 flex items-center justify-center mr-3">
                      <span className="text-marbella-700 font-medium text-sm">AC</span>
                    </div>
                    <h4 className="font-medium">{t('AI Competition Coaching', 'AI竞赛培训')}</h4>
                  </div>
                  <p className="text-sm text-marbella-700 ml-11">{t('Kaggle/Math Olympiad AI Training', 'Kaggle/数学奥赛 AI 训练')}</p>
                  <p className="text-marbella-900 font-semibold ml-11 mt-1">{t('$2,000/10 weeks', '$2,000/10周')}</p>
                </div>
                
                <div className="border-t border-marbella-100 pt-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-marbella-100 flex items-center justify-center mr-3">
                      <span className="text-marbella-700 font-medium text-sm">RP</span>
                    </div>
                    <h4 className="font-medium">{t('AI Research Projects', 'AI研究项目')}</h4>
                  </div>
                  <p className="text-sm text-marbella-700 ml-11">{t('Research & Publication Support', '研究与论文发表支持')}</p>
                  <p className="text-marbella-900 font-semibold ml-11 mt-1">{t('$3,000-$50,000/project', '$3,000-$50,000/项目')}</p>
                </div>
                
                <div className="border-t border-marbella-100 pt-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-marbella-100 flex items-center justify-center mr-3">
                      <span className="text-marbella-700 font-medium text-sm">AC</span>
                    </div>
                    <h4 className="font-medium">{t('Elite College Admission', '顶级大学申请辅导')}</h4>
                  </div>
                  <p className="text-sm text-marbella-700 ml-11">{t('Top 20 University Application Support', '前20名大学申请支持')}</p>
                  <p className="text-marbella-900 font-semibold ml-11 mt-1">{t('$5,000-$50,000/application', '$5,000-$50,000/申请')}</p>
                </div>
              </div>
            </div>
          </AnimatedReveal>

          {/* Corporate Partnerships */}
          <AnimatedReveal delay={300}>
            <div className="pricing-card h-full flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-marbella-900 mb-2">{t('Corporate Partnerships', '企业合作')}</h3>
                <p className="text-marbella-600 text-sm">{t('Industry connections for real-world experience', '行业联系获取真实世界经验')}</p>
              </div>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div className="border-t border-marbella-100 pt-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-marbella-100 flex items-center justify-center mr-3">
                      <span className="text-marbella-700 font-medium text-sm">IP</span>
                    </div>
                    <h4 className="font-medium">{t('Industry AI Projects', '企业AI项目')}</h4>
                  </div>
                  <p className="text-sm text-marbella-700 ml-11">{t('Companies sponsor student projects', '企业赞助学生项目')}</p>
                  <p className="text-marbella-900 font-semibold ml-11 mt-1">{t('$10,000 - $50,000/project', '$10,000 - $50,000/项目')}</p>
                </div>
                
                <div className="border-t border-marbella-100 pt-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-marbella-100 flex items-center justify-center mr-3">
                      <span className="text-marbella-700 font-medium text-sm">SC</span>
                    </div>
                    <h4 className="font-medium">{t('Sponsored AI Classes', '赞助AI课程')}</h4>
                  </div>
                  <p className="text-sm text-marbella-700 ml-11">{t('Company-named AI cohorts', '企业冠名AI课程')}</p>
                  <p className="text-marbella-900 font-semibold ml-11 mt-1">{t('$20,000+/semester', '$20,000+/学期')}</p>
                </div>
                
                <div className="border-t border-marbella-100 pt-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-marbella-100 flex items-center justify-center mr-3">
                      <span className="text-marbella-700 font-medium text-sm">MP</span>
                    </div>
                    <h4 className="font-medium">{t('Mentorship Programs', '导师计划')}</h4>
                  </div>
                  <p className="text-sm text-marbella-700 ml-11">{t('Customized AI talent development', '定制化AI人才发展')}</p>
                  <p className="text-marbella-900 font-semibold ml-11 mt-1">{t('$50,000+/year', '$50,000+/年')}</p>
                </div>
              </div>
              
              <div className="text-sm text-marbella-600 space-y-2">
                <div className="flex items-start">
                  <Check size={16} className="text-marbella-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p>{t('Custom program development for corporations', '为企业定制项目开发')}</p>
                </div>
                <div className="flex items-start">
                  <Check size={16} className="text-marbella-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p>{t('Priority access to student talent pool', '优先获取学生人才库')}</p>
                </div>
              </div>
            </div>
          </AnimatedReveal>

          {/* Scholarships & Financial Aid */}
          <AnimatedReveal delay={400}>
            <div className="pricing-card h-full flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-marbella-900 mb-2">{t('Scholarships & Financial Aid', '奖学金与财务援助')}</h3>
                <p className="text-marbella-600 text-sm">{t('Making AI education accessible', '让AI教育更易获取')}</p>
              </div>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div className="border-t border-marbella-100 pt-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-marbella-100 flex items-center justify-center mr-3">
                      <span className="text-marbella-700 font-medium text-sm">MS</span>
                    </div>
                    <h4 className="font-medium">{t('Merit-Based Scholarships', '基于成绩的奖学金')}</h4>
                  </div>
                  <p className="text-sm text-marbella-700 ml-11">{t('Full or partial tuition coverage', '全额或部分学费覆盖')}</p>
                  <p className="text-marbella-900 font-semibold ml-11 mt-1">{t('Based on qualifications', '基于资质')}</p>
                </div>
                
                <div className="border-t border-marbella-100 pt-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-marbella-100 flex items-center justify-center mr-3">
                      <span className="text-marbella-700 font-medium text-sm">FA</span>
                    </div>
                    <h4 className="font-medium">{t('Need-Based Financial Aid', '基于需求的财务援助')}</h4>
                  </div>
                  <p className="text-sm text-marbella-700 ml-11">{t('Tuition reductions based on family income', '基于家庭收入的学费减免')}</p>
                  <p className="text-marbella-900 font-semibold ml-11 mt-1">{t('Application required', '需要申请')}</p>
                </div>
              </div>
              
              <div className="text-sm text-marbella-600 space-y-2">
                <div className="flex items-start">
                  <Check size={16} className="text-marbella-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p>{t('Funded by corporate partners, alumni, and foundations', '由企业合作伙伴、校友和基金会资助')}</p>
                </div>
                <div className="flex items-start">
                  <Check size={16} className="text-marbella-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p>{t('Dedicated to promoting diversity in AI education', '致力于促进AI教育中的多样性')}</p>
                </div>
                <div className="flex items-start">
                  <Check size={16} className="text-marbella-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p>{t('Ensuring AI literacy is accessible to all qualified students', '确保所有符合条件的学生都能获得AI素养教育')}</p>
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>

        <AnimatedReveal delay={500}>
          <div className="text-center mt-16">
            <a href="#contact" className="button-primary">{t('Discuss Your Options', '讨论您的选择')}</a>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
};

export default PricingSection;
