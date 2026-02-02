import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Syabila Cahya',
    role: 'CEO',
    initials: 'SC',
  },
  {
    name: 'Bob Iron',
    role: 'CTO',
    initials: 'BI',
  },
  {
    name: 'Eka Jauhar',
    role: 'CMO',
    initials: 'EJ',
  },
  {
    name: 'Putu Narantara',
    role: 'COO',
    initials: 'PN',
  },
  {
    name: 'Iyasya Irfadana',
    role: 'CPO',
    initials: 'II',
  },
];

const TeamSection = () => {
  return (
    <section id="tim" className="section-padding bg-secondary">
      <div className="container-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Tim Dibalik <span className="text-primary">Inovasi</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Para inovator muda dari Institut Teknologi Sepuluh Nopember
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative mb-4">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-105 group-hover:shadow-emerald">
                  <span className="font-heading font-bold text-2xl sm:text-3xl text-primary">
                    {member.initials}
                  </span>
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.role}
                </div>
              </div>
              <h3 className="font-heading font-semibold text-foreground">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
