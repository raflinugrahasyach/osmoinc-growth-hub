import { motion } from 'framer-motion';
import { Beaker, ThermometerSun, ScanLine, PackageCheck } from 'lucide-react';

const steps = [
  {
    icon: Beaker,
    step: '01',
    title: 'Perendaman',
    description: 'Larutan Asam Asetat 15% selama 5 menit untuk mempersiapkan cangkang.',
    color: 'primary',
  },
  {
    icon: ThermometerSun,
    step: '02',
    title: 'Inkubasi',
    description: 'Tekanan & Suhu 70°C dalam tangki OSMOINC selama 4 jam.',
    color: 'accent',
  },
  {
    icon: ScanLine,
    step: '03',
    title: 'Scanning',
    description: 'Deteksi kualitas masir dengan Sensor NIR secara otomatis.',
    color: 'primary',
  },
  {
    icon: PackageCheck,
    step: '04',
    title: 'Siap Jual',
    description: 'Telur asin berkualitas premium siap dipasarkan.',
    color: 'accent',
  },
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Cara <span className="text-primary">Kerja</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proses sederhana menghasilkan telur asin berkualitas premium
          </p>
        </motion.div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-accent/30 to-primary/20 -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bento-card h-full relative z-10">
                  {/* Step Number */}
                  <div className={`absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm ${
                    step.color === 'accent' 
                      ? 'bg-accent text-accent-foreground' 
                      : 'bg-primary text-primary-foreground'
                  }`}>
                    {step.step}
                  </div>

                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${
                    step.color === 'accent' ? 'bg-accent/20' : 'bg-primary/20'
                  }`}>
                    <step.icon className={`w-7 h-7 ${
                      step.color === 'accent' ? 'text-accent' : 'text-primary'
                    }`} />
                  </div>

                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
