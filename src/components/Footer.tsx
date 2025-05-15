import { Rocket, Mail, PhoneCall, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary pt-12 pb-6 text-gray-700">
      <div className="container-custom">
        {/* Footer Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Rocket className="h-7 w-7 text-accent mr-2" />
              <span className="font-raleway font-bold text-xl text-gray-900">Venture Nest</span>
            </div>
            <p className="mb-4 text-text-secondary">Where ideas take flight. Connecting innovative startups with visionary investors to create the next generation of world-changing companies.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-accent transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Platform</h3>
            <ul className="space-y-2">
              {[
                'Startups',
                'Investors',
                'Industries',
                'Events & Webinars',
                'Resources',
                'Success Stories',
                'Pitch Competitions'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-text-secondary hover:text-accent transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {[
                'Help Center',
                'Getting Started',
                'Account Verification',
                'Investor Guidelines',
                'Startup Resources',
                'Privacy Policy',
                'Terms of Service'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-text-secondary hover:text-accent transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-text-secondary">123 Innovation Way, San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center">
                <PhoneCall className="h-5 w-5 text-accent mr-2 flex-shrink-0" />
                <a href="tel:+14155550123" className="text-text-secondary hover:text-accent transition-colors">+1 (415) 555-0123</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-accent mr-2 flex-shrink-0" />
                <a href="mailto:hello@venturenest.com" className="text-text-secondary hover:text-accent transition-colors">hello@venturenest.com</a>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-medium text-base mb-2">Subscribe to our newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow p-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-accent"
                />
                <button
                  type="submit"
                  className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-r-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-text-secondary">© {currentYear} Venture Nest. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-sm text-text-secondary hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="text-sm text-text-secondary hover:text-accent transition-colors">Terms</a>
            <a href="#" className="text-sm text-text-secondary hover:text-accent transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;