
import AnimatedReveal from '@/components/AnimatedReveal';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GraduationCap, LightBulb, Brain, Users } from 'lucide-react';

const About = () => {
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
              <span className="chip">About Marbella Education</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-marbella-950 animate-fade-in">
              Our Mission and Vision
            </h1>
            <p className="text-lg md:text-xl text-marbella-700 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              Bridging the AI literacy gap, empowering individuals and communities with knowledge and skills to thrive in an AI-driven world.
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
                <h2 className="text-2xl md:text-3xl font-bold text-marbella-950 mb-6">Our Mission</h2>
                <p className="text-marbella-700 text-lg mb-6">
                  Marbella Education was founded in January 2024 with the mission of bridging the AI literacy gap and empowering individuals in an AI-driven world.
                </p>
                <p className="text-marbella-700 text-lg mb-6">
                  Through our accessible, comprehensive, and engaging educational resources, we are committed to creating a better future for individuals and communities.
                </p>
                <div className="text-marbella-500 text-sm">
                  <p className="mb-4">In Simplified Chinese:</p>
                  <p className="text-lg">
                    Marbella Education 成立于 2024 年 1 月，致力于弥合人工智能素养差距，赋能个人和社区在人工智能驱动的世界中茁壮成长。通过我们易于获取、全面且引人入胜的教育资源，我们致力于为个人和社区创造更美好的未来。
                  </p>
                </div>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={200}>
              <div className="glass-card rounded-2xl p-8 mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-marbella-100 flex items-center justify-center mr-4">
                    <LightBulb className="w-6 h-6 text-marbella-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-marbella-950">Harvard Innovation Lab</h2>
                </div>
                <p className="text-marbella-700 text-lg">
                  Marbella Education is currently incubated at the Harvard Innovation Labs, a vibrant, cross-disciplinary ecosystem that supports Harvard students and select alumni in exploring innovation and entrepreneurship.
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
                Our Focus Areas
              </h2>
              <p className="text-marbella-700 text-lg">
                We're committed to excellence in AI education through these key areas
              </p>
            </div>
          </AnimatedReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedReveal delay={100}>
              <div className="focus-card h-full flex flex-col glass-card p-8 rounded-2xl">
                <div className="w-14 h-14 rounded-full bg-marbella-100 flex items-center justify-center mb-6">
                  <GraduationCap className="w-7 h-7 text-marbella-600" />
                </div>
                <h3 className="text-xl font-bold text-marbella-900 mb-3">Premier AI Education</h3>
                <p className="text-marbella-700 flex-grow">
                  Providing structured, high-quality AI education from foundational concepts to advanced research methodologies.
                </p>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={200}>
              <div className="focus-card h-full flex flex-col glass-card p-8 rounded-2xl">
                <div className="w-14 h-14 rounded-full bg-marbella-100 flex items-center justify-center mb-6">
                  <Brain className="w-7 h-7 text-marbella-600" />
                </div>
                <h3 className="text-xl font-bold text-marbella-900 mb-3">AI Research & Innovation</h3>
                <p className="text-marbella-700 flex-grow">
                  Supporting cutting-edge AI research projects and fostering innovation through hands-on experiential learning.
                </p>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={300}>
              <div className="focus-card h-full flex flex-col glass-card p-8 rounded-2xl">
                <div className="w-14 h-14 rounded-full bg-marbella-100 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-marbella-600" />
                </div>
                <h3 className="text-xl font-bold text-marbella-900 mb-3">Industry Connections</h3>
                <p className="text-marbella-700 flex-grow">
                  Building bridges between students and industry leaders through mentorship, corporate partnerships, and real-world project collaborations.
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
                <span className="chip">Leadership</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-marbella-950 mb-4">
                Our Founder
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
                      alt="Dr. Jason Dou"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-marbella-900 mb-2">Dr. Jason Xiaotian Dou</h3>
                  <p className="text-marbella-600 mb-4">Founder of Marbella Education</p>
                  <p className="text-marbella-700 mb-4">
                    Dr. Jason Xiaotian Dou is the Founder of Marbella Education. The mission of Marbella Education is to bridge the AI literacy gap by providing accessible, comprehensive, and engaging educational resources. It aims to empower individuals and communities with the knowledge and skills to navigate and thrive in an AI-driven world.
                  </p>
                  <p className="text-marbella-700 mb-4">
                    Dr. Dou has been a Postdoc Research Fellow in AI at Harvard. He did a Ph.D. in Computer Engineering at the University of Pittsburgh working on Machine Learning with applications in Healthcare, Biology, Mobile, Finance, Social Science, and Operations. Previously he did his B.S. in Computer Science from Peking University with a Thesis at Carnegie Mellon University. He also did a Master's study in Information Science at Cornell University.
                  </p>
                  <p className="text-marbella-700">
                    For more information about him, please visit <a href="https://jasondou.org" target="_blank" rel="noopener noreferrer" className="text-marbella-500 hover:underline">jasondou.org</a>.
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
