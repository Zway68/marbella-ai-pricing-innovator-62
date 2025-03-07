
import AnimatedReveal from '@/components/AnimatedReveal';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GraduationCap, Lightbulb, Brain, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-marbella-50 to-white">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-marbella-100/50 blur-3xl" />
          <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-marbella-200/30 blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block mb-2">
              <span className="chip">{t('About Marbella Education', '关于 Marbella Education')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-marbella-950 animate-fade-in">
              {t('Our Mission and Vision', '我们的使命和愿景')}
            </h1>
            <p className="text-lg md:text-xl text-marbella-700 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              {t(
                'Bridging the AI literacy gap, empowering individuals and communities with knowledge and skills to thrive in an AI-driven world.',
                '弥合人工智能素养差距，赋能个人和社区在人工智能驱动的世界中茁壮成长。'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <AnimatedReveal>
              <div className="glass-card rounded-2xl p-8 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-marbella-950 mb-6">{t('Our Mission', '我们的使命')}</h2>
                <p className="text-marbella-700 text-lg mb-6">
                  {t(
                    'Marbella Education was founded in January 2024 with the mission of bridging the AI literacy gap and empowering individuals in an AI-driven world.',
                    'Marbella Education成立于2024年1月，致力于弥合人工智能素养差距，赋能个人和社区在人工智能驱动的世界中茁壮成长。'
                  )}
                </p>
                <p className="text-marbella-700 text-lg mb-6">
                  {t(
                    'Through our accessible, comprehensive, and engaging educational resources, we are committed to creating a better future for individuals and communities.',
                    '通过我们易于获取、全面且引人入胜的教育资源，我们致力于为个人和社区创造更美好的未来。'
                  )}
                </p>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={200}>
              <div className="glass-card rounded-2xl p-8 mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-marbella-100 flex items-center justify-center mr-4">
                    <Lightbulb className="w-6 h-6 text-marbella-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-marbella-950">{t('Harvard Innovation Lab', '哈佛创新实验室')}</h2>
                </div>
                <p className="text-marbella-700 text-lg">
                  {t(
                    'Marbella Education is currently incubated at the Harvard Innovation Labs, a vibrant, cross-disciplinary ecosystem that supports Harvard students and select alumni in exploring innovation and entrepreneurship.',
                    'Marbella Education 目前在哈佛创新实验室孵化，这是一个充满活力的跨学科生态系统，支持哈佛学生和选定的校友探索创新和创业。'
                  )}
                </p>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* Our Focus Areas */}
      <section className="section-padding bg-gradient-to-b from-white to-marbella-50">
        <div className="container mx-auto">
          <AnimatedReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-marbella-950 mb-4">
                {t('Our Focus Areas', '我们的重点领域')}
              </h2>
              <p className="text-marbella-700 text-lg">
                {t("We're committed to excellence in AI education through these key areas", '我们通过以下关键领域致力于人工智能教育的卓越')}
              </p>
            </div>
          </AnimatedReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedReveal delay={100}>
              <div className="focus-card h-full flex flex-col glass-card p-8 rounded-2xl">
                <div className="w-14 h-14 rounded-full bg-marbella-100 flex items-center justify-center mb-6">
                  <GraduationCap className="w-7 h-7 text-marbella-600" />
                </div>
                <h3 className="text-xl font-bold text-marbella-900 mb-3">{t('Premier AI Education', '顶级人工智能教育')}</h3>
                <p className="text-marbella-700 flex-grow">
                  {t(
                    'Providing structured, high-quality AI education from foundational concepts to advanced research methodologies.',
                    '提供从基础概念到高级研究方法的结构化、高质量的人工智能教育。'
                  )}
                </p>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={200}>
              <div className="focus-card h-full flex flex-col glass-card p-8 rounded-2xl">
                <div className="w-14 h-14 rounded-full bg-marbella-100 flex items-center justify-center mb-6">
                  <Brain className="w-7 h-7 text-marbella-600" />
                </div>
                <h3 className="text-xl font-bold text-marbella-900 mb-3">{t('AI Research & Innovation', '人工智能研究与创新')}</h3>
                <p className="text-marbella-700 flex-grow">
                  {t(
                    'Supporting cutting-edge AI research projects and fostering innovation through hands-on experiential learning.',
                    '通过实践体验式学习，支持前沿人工智能研究项目并促进创新。'
                  )}
                </p>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={300}>
              <div className="focus-card h-full flex flex-col glass-card p-8 rounded-2xl">
                <div className="w-14 h-14 rounded-full bg-marbella-100 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-marbella-600" />
                </div>
                <h3 className="text-xl font-bold text-marbella-900 mb-3">{t('Industry Connections', '行业联系')}</h3>
                <p className="text-marbella-700 flex-grow">
                  {t(
                    'Building bridges between students and industry leaders through mentorship, corporate partnerships, and real-world project collaborations.',
                    '通过导师制、企业合作和真实世界的项目合作，在学生和行业领袖之间架起桥梁。'
                  )}
                </p>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <AnimatedReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block mb-2">
                <span className="chip">{t('Leadership', '领导团队')}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-marbella-950 mb-4">
                {t('Our Founder', '我们的创始人')}
              </h2>
            </div>
          </AnimatedReveal>

          <AnimatedReveal>
            <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="w-48 h-48 rounded-full bg-marbella-100 overflow-hidden mx-auto">
                    <img
                      src="/placeholder.svg"
                      alt={t('Dr. Jason Dou', 'Jason Dou 博士')}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-marbella-900 mb-2">Dr. Jason Xiaotian Dou</h3>
                  <p className="text-marbella-600 mb-4">{t('Founder of Marbella Education', 'Marbella Education 创始人')}</p>
                  <p className="text-marbella-700 mb-4">
                    {t(
                      "Dr. Jason Xiaotian Dou is the Founder of Marbella Education. The mission of Marbella Education is to bridge the AI literacy gap by providing accessible, comprehensive, and engaging educational resources. It aims to empower individuals and communities with the knowledge and skills to navigate and thrive in an AI-driven world.",
                      "Jason Xiaotian Dou 博士是 Marbella Education 的创始人。Marbella Education 致力于通过提供可及、全面且有趣的教育资源，弥合人工智能认知差距，赋能个人和社区，帮助他们在人工智能驱动的世界中导航与发展。"
                    )}
                  </p>
                  <p className="text-marbella-700 mb-4">
                    {t(
                      "Dr. Dou has been a Postdoc Research Fellow in AI at Harvard. He did a Ph.D. in Computer Engineering at the University of Pittsburgh working on Machine Learning with applications in Healthcare, Biology, Mobile, Finance, Social Science, and Operations. Previously he did his B.S. in Computer Science from Peking University with a Thesis at Carnegie Mellon University. He also did a Master's study in Information Science at Cornell University.",
                      "Dou 博士曾是哈佛大学的人工智能博士后研究员，在匹兹堡大学完成计算机工程博士学位，研究方向为机器学习在医疗、生物学、移动技术、金融、社会科学和运营中的应用。本科就读于北京大学计算机科学专业，并在卡内基梅隆大学完成本科论文。此外，他在康奈尔大学攻读过信息科学硕士课程。"
                    )}
                  </p>
                  <p className="text-marbella-700">
                    {t(
                      'For more information about him, please visit',
                      '欲了解更多关于他的信息，请访问'
                    )} <a href="https://jasondou.org" target="_blank" rel="noopener noreferrer" className="text-marbella-500 hover:underline">jasondou.org</a>.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
