
import { useState } from 'react';
import AnimatedReveal from './AnimatedReveal';
import { Mail, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real application, you would send this data to your backend
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <AnimatedReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-2">
              <span className="chip">Get In Touch</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-marbella-950 mb-4">
              Contact Us
            </h2>
            <p className="text-marbella-700 text-lg">
              Have questions about our programs or pricing? Reach out to us and we'll be happy to help.
            </p>
          </div>
        </AnimatedReveal>

        <div className="grid gap-12 md:grid-cols-2">
          <AnimatedReveal>
            <div className="glass-card rounded-2xl p-8 h-full">
              <h3 className="text-xl font-bold text-marbella-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-marbella-100 flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-marbella-600" />
                  </div>
                  <div>
                    <p className="text-sm text-marbella-600 mb-1">Phone</p>
                    <p className="text-marbella-900 font-medium">+1 (412) 419-5156</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-marbella-100 flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-marbella-600" />
                  </div>
                  <div>
                    <p className="text-sm text-marbella-600 mb-1">Email</p>
                    <p className="text-marbella-900 font-medium">jason@marbellaai.com</p>
                  </div>
                </div>
                
                <div className="bg-marbella-50 rounded-xl p-6 mt-8">
                  <h4 className="font-medium text-marbella-900 mb-2">WeChat</h4>
                  <p className="text-marbella-700 mb-4">Connect with Dr. Jason Dou on WeChat</p>
                  <p className="text-marbella-900 font-medium">JasonDouProfessional</p>
                </div>
              </div>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={200}>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-marbella-900 mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-marbella-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-marbella-200 focus:ring-2 focus:ring-marbella-400 focus:border-transparent transition-all outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-marbella-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-marbella-200 focus:ring-2 focus:ring-marbella-400 focus:border-transparent transition-all outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-marbella-700 mb-1">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-marbella-200 focus:ring-2 focus:ring-marbella-400 focus:border-transparent transition-all outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-marbella-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-marbella-200 focus:ring-2 focus:ring-marbella-400 focus:border-transparent transition-all outline-none resize-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="button-primary w-full flex items-center justify-center"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 ml-2" />
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
