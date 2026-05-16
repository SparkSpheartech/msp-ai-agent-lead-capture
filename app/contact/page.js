import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with SPARKSPHEAR. Schedule a free consultation or message us about your AI automation needs.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <Navbar />
      
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Let's Build Something Powerful</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to transform your business with AI automation? Fill out the form and we'll get back to you within 24 hours.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-900/60 rounded-2xl border border-zinc-800 p-8 md:p-12 mb-12">
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              netlify-honeypot="bot-field"
              action="/contact-success"
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-white placeholder-gray-500"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-white placeholder-gray-500"
                    placeholder="(260) 123-4567"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Business Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-white placeholder-gray-500"
                    placeholder="you@business.com"
                  />
                </div>
                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-gray-300 mb-2">Business Name *</label>
                  <input 
                    type="text" 
                    id="business" 
                    name="business" 
                    required 
                    className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-white placeholder-gray-500"
                    placeholder="Your Business LLC"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">Interested In</label>
                <select 
                  id="service" 
                  name="service" 
                  className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-white"
                >
                  <option value="">Select a service</option>
                  <option value="AI Automation">AI Automation & Workflows</option>
                  <option value="AI Chatbots">Custom AI Chatbots</option>
                  <option value="IT Audit">Master IT Audit</option>
                  <option value="Digital Marketing">AI-Powered Marketing</option>
                  <option value="Web Design">Web Design & Development</option>
                  <option value="Photography">Photography & Videography</option>
                  <option value="Other">Other / General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">How can we help you?</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-white placeholder-gray-500 resize-y"
                  placeholder="Tell us about your current challenges or goals..."
                />
              </div>

              <button 
                type="submit" 
                className="w-full md:w-auto px-10 py-4 bg-primary hover:bg-primary/90 text-black font-bold rounded-lg transition-all duration-200 hover:scale-[1.01] flex items-center justify-center gap-2 text-lg"
              >
                Request a Free Consultation
                <span aria-hidden="true">→</span>
              </button>
            </form>
            
            <p className="text-xs text-gray-500 text-center mt-6">We never share your info. Expect a reply within 24 hours.</p>
          </div>

          {/* Quick Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 border border-zinc-800 rounded-xl bg-zinc-900/30">
              <div className="text-primary mb-2 text-3xl font-bold">(260) 267-0641</div>
              <div className="text-sm text-gray-400">Call or Text</div>
            </div>
            <div className="p-6 border border-zinc-800 rounded-xl bg-zinc-900/30">
              <div className="text-primary mb-2 text-xl font-bold">SPARKSPHEAR4me@gmail.com</div>
              <div className="text-sm text-gray-400">Email Us</div>
            </div>
            <div className="p-6 border border-zinc-800 rounded-xl bg-zinc-900/30">
              <div className="text-primary mb-2">Book a 15-min Call</div>
              <a href="https://calendly.com/sparksphear" target="_blank" className="underline text-sm hover:text-primary transition-colors">Schedule instantly →</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
