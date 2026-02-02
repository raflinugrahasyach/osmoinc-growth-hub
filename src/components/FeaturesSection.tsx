import { motion } from 'framer-motion';
import { Gauge, Cpu, Box, Wifi } from 'lucide-react';

const features = [
  {
    icon: Gauge,
    title: 'Teknologi Osmotik Bertekanan',
    description: 'Menggunakan tekanan 263 bar pada suhu 70°C untuk mempercepat penetrasi garam ke dalam telur.',
    highlight: '263 bar',
    size: 'large',
  },
  {
    icon: Cpu,
    title: 'AI & NIR Sensor',
    description: 'Sensor AS7263 mendeteksi kemasiran telur tanpa memecahkan cangkang (gelombang 610–860 nm).',
    highlight: 'Non-Destructive',
    size: 'medium',
  },
  {
    icon: Box,
    title: 'Kapasitas Besar',
    description: '150 Butir per Batch dalam dimensi ringkas (500x530x565 mm).',
    highlight: '150 Butir',
    size: 'medium',
  },
  {
    icon: Wifi,
    title: 'IoT Integrated',
    description: 'Monitoring suhu dan waktu otomatis via kontroler digital terhubung.',
    highlight: 'Smart Control',
    size: 'small',
  },
];

const FeaturesSection = () => {
  return (
    <section id="keuntungan" className="section-padding bg-secondary">
      <div className="container-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Fitur <span className="text-accent">Unggulan</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Teknologi canggih yang dirancang untuk hasil maksimal
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bento-card md:col-span-2 lg:col-span-2 bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20"
          >
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Gauge className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <div className="inline-block bg-accent/20 text-accent text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {features[0].highlight}
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-foreground mb-2">
                  {features[0].title}
                </h3>
                <p className="text-muted-foreground">
                  {features[0].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* AI Sensor Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bento-card bg-gradient-to-br from-accent/10 to-primary/5 border border-accent/20"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-4">
              <Cpu className="w-7 h-7 text-accent" />
            </div>
            <div className="inline-block bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3">
              {features[1].highlight}
            </div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">
              {features[1].title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {features[1].description}
            </p>
          </motion.div>

          {/* Capacity Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bento-card"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-4">
              <Box className="w-7 h-7 text-primary" />
            </div>
            <div className="inline-block bg-accent/20 text-accent text-xs font-bold px-3 py-1 rounded-full mb-3">
              {features[2].highlight}
            </div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">
              {features[2].title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {features[2].description}
            </p>
          </motion.div>

          {/* IoT Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bento-card md:col-span-2 lg:col-span-1"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-4">
              <Wifi className="w-7 h-7 text-primary" />
            </div>
            <div className="inline-block bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3">
              {features[3].highlight}
            </div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">
              {features[3].title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {features[3].description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
