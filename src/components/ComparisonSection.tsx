import { motion } from 'framer-motion';
import { Clock, AlertTriangle, Zap, CheckCircle, ThermometerSun, Droplets, X, Check } from 'lucide-react';

const conventionalPoints = [
  { icon: Clock, text: 'Waktu 14 Hari' },
  { icon: AlertTriangle, text: 'Rasa tidak seragam' },
  { icon: Droplets, text: 'Higienitas rendah' },
  { icon: ThermometerSun, text: 'Ketergantungan cuaca' },
];

const osmoincePoints = [
  { icon: Zap, text: 'Hanya 5 Jam', highlight: true },
  { icon: CheckCircle, text: 'Tingkat masir terdeteksi (AI)' },
  { icon: Check, text: 'Steril & Higienis' },
  { icon: Check, text: 'Hemat Ruang' },
];

const ComparisonSection = () => {
  return (
    <section id="tentang" className="section-padding bg-background">
      <div className="container-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Mengapa Memilih <span className="text-primary">OSMOINC</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bandingkan metode produksi telur asin konvensional dengan teknologi revolusioner kami
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Conventional Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="comparison-card bento-card border-2 border-destructive/20 bg-destructive/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-destructive/10 flex items-center justify-center">
                <X className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-foreground">Metode Lama</h3>
                <p className="text-sm text-muted-foreground">Konvensional</p>
              </div>
            </div>

            <ul className="space-y-4">
              {conventionalPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <span className="text-foreground/80">{point.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* OSMOINC Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="comparison-card bento-card border-2 border-primary/30 bg-primary/5 relative overflow-hidden"
          >
            {/* Highlight Badge */}
            <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
              REKOMENDASI
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-foreground">Teknologi OSMOINC</h3>
                <p className="text-sm text-muted-foreground">Inovasi Terdepan</p>
              </div>
            </div>

            <ul className="space-y-4">
              {osmoincePoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    point.highlight ? 'bg-accent text-accent-foreground' : 'bg-primary/20'
                  }`}>
                    <point.icon className={`w-5 h-5 ${point.highlight ? '' : 'text-primary'}`} />
                  </div>
                  <span className={`${point.highlight ? 'font-bold text-accent' : 'text-foreground/80'}`}>
                    {point.text}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Efficiency Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 p-4 rounded-2xl bg-primary/10 border border-primary/20"
            >
              <div className="text-sm text-primary font-medium">Peningkatan Efisiensi</div>
              <div className="font-heading font-bold text-3xl text-primary">3000%</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
