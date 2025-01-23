import { MapPin, Send } from 'lucide-react';
import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const token = recaptchaRef.current?.getValue();
    if (!token) {
      alert('Please complete the CAPTCHA');
      return;
    }

    console.log('Form submitted:', formData);
    // Reset form and reCAPTCHA
    setFormData({ name: '', email: '', message: '' });
    recaptchaRef.current?.reset();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-primary-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-radial from-accent-purple/5 via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 relative inline-block">
          Get in Touch
          <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink"></div>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-primary-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-primary-700/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-white 
                           focus:ring-2 focus:ring-accent-purple focus:border-transparent transition-all
                           placeholder:text-gray-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-white 
                           focus:ring-2 focus:ring-accent-purple focus:border-transparent transition-all
                           placeholder:text-gray-500"
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-white 
                           focus:ring-2 focus:ring-accent-purple focus:border-transparent transition-all
                           placeholder:text-gray-500 resize-none"
                  placeholder="Your message here..."
                  required
                />
              </div>

              <div className="flex justify-center mb-4">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="YOUR_RECAPTCHA_SITE_KEY"
                  theme="dark"
                />
              </div>
              
              <button
                type="submit"
                className="group relative w-full bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink text-white px-6 py-3 rounded-lg
                         overflow-hidden transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 
                         focus:ring-accent-purple focus:ring-offset-2 focus:ring-offset-primary-900"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent-pink via-accent-purple to-accent-cyan opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-2">
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-primary-900/50 backdrop-blur-sm p-6 rounded-xl border border-primary-700/50 
                          transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent-purple/10 rounded-lg">
                  <MapPin className="text-accent-purple" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-medium">Location</h3>
                  <p className="text-gray-400">Northern Virginia Area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}