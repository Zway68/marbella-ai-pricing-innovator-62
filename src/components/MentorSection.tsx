
import AnimatedReveal from './AnimatedReveal';

const mentors = [
  {
    name: "Dr. Jason Dou",
    title: "Founder of Marbella Education",
    bio: "Dr. Jason Xiaotian Dou is the Founder of Marbella Education. He has been a Postdoc Research Fellow in AI at Harvard. He did a Ph.D. in Computer Engineering at the University of Pittsburgh working on Machine Learning with applications in Healthcare, Biology, Mobile, Finance, Social Science, and Operations.",
    imagePlaceholder: "/placeholder.svg"
  },
  {
    name: "Will Haver",
    title: "Marbella Advisor and Mentor",
    bio: "Seasoned Leader and Serial Entrepreneur. Spearheaded the successful creation and growth of two ventures during his tenure at Wake Forest University: Accountable Care Limited Partnership and Haver Limited Partnership, a quantitative hedge fund.",
    imagePlaceholder: "/placeholder.svg"
  },
  {
    name: "Dr. Anna Yushuang Xu",
    title: "Marbella Advisor and Mentor",
    bio: "Dr. Xu is the Founder and CEO of 111sign.com, an innovative AI-empowered design company. She holds an MBA from Harvard Business School. Dr. Xu did undergraduate studies at Peking University Health Science Center and the University of Vienna.",
    imagePlaceholder: "/placeholder.svg"
  },
  {
    name: "Fiona Zhang",
    title: "Marbella Advisor and Mentor",
    bio: "Fiona Zhang is the founder and CEO of AvaPlus, a cutting-edge software AI company that leverages digital avatars to enhance content creation. She is also the co-founder of ZLead, a global incubator based in Shanghai.",
    imagePlaceholder: "/placeholder.svg"
  },
  {
    name: "Xander Wu",
    title: "Marbella Advisor and Mentor",
    bio: "Xander Wu is the fund manager at the Future Foundation, where he focuses on investing in global equities. His extensive experience includes roles at major banks and brokerage firms in China.",
    imagePlaceholder: "/placeholder.svg"
  }
];

const MentorSection = () => {
  return (
    <section id="mentors" className="section-padding bg-white">
      <div className="container mx-auto">
        <AnimatedReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-2">
              <span className="chip">Expert Guidance</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-marbella-950 mb-4">
              Meet Our Mentors
            </h2>
            <p className="text-marbella-700 text-lg">
              Learn from industry leaders and academic experts who are at the forefront of AI innovation and education.
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
                  <p className="text-marbella-500">{mentor.title}</p>
                </div>
                
                <p className="text-marbella-700 text-sm text-center flex-grow">
                  {mentor.bio}
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
