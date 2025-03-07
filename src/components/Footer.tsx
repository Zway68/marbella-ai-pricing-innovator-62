
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-marbella-950 text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Marbella<span className="text-marbella-400">AI</span></h3>
            <p className="text-marbella-200 text-sm">
              Bridging the AI literacy gap, empowering individuals and communities with knowledge and skills to thrive in an AI-driven world.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-marbella-200">
              <li><a href="#" className="hover:text-white transition-colors">Beginner AI Literacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Intermediate AI Programming</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Advanced AI Research</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Corporate Partnerships</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-marbella-200">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Mentors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
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
                <span className="block mb-1">WeChat:</span>
                <span className="text-white">JasonDouProfessional</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-marbella-800 pt-8 text-center text-marbella-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Marbella Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
