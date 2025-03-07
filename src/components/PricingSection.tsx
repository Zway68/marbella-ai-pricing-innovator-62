
import AnimatedReveal from './AnimatedReveal';
import { Check } from 'lucide-react';

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-white to-marbella-50">
      <div className="container mx-auto">
        <AnimatedReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-2">
              <span className="chip">Flexible Options</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-marbella-950 mb-4">
              Hybrid Pricing Model
            </h2>
            <p className="text-marbella-700 text-lg">
              We offer a comprehensive pricing structure designed to provide quality education while ensuring accessibility through various options.
            </p>
          </div>
        </AnimatedReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Core Tuition Fees */}
          <AnimatedReveal delay={100}>
            <div className="pricing-card h-full flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-marbella-900 mb-2">Core Tuition Fees</h3>
                <p className="text-marbella-600 text-sm">Foundational learning options</p>
              </div>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div className="border-t border-marbella-100 pt-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-marbella-100 flex items-center justify-center mr-3">
                      <span className="text-marbella-700 font-medium text-sm">B</span>
                    </div>
                    <h4 className="font-medium">Beginner (AI Literacy)</h4>
                  </div>
                  <p className="text-sm text-marbella-700 ml-11">12 Weeks - Online + Live Tutoring</p>
                  <p className="text-marbella-900 font-semibold ml-11 mt-1">$1,500 - $2,000</p>
                </div>
                
                <div className="border-t border-marbella-100 pt-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-marbella-100 flex items-center justify-center mr-3">
                      <span className="text-marbella-700 font-medium text-sm">I</span>
                    </div>
                    <h4 className="font-medium">Intermediate (AI Programming)</h4>
                  </div>
                  <p className="text-sm text-marbella-700 ml-11">16 Weeks - Online + In-Person Workshops</p>
                  <p className="text-marbella-900 font-semibold ml-11 mt-1">$3,000 - $4,500</p>
                </div>
                
                <div className="border-t border-marbella-100 pt-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-marbella-100 flex items-center justify-center mr-3">
                      <span className="text-marbella-700 font-medium text-sm">A</span>
                    </div>
                    <h4 className="font-medium">Advanced (AI Research)</h4>
                  </div>
                  <p className="text-sm text-marbella-700 ml-11">20 Weeks - Immersive In-Person + Mentorship</p>
                  <p className="text-marbella-900 font-semibold ml-11 mt-1">$6,000 - $8,000</p>
                </div>
              </div>
              
              <div className="text-sm text-marbella-600 space-y-2">
                <div className="flex items-start">
                  <Check size={16} className="text-marbella-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p>Early Bird Discount: 10-15% off</p>
                </div>
                <div className="flex items-start">
                  <Check size={16} className="text-marbella-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p>Group Discount: 5-10% off (3+ students)</p>
                </div>
              </div>
            </div>
          </AnimatedReveal>

          {/* Premium Services */}
          <AnimatedReveal delay={200}>
            <div className="pricing-card h-full flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-marbella-900 mb-2">Premium Services</h3>
                <p className="text-marbella-600 text-sm">Personalized learning experiences</p>
              </div>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div className="border-t border-marbella-100 pt-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-marbella-100 flex items-center justify-center mr-3">
                      <span className="text-marbella-700 font-medium text-sm">1:1</span>
                    </div>
                    <h4 className="font-medium">1-on-1 Mentorship</h4>
                  </div>
                  <p className="text-sm text-marbella-700 ml-11">AI Experts & University Professors</p>
                  <p className="text-marbella-900 font-semibold ml-11 mt-1">$500/hour</p>
                </div>
                
                <div className="border-t border-marbella-100 pt-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-marbella-100 flex items-center justify-center mr-3">
                      <span className="text-marbella-700 font-medium text-sm">AC</span>
                    </div>
                    <h4 className="font-medium">AI Competition Coaching</h4>
                  </div>
                  <p className="text-sm text-marbella-700 ml-11">Kaggle/Math Olympiad AI Training</p>
                  <p className="text-marbella-900 font-semibold ml-11 mt-1">$2,000/10 weeks</p>
                </div>
                
                <div className="border-t border-marbella-100 pt-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-marbella-100 flex items-center justify-center mr-3">
                      <span className="text-marbella-700 font-medium text-sm">RP</span>
                    </div>
                    <h4 className="font-medium">AI Research Projects</h4>
                  </div>
                  <p className="text-sm text-marbella-700 ml-11">Research & Publication Support</p>
                  <p className="text-marbella-900 font-semibold ml-11 mt-1">$3,000-$50,000/project</p>
                </div>
                
                <div className="border-t border-marbella-100 pt-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-marbella-100 flex items-center justify-center mr-3">
                      <span className="text-marbella-700 font-medium text-sm">AC</span>
                    </div>
                    <h4 className="font-medium">Elite College Admission</h4>
                  </div>
                  <p className="text-sm text-marbella-700 ml-11">Top 20 University Application Support</p>
                  <p className="text-marbella-900 font-semibold ml-11 mt-1">$5,000-$50,000/application</p>
                </div>
              </div>
            </div>
          </AnimatedReveal>

          {/* Corporate Partnerships */}
          <AnimatedReveal delay={300}>
            <div className="pricing-card h-full flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-marbella-900 mb-2">Corporate Partnerships</h3>
                <p className="text-marbella-600 text-sm">Industry connections for real-world experience</p>
              </div>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div className="border-t border-marbella-100 pt-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-marbella-100 flex items-center justify-center mr-3">
                      <span className="text-marbella-700 font-medium text-sm">IP</span>
                    </div>
                    <h4 className="font-medium">Industry AI Projects</h4>
                  </div>
                  <p className="text-sm text-marbella-700 ml-11">Companies sponsor student projects</p>
                  <p className="text-marbella-900 font-semibold ml-11 mt-1">$10,000 - $50,000/project</p>
                </div>
                
                <div className="border-t border-marbella-100 pt-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-marbella-100 flex items-center justify-center mr-3">
                      <span className="text-marbella-700 font-medium text-sm">SC</span>
                    </div>
                    <h4 className="font-medium">Sponsored AI Classes</h4>
                  </div>
                  <p className="text-sm text-marbella-700 ml-11">Company-named AI cohorts</p>
                  <p className="text-marbella-900 font-semibold ml-11 mt-1">$20,000+/semester</p>
                </div>
                
                <div className="border-t border-marbella-100 pt-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-marbella-100 flex items-center justify-center mr-3">
                      <span className="text-marbella-700 font-medium text-sm">MP</span>
                    </div>
                    <h4 className="font-medium">Mentorship Programs</h4>
                  </div>
                  <p className="text-sm text-marbella-700 ml-11">Customized AI talent development</p>
                  <p className="text-marbella-900 font-semibold ml-11 mt-1">$50,000+/year</p>
                </div>
              </div>
              
              <div className="text-sm text-marbella-600 space-y-2">
                <div className="flex items-start">
                  <Check size={16} className="text-marbella-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p>Custom program development for corporations</p>
                </div>
                <div className="flex items-start">
                  <Check size={16} className="text-marbella-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p>Priority access to student talent pool</p>
                </div>
              </div>
            </div>
          </AnimatedReveal>

          {/* Scholarships & Financial Aid */}
          <AnimatedReveal delay={400}>
            <div className="pricing-card h-full flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-marbella-900 mb-2">Scholarships & Financial Aid</h3>
                <p className="text-marbella-600 text-sm">Making AI education accessible</p>
              </div>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div className="border-t border-marbella-100 pt-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-marbella-100 flex items-center justify-center mr-3">
                      <span className="text-marbella-700 font-medium text-sm">MS</span>
                    </div>
                    <h4 className="font-medium">Merit-Based Scholarships</h4>
                  </div>
                  <p className="text-sm text-marbella-700 ml-11">Full or partial tuition coverage</p>
                  <p className="text-marbella-900 font-semibold ml-11 mt-1">Based on qualifications</p>
                </div>
                
                <div className="border-t border-marbella-100 pt-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-marbella-100 flex items-center justify-center mr-3">
                      <span className="text-marbella-700 font-medium text-sm">FA</span>
                    </div>
                    <h4 className="font-medium">Need-Based Financial Aid</h4>
                  </div>
                  <p className="text-sm text-marbella-700 ml-11">Tuition reductions based on family income</p>
                  <p className="text-marbella-900 font-semibold ml-11 mt-1">Application required</p>
                </div>
              </div>
              
              <div className="text-sm text-marbella-600 space-y-2">
                <div className="flex items-start">
                  <Check size={16} className="text-marbella-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p>Funded by corporate partners, alumni, and foundations</p>
                </div>
                <div className="flex items-start">
                  <Check size={16} className="text-marbella-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p>Dedicated to promoting diversity in AI education</p>
                </div>
                <div className="flex items-start">
                  <Check size={16} className="text-marbella-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p>Ensuring AI literacy is accessible to all qualified students</p>
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>

        <AnimatedReveal delay={500}>
          <div className="text-center mt-16">
            <a href="#contact" className="button-primary">Discuss Your Options</a>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
};

export default PricingSection;
