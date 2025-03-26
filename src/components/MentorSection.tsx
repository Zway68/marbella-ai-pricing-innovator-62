
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
      zh: "Dr. Jason Xiaotian Dou 是Marbella Education的创始人。他曾是哈佛大学人工智能博士后研究员。他在匹兹堡大学获得计算机工程博士学位，致力于机器学习在医疗、生物、移动、金融、社会科学和运营中的应用研究。"
    },
    image: "/lovable-uploads/99a9c771-b961-43a7-a48a-35e580a4bfb8.png"
  },
  {
    name: "Will Haver",
    title: {
      en: "Marbella Advisor and Mentor",
      zh: "Marbella 顾问和导师"
    },
    bio: {
      en: "Seasoned Leader and Serial Entrepreneur. Spearheaded the successful creation and growth of two ventures during his tenure at Wake Forest University: Accountable Care Limited Partnership and Haver Limited Partnership, a quantitative hedge fund.",
      zh: "Will Haver 是资深领导者和连续创业者。在韦克森林大学任职期间，成功创建并发展了两个企业：Accountable Care有限合伙公司和Haver有限合伙公司，这是一家量化对冲基金。"
    },
    image: "/lovable-uploads/595aac52-df66-4a2e-bf3b-1e925eb3f817.png"
  },
  {
    name: "Dr. Anna Yushuang Xu",
    title: {
      en: "Marbella Advisor and Mentor",
      zh: "Marbella 顾问和导师"
    },
    bio: {
      en: "Dr. Xu is the Founder and CEO of 111sign.com, an innovative AI-empowered design company. She holds an MBA from Harvard Business School. Dr. Xu did undergraduate studies at Peking University Health Science Center and the University of Vienna.",
      zh: "Dr. Anna Yushuang Xu 是111sign.com的创始人兼首席执行官，这是一家创新的AI驱动设计公司。她持有哈佛商学院MBA学位。她在北京大学医学部和维也纳大学完成了本科学习。"
    },
    image: "/lovable-uploads/ee34822a-fa90-420b-b3af-39ce33017be6.png"
  },
  {
    name: "Fiona Zhang",
    title: {
      en: "Marbella Advisor and Mentor",
      zh: "Marbella 顾问和导师"
    },
    bio: {
      en: "Fiona Zhang is the founder and CEO of AvaPlus, a cutting-edge software AI company that leverages digital avatars to enhance content creation. She is also the co-founder of ZLead, a global incubator based in Shanghai.",
      zh: "Fiona Zhang 是AvaPlus的创始人兼CEO，这是一家利用数字化身增强内容创作的前沿软件AI公司。她还是总部位于上海的全球孵化器ZLead的联合创始人。"
    },
    image: "/lovable-uploads/f8ce437c-36a6-4fa2-9e44-cceccf52d9a8.png"
  },
  {
    name: "Xander Wu",
    title: {
      en: "Marbella Advisor and Mentor",
      zh: "Marbella 顾问和导师"
    },
    bio: {
      en: "Xander Wu is the fund manager at the Future Foundation, where he focuses on investing in global equities. His extensive experience includes roles at major banks and brokerage firms in China.",
      zh: "Xander Wu 是未来基金会的基金经理，专注于全球股票投资。他拥有丰富的经验，曾在中国的主要银行和券商担任职务。"
    },
    image: "/lovable-uploads/513e6c63-9692-4919-98f7-b13806a1d698.png"
  },
  {
    name: "Sally Su",
    title: {
      en: "Marbella Advisor and Mentor",
      zh: "Marbella 顾问和导师"
    },
    bio: {
      en: "Sally Su is the Founder and Managing Director of Happy Journey Care Home, the premier network of assisted living facilities in the Sacramento area. With a background in finance, technology and operations, Sally leads the expansion of locations throughout the Sacramento Area, achieving 45% annual growth rate and maintaining 100% customer satisfaction.",
      zh: "Sally Su 是Happy Journey Care Home的创始人兼董事总经理，这是萨克拉门托地区首屈一指的辅助生活设施网络。凭借金融、技术和运营背景，Sally领导着萨克拉门托地区各地点的扩张，实现了45%的年增长率并保持了100%的客户满意度。"
    },
    image: "/lovable-uploads/0744076c-ac86-43ee-9590-37afa5a83813.png"
  },
  {
    name: "Dr. Tianfan Fu",
    title: {
      en: "Marbella Advisor and Mentor",
      zh: "Marbella 顾问和导师"
    },
    bio: {
      en: "Dr. Tianfan Fu is an associate professor at Computer Science Department, Nanjing University. Before that, he was a tenure-track assistant professor at Rensselaer Polytechnic Institute (RPI). He received his Ph.D. from Georgia Institute of Technology, and his B.S. and M.S. from Shanghai Jiao Tong University. His research focuses on machine learning for drug discovery and clinical trials, with publications in leading AI conferences and journals including NeurIPS, ICLR, Nature, and Cell Patterns.",
      zh: "Dr. Tianfan Fu 是南京大学计算机科学系副教授。在此之前，他是伦斯勒理工学院(RPI)计算机科学系的终身轨道助理教授。他于2023年在佐治亚理工学院获得计算科学与工程系博士学位，并分别于2015年和2018年在上海交通大学获得计算机科学与工程系学士和硕士学位。他的研究兴趣在于药物发现和临床试验的机器学习，特别是在小分子和大分子药物设计的生成模型以及临床试验的深度表示学习方面。他的研究成果发表在NeurIPS、ICLR、Nature、Cell Patterns等顶级期刊和会议上。"
    },
    image: "/placeholder.svg"
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
                      src={mentor.image}
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
