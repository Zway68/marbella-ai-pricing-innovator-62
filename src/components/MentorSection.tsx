
import AnimatedReveal from './AnimatedReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const mentors = [
  {
    name: "Dr. Jason Dou",
    title: {
      en: "Founder of Marbella Education",
      zh: "Marbella Education 创始人"
    },
    bio: {
      en: "Dr. Jason Xiaotian Dou is the Founder of Marbella Education. He has been a Postdoc Research Fellow in AI at Harvard. He did a Ph.D. in Computer Engineering at the University of Pittsburgh working on Machine Learning with applications in Healthcare, Biology, Mobile, Finance, Social Science, and Operations.",
      zh: "杜晓天博士是Marbella Education的创始人。他曾是哈佛大学人工智能博士后研究员。他在匹兹堡大学获得计算机工程博士学位，致力于机器学习在医疗、生物、移动、金融、社会科学和运营中的应用研究。"
    },
    imagePlaceholder: "/placeholder.svg"
  },
  {
    name: "Will Haver",
    title: {
      en: "Marbella Advisor and Mentor",
      zh: "Marbella 顾问和导师"
    },
    bio: {
      en: "Seasoned Leader and Serial Entrepreneur. Spearheaded the successful creation and growth of two ventures during his tenure at Wake Forest University: Accountable Care Limited Partnership and Haver Limited Partnership, a quantitative hedge fund.",
      zh: "资深领导者和连续创业者。在韦克森林大学任职期间，成功创建并发展了两个企业：Accountable Care有限合伙公司和Haver有限合伙公司，这是一家量化对冲基金。"
    },
    imagePlaceholder: "/placeholder.svg"
  },
  {
    name: "Dr. Anna Yushuang Xu",
    title: {
      en: "Marbella Advisor and Mentor",
      zh: "Marbella 顾问和导师"
    },
    bio: {
      en: "Dr. Xu is the Founder and CEO of 111sign.com, an innovative AI-empowered design company. She holds an MBA from Harvard Business School. Dr. Xu did undergraduate studies at Peking University Health Science Center and the University of Vienna.",
      zh: "徐玉双博士是111sign.com的创始人兼首席执行官，这是一家创新的AI驱动设计公司。她持有哈佛商学院MBA学位。徐博士在北京大学医学部和维也纳大学完成了本科学习。"
    },
    imagePlaceholder: "/placeholder.svg"
  },
  {
    name: "Fiona Zhang",
    title: {
      en: "Marbella Advisor and Mentor",
      zh: "Marbella 顾问和导师"
    },
    bio: {
      en: "Fiona Zhang is the founder and CEO of AvaPlus, a cutting-edge software AI company that leverages digital avatars to enhance content creation. She is also the co-founder of ZLead, a global incubator based in Shanghai.",
      zh: "张飞娜是AvaPlus的创始人兼CEO，这是一家利用数字化身增强内容创作的前沿软件AI公司。她还是总部位于上海的全球孵化器ZLead的联合创始人。"
    },
    imagePlaceholder: "/placeholder.svg"
  },
  {
    name: "Xander Wu",
    title: {
      en: "Marbella Advisor and Mentor",
      zh: "Marbella 顾问和导师"
    },
    bio: {
      en: "Xander Wu is the fund manager at the Future Foundation, where he focuses on investing in global equities. His extensive experience includes roles at major banks and brokerage firms in China.",
      zh: "吴亚山是未来基金会的基金经理，专注于全球股票投资。他拥有丰富的经验，曾在中国的主要银行和券商担任职务。"
    },
    imagePlaceholder: "/placeholder.svg"
  }
];

const MentorSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="mentors" className="section-padding bg-white">
      <div className="container mx-auto">
        <AnimatedReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-2">
              <span className="chip">{t('Expert Guidance', '专家指导')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-marbella-950 mb-4">
              {t('Meet Our Mentors', '认识我们的导师')}
            </h2>
            <p className="text-marbella-700 text-lg">
              {t('Learn from industry leaders and academic experts who are at the forefront of AI innovation and education.', 
                '向处于AI创新和教育前沿的行业领导者和学术专家学习。')}
            </p>
          </div>
        </AnimatedReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mentors.map((mentor, index) => (
            <AnimatedReveal key={index} delay={100 * index}>
              <div className="mentor-card h-full flex flex-col">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-marbella-100 overflow-hidden flex items-center justify-center">
                    <img
                      src={mentor.imagePlaceholder}
                      alt={mentor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-marbella-900">{mentor.name}</h3>
                  <p className="text-marbella-500">{language === 'en' ? mentor.title.en : mentor.title.zh}</p>
                </div>
                
                <p className="text-marbella-700 text-sm text-center flex-grow">
                  {language === 'en' ? mentor.bio.en : mentor.bio.zh}
                </p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
