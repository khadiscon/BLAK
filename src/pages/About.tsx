import { motion } from 'motion/react';
import { Verified, Users, TrendingUp } from 'lucide-react';

const boardMembers = [
  {
    name: 'Dr Bukola Lawal',
    role: 'Member, Board of Experts',
    credentials: 'Test & Measurement',
    description: 'A respected expert in psychological testing and measurement, contributing clinical precision to all assessment frameworks at Blakmoh.',
    initials: 'BL',
  },
  {
    name: 'Dr Temitope Adeleye',
    role: 'Member, Board of Experts',
    credentials: 'Clinical Psychology',
    description: 'Brings deep clinical expertise to the board, guiding therapeutic protocols and ensuring evidence-based standards across all services.',
    initials: 'TA',
  },
  {
    name: 'Mohammad Ahmed',
    role: 'CEO / Lead Consultant',
    credentials: 'Lead Consultant',
    description: 'Visionary leader driving the strategic direction of BlakMoh Consulting, with a focus on expanding access to quality psychological support across Nigeria.',
    initials: 'MA',
  },
  {
    name: 'Prof D.A Oluwole',
    role: 'Member, Board of Experts',
    credentials: 'Psychological Services',
    description: 'Professor-level expertise in psychological services, providing academic rigor and professional standards to the organization\'s clinical offerings.',
    initials: 'DO',
  },
];

const colors = [
  'bg-green-700',
  'bg-stone-700',
  'bg-green-900',
  'bg-stone-500',
];

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
      {/* Hero Header */}
      <header className="mb-16 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-headline text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-primary mb-6"
        >
          Meet the Board of Expertise.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-on-surface-variant leading-relaxed font-body"
        >
          BlakMoh Consulting (BN3303037) is a learning organization providing tailored solutions to all categories of persons and organizations in need of psychological support services and capacity building solutions.
        </motion.p>
      </header>

      {/* Board Member Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {boardMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative bg-surface-container-lowest rounded-2xl p-6 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(27,28,26,0.08)] border border-outline-variant/10"
          >
            {/* Avatar */}
            <div className={`w-full aspect-[3/4] ${colors[index]} rounded-xl mb-5 flex items-center justify-center overflow-hidden relative`}>
              <span className="text-white text-5xl font-extrabold opacity-30">{member.initials}</span>
              <div className="absolute bottom-3 left-3">
                <span className="bg-white/90 text-stone-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {member.credentials}
                </span>
              </div>
            </div>
            <h3 className="font-headline text-lg font-bold text-on-surface mb-1">{member.name}</h3>
            <p className="text-primary font-semibold text-xs mb-3 uppercase tracking-widest">{member.role}</p>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              {member.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Value Proposition Section */}
      <section className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-xl">
          <img
            alt="Blakmoh team in session"
            className="w-full h-[350px] md:h-[450px] object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOHJAxUIu_Ie6Gk3X8q6HPQcOKfMOLDDUJhygmlsHZ4GzMrodomVwyV-rALL3C2Sv7iEMU5_9lzz7_E7AKNkvH7wQlvHIXnPblZ29uYlpI2Lbl1Xj4Q7UQlF6uzy6pK6xCazUKP3gI9MO5i9R8r3N_-huHaD4vpFqX-6_bD94UB5Wyg7_GwKYKc0jv1xf4hCqrg70HuX7Mv4bWnEujHb51j5IsxqlXS8pj3ljPzwM7EQHrmFuIUCrq3bjg4TKxfVQ7pEvSvfn_wQ"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="lg:col-span-5">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6">Built on Trust, Driven by Data.</h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center flex-shrink-0">
                <Verified className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Clinical Excellence</h4>
                <p className="text-on-surface-variant">Every clinician on our board maintains active practice and stays at the forefront of research.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center flex-shrink-0">
                <Users className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Ethical Leadership</h4>
                <p className="text-on-surface-variant">Transparent governance ensures that patient care always precedes commercial interest.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Continuous Innovation</h4>
                <p className="text-on-surface-variant">Our advisory board identifies and integrates emerging mental health technologies responsibly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
