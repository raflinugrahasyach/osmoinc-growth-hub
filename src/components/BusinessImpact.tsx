import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, DollarSign, Clock, Target } from 'lucide-react';

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const Counter = ({ end, suffix = '', prefix = '', duration = 2 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isInView]);

  return (
    <span ref={ref} className="counter-value">
      {prefix}{count}{suffix}
    </span>
  );
};

const metrics = [
  {
    icon: TrendingUp,
    label: 'ROI (Return on Investment)',
    value: 272,
    suffix: '%',
    color: 'primary',
  },
  {
    icon: DollarSign,
    label: 'NPV (Net Present Value)',
    value: 263,
    suffix: ' Juta',
    prefix: 'Rp ',
    color: 'accent',
  },
  {
    icon: Clock,
    label: 'Payback Period',
    value: 1,
    suffix: ' Tahun',
    prefix: '< ',
    color: 'primary',
  },
  {
    icon: Target,
    label: 'BEP (Break Even Point)',
    value: 5,
    suffix: ' Bulan',
    color: 'accent',
  },
];

const BusinessImpact = () => {
  return (
    <section id="profitabilitas" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="organic-shape absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 -z-10" />
      <div className="organic-shape absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 -z-10" style={{ animationDelay: '-3s' }} />

      <div className="container-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Investasi <span className="text-primary">Cerdas</span> untuk UMKM
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Data berdasarkan analisis finansial tim OSMOINC dengan asumsi produksi harian
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bento-card text-center ${
                metric.color === 'accent' 
                  ? 'bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20' 
                  : 'bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20'
              }`}
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                metric.color === 'accent' ? 'bg-accent/20' : 'bg-primary/20'
              }`}>
                <metric.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${
                  metric.color === 'accent' ? 'text-accent' : 'text-primary'
                }`} />
              </div>
              
              <div className={`font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-2 ${
                metric.color === 'accent' ? 'text-accent' : 'text-primary'
              }`}>
                <Counter 
                  end={metric.value} 
                  suffix={metric.suffix} 
                  prefix={metric.prefix}
                />
              </div>
              
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;
