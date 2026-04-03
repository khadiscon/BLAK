import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, Heart, BookOpen } from 'lucide-react';

const services = [
  {
    title: 'Psychological Services',
    description: 'We provide counseling, therapy, and assessments for personal growth.',
    icon: Heart,
  },
  {
    title: 'Learning & Development Services',
    description: 'We deliver training and development for lasting professional impact.',
    icon: BookOpen,
  },
];

const stats = [
  { value: '3k+', label: 'Counselling Hours', description: 'Accessible counselling hours for timely emotional support.' },
  { value: '25+', label: 'Partners & Affiliations', description: 'Building impact through strategic partners and affiliations.' },
  { value: '8+', label: 'Experienced Years', description: 'Years supporting mental health and personal growth.' },
  { value: '15K+', label: 'Clients Helped', description: 'Guided clients toward better workplace wellbeing.' },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative px-6 md:px-8 py-16 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container/10 text-primary font-semibold text-sm mb-6 uppercase tracking-wider">
              Psychological Excellence
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] text-on-surface mb-6 tracking-tighter">
              Let's Build the Future of Work Together
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
              BlakMoh Consulting is a learning organization that provides tailored solutions to individuals and organizations in need of psychological support and capacity-building services.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-primary-container text-on-primary-container rounded-full font-bold text-lg hover:translate-y-[-1px] transition-all duration-300 shadow-md">
                Explore Services
              </button>
              <button className="px-8 py-4 bg-transparent text-primary border-2 border-primary/20 hover:border-primary rounded-full font-bold text-lg transition-all duration-300">
                Our Methodology
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
              <img
                alt="Professional collaborative meeting"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeYjE3louE7z7Bk7t4P3ZAZDcaJl54oTu69s1DkkkHU4M0O7me6BrvMw5_7G2V_vJKGx3tACjazQV-quiZYMfM8vfYiK_t45FR7YVEkET86yJWKEUvUj_QR9-UCADaycdpLRAEvJwC1RH_ryQIcBYnRI5LQ7SwpG1aVatGDsG2cY9CMyy2dB6Am6NerQNuJczQoXNFOAyD2araTcuIaYmIMjLSx_s3NkTZKrG9pcUqKfSEck_SSXrN0eirLrfV2vu0NHcjPuMFQQ"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 left-2 md:-left-6 bg-surface-container-lowest p-5 md:p-8 rounded-3xl shadow-xl max-w-[180px] md:max-w-xs border border-outline-variant/15">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="text-primary w-5 h-5 shrink-0" />
                <span className="font-bold text-sm md:text-base">98% Success Rate</span>
              </div>
              <p className="text-xs text-secondary">Consistent positive impact reported across our wellbeing programs.</p>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-primary-container/5 to-transparent rounded-bl-[10rem]"></div>
      </section>

      {/* Services Section */}
      <section className="px-6 md:px-8 py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-bold uppercase tracking-widest text-sm block mb-3">Start Your Journey to Well-Being</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-on-surface">We Support Your Journey to Better Wellbeing</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-base md:text-lg">
              Blakmoh delivers support and development services empowering individuals and organizations to achieve meaningful growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -5 }}
                  className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-outline-variant/5"
                >
                  <div className="w-14 h-14 bg-primary-container/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-6">{service.description}</p>
                  <a href="#" className="text-primary font-bold flex items-center gap-2 group">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 md:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-video">
              <img
                alt="Mental health support session"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy0F0Aexp2FqsGwfyFxHH-ZQFt1JXYKO_oz5SOfRXwtP5l80HY8EV99gLL0mco5dxHA9w2AtgfnUhauqnGNFGqRp8uJNSTNyZJKgdB6ij22zw0Kp56nnVgGZTpalaIEFT6EKtKfFzkCAtmmAIemhib9vJ-vxanu9OsjsOnWDwliTPaO0SQRVh0oSa5dwy2ELvycPrJ9nJP82cQKmSx3CT3yIvggnI1i0L8npaU3oYGY3ELrY0p0O4x-I86DTjtB5inX_xVY7UG6A"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-on-surface">We support your path to mental growth.</h2>
              <p className="text-on-surface-variant text-base md:text-lg mb-6">
                BlakMoh Consulting (BN3303037) is a learning organization providing tailored solutions to all categories of persons and organizations in need of psychological support services and capacity building solutions.
              </p>
              <button className="px-8 py-4 bg-on-surface text-surface rounded-full font-bold hover:opacity-90 transition-opacity">
                Book a Consultation
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface-container-low p-5 md:p-6 rounded-[1.5rem] border border-outline-variant/10"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-primary mb-1">{stat.value}</div>
                <div className="font-bold text-on-surface text-sm mb-2">{stat.label}</div>
                <p className="text-on-surface-variant text-xs leading-relaxed hidden sm:block">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="px-6 md:px-8 py-20">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-on-surface p-10 md:p-16 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter text-white">
                Get psychological insights with Blakmoh today!
              </h2>
              <p className="text-surface-variant/80 text-base md:text-lg mb-2">
                Stay updated with our latest insights, courses, and wellbeing resources.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/50 rounded-full px-6 py-4 outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-bold whitespace-nowrap hover:opacity-90 transition-opacity">
                Get Started
              </button>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary-container/20 blur-[100px] rounded-full"></div>
        </div>
      </section>
    </div>
  );
}
