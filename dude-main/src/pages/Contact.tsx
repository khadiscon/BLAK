import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
      <header className="mb-20 max-w-3xl">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-6"
        >
          Let's Start a <span className="text-primary italic">Conversation</span>.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-on-surface-variant leading-relaxed font-body"
        >
          Whether you're an individual seeking support or an organization looking to transform your culture, our team is ready to listen.
        </motion.p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-7 bg-surface-container-lowest rounded-3xl p-8 md:p-12 shadow-[0_20px_40px_rgba(27,28,26,0.06)] border border-outline-variant/10"
        >
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant uppercase tracking-widest ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-surface-container-low border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-on-surface font-body"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-surface-container-low border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-on-surface font-body"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-on-surface-variant uppercase tracking-widest ml-1">Subject</label>
              <select className="w-full bg-surface-container-low border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-on-surface font-body appearance-none">
                <option>Individual Therapy Inquiry</option>
                <option>Corporate Partnership</option>
                <option>Workshop/Speaking Engagement</option>
                <option>General Inquiry</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-on-surface-variant uppercase tracking-widest ml-1">Message</label>
              <textarea 
                rows={6} 
                placeholder="How can we help you?"
                className="w-full bg-surface-container-low border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-on-surface font-body resize-none"
              ></textarea>
            </div>

            <button className="w-full bg-primary text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-[0.98]">
              Send Message <Send className="w-5 h-5" />
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-12">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-2xl bg-primary-container/10 flex items-center justify-center shrink-0">
                <Mail className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-headline font-bold text-xl text-on-surface mb-1">Email Us</h4>
                <p className="text-on-surface-variant mb-1">General: hello@blakmoh.com</p>
                <p className="text-on-surface-variant">Clinical: intake@blakmoh.com</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-2xl bg-primary-container/10 flex items-center justify-center shrink-0">
                <Phone className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-headline font-bold text-xl text-on-surface mb-1">Call Us</h4>
                <p className="text-on-surface-variant mb-1">Main: +1 (555) 000-0000</p>
                <p className="text-on-surface-variant">Emergency: 988 (US Only)</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-2xl bg-primary-container/10 flex items-center justify-center shrink-0">
                <MapPin className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-headline font-bold text-xl text-on-surface mb-1">Visit Us</h4>
                <p className="text-on-surface-variant">123 Clinical Plaza, Suite 400</p>
                <p className="text-on-surface-variant">Metropolis, NY 10001</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-surface-container-high rounded-3xl p-8 border border-outline-variant/10"
          >
            <div className="flex items-center gap-4 mb-6">
              <Clock className="text-primary w-6 h-6" />
              <h4 className="font-headline font-bold text-xl text-on-surface">Response Times</h4>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-outline-variant/20">
                <span className="text-on-surface-variant">General Inquiries</span>
                <span className="font-bold text-primary">24 Hours</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-outline-variant/20">
                <span className="text-on-surface-variant">Clinical Intake</span>
                <span className="font-bold text-primary">4-6 Hours</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-on-surface-variant">Partnership Proposals</span>
                <span className="font-bold text-primary">48 Hours</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-primary rounded-3xl p-8 text-white flex items-center gap-6"
          >
            <div className="bg-white/20 p-4 rounded-2xl">
              <MessageSquare className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-headline font-bold text-xl mb-1">Live Chat</h4>
              <p className="text-white/80 text-sm">Available Mon-Fri, 9am-5pm EST</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
