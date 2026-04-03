import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, Verified, Brain, Users, Leaf, History } from 'lucide-react';

export default function Services() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative px-8 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="z-10"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Specialized Care</span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface mb-8 leading-[1.1]">
              Our Clinical <span className="text-primary italic">Services</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-lg mb-10 leading-relaxed">
              We offer a spectrum of evidence-based psychological services designed to foster resilience, optimize performance, and restore mental equilibrium.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-bold text-lg hover:translate-y-[-2px] transition-all duration-300 shadow-xl shadow-primary-container/20">
                Explore Care Paths
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, rotate: 5 }}
            animate={{ opacity: 1, rotate: 3 }}
            className="relative"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl transform transition-transform hover:rotate-0 duration-700">
              <img 
                alt="Clinical Care" 
                className="w-full h-[500px] object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuACkJNdMhg33JJpipxdUWXtwawrN5RBXkugAqm-slBQLTKmlAQi26RaEHajUBMgXl6IMrPl_HmWshwpNeuc5Tl_gX__l3q5LfpBr6MYl3hJ4I0CpT2tRv4D4H6xGZX-sLOHK4IaycmvB7wYRUjFvKFPWnc9oDz-q_OREnA71ZnHWX1Qe-zz4unCZUJu4AxLdM3YI7DGY3yMXiElMpO7J-H3U_aI1Ou3398aQDwAwqCLKEEULbI7iU4OgRne_kWzHbWgUko1LDexNg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-surface-container-lowest p-8 rounded-3xl shadow-xl max-w-xs hidden md:block border border-outline-variant/10">
              <div className="flex items-center gap-4 mb-4">
                <Verified className="text-primary w-8 h-8" />
                <h4 className="font-headline font-bold text-on-surface">Certified Expertise</h4>
              </div>
              <p className="text-sm text-on-surface-variant">Every clinician at Blakmoh holds advanced credentials in evidence-based therapeutic modalities.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Bento Grid */}
      <section className="px-8 py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-headline font-bold text-on-surface mb-6">A Comprehensive Approach to Well-being</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px]">
            {/* Individual Therapy */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="md:col-span-8 md:row-span-2 bg-surface-container-lowest rounded-[2rem] p-10 flex flex-col justify-between group overflow-hidden relative border border-outline-variant/10"
            >
              <div className="z-10">
                <Users className="text-primary w-10 h-10 mb-6 block" />
                <h3 className="text-3xl font-headline font-bold text-on-surface mb-4">Individual Therapy</h3>
                <p className="text-on-surface-variant max-w-md leading-relaxed">Personalized one-on-one sessions focusing on anxiety, depression, trauma recovery, and personal growth using CBT and Mindfulness-based approaches.</p>
                <ul className="mt-8 space-y-3">
                  <li className="flex items-center gap-3 text-on-surface font-medium">
                    <CheckCircle className="text-primary w-5 h-5" />
                    Cognitive Behavioral Therapy (CBT)
                  </li>
                  <li className="flex items-center gap-3 text-on-surface font-medium">
                    <CheckCircle className="text-primary w-5 h-5" />
                    Trauma-Informed Care (EMDR)
                  </li>
                </ul>
              </div>
              <img 
                alt="Therapy Room" 
                className="absolute right-0 bottom-0 w-1/2 h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzbXnLAwe_SYpo-ziFECuhpHYhUXpZD1ZMJs4Sb9ird3NVx2ilWaNYa6o0eJSeGmaJg-ZshU4EK38lmQm-SJb922XO3zIhOlVep_29mXD5Lvh4sM-d4lZ-jglRgd-UF1g32DCxwV8ocn-jk2Fcj_rHQv9DVoa9MD3U7D_DiltVSSQgQlsPeTqV5r_5sq79ofPHuAAd94OYKS2_2eug1aYcywRw9JDryYvO3hv6tTpvWa30kZKRf9weUdEL-4vwrJsc7JyXacS9-w"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Assessments */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="md:col-span-4 md:row-span-2 bg-primary text-white rounded-[2rem] p-10 flex flex-col justify-between"
            >
              <div>
                <Brain className="text-white w-10 h-10 mb-6 block" />
                <h3 className="text-3xl font-headline font-bold mb-4">Diagnostic Assessments</h3>
                <p className="text-white/80 leading-relaxed">Thorough clinical evaluations including ADHD screening, neurocognitive testing, and personality assessments.</p>
              </div>
              <button className="flex items-center gap-2 font-bold text-lg hover:gap-4 transition-all">
                View Battery <ArrowRight className="w-6 h-6" />
              </button>
            </motion.div>

            {/* Corporate Training */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="md:col-span-12 md:row-span-1 bg-surface-container-highest rounded-[2rem] p-10 flex flex-col md:flex-row items-center gap-10"
            >
              <div className="flex-1">
                <Users className="text-primary w-10 h-10 mb-4 block" />
                <h3 className="text-3xl font-headline font-bold text-on-surface mb-2">Corporate & Organizational Training</h3>
                <p className="text-on-surface-variant">Enhancing workplace mental health through leadership workshops, burnout prevention, and resilience training.</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-surface-container-lowest px-6 py-4 rounded-2xl shadow-sm flex flex-col items-center">
                  <span className="text-2xl font-bold text-primary">50+</span>
                  <span className="text-xs text-secondary font-bold uppercase tracking-widest">Partners</span>
                </div>
                <div className="bg-surface-container-lowest px-6 py-4 rounded-2xl shadow-sm flex flex-col items-center">
                  <span className="text-2xl font-bold text-primary">98%</span>
                  <span className="text-xs text-secondary font-bold uppercase tracking-widest">Efficiency</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detail Sections */}
      <section className="py-24 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-20 mb-32">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <img 
                alt="Individual Care" 
                className="rounded-[3rem] shadow-2xl relative z-10 w-full aspect-square object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6Jm3Mgi1yW7V7JOrq33rsycf8olSGQBzwbhbNgptIkhI9cdNJMC4Lx0h9591FM3RQV8ZweMnAHiIIILk_Lnb42dg86mpXuCp5BPYbfD7M-rWNETGP06Ko8K1tphgoixxniXnW_5TvDsd5qRy-t29Nrl80PoPA1Y1mAIiRAi6YO8vBHum0kEewLyb2hLvIlXx1YdHi8QH8I_82pNOc1KT8lT6sMP1NowrojkWBsnxC90BNtJ6f_L9WD29EtCuw0rN03bnOItgXKw"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-headline font-bold text-on-surface mb-6">Evidence-Based <span className="text-primary">Clinical Care</span></h2>
              <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                Our clinical practice is built on the pillar of scientific rigor. We don't just provide a listening ear; we provide structured, outcome-oriented psychological interventions that empower you to take control of your mental landscape.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-surface-container-low h-12 w-12 rounded-xl flex items-center justify-center shrink-0">
                    <Leaf className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface">Mindfulness Integration</h4>
                    <p className="text-sm text-on-surface-variant">Merging traditional clinical therapy with proven mindfulness techniques for holistic healing.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-surface-container-low h-12 w-12 rounded-xl flex items-center justify-center shrink-0">
                    <History className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface">Data-Driven Progress</h4>
                    <p className="text-sm text-on-surface-variant">We utilize progress tracking tools to ensure our interventions are delivering measurable results.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto bg-inverse-surface rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -mr-32 -mt-32"></div>
          <div className="z-10 relative">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-inverse-on-surface mb-6">Ready to prioritize your <span className="text-primary-fixed">mental capital</span>?</h2>
            <p className="text-surface-variant text-lg mb-10 max-w-2xl mx-auto">Take the first step towards professional psychological support. Schedule an initial consultation with our clinical intake team today.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-primary-container text-on-primary-container px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">Schedule Initial Consultation</button>
              <button className="border border-outline-variant/30 text-inverse-on-surface px-10 py-4 rounded-full font-bold hover:bg-white/5 transition-colors">Download Service Guide</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
