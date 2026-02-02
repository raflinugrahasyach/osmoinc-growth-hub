import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Quote Card */}
          <div className="bento-card bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 text-center relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-accent flex items-center justify-center">
              <Quote className="w-6 h-6 text-accent-foreground" />
            </div>

            <p className="text-lg sm:text-xl text-foreground leading-relaxed mt-6 mb-6">
              "Alat ini mengubah permainan. Produksi saya meningkat pesat tanpa menunggu berminggu-minggu. 
              <span className="text-primary font-semibold"> Kualitas telur asin juga lebih konsisten dan higienis.</span>"
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="font-heading font-bold text-primary text-xl">NH</span>
              </div>
              <div className="text-left">
                <p className="font-heading font-semibold text-foreground">Bpk. Nur Hidayat</p>
                <p className="text-sm text-muted-foreground">Mitra UMKM Telur Asin</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wide font-medium">
            Didukung & Diakui Oleh
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60">
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                <span className="font-heading font-bold text-xs">GNFI</span>
              </div>
              <span className="font-medium text-sm text-muted-foreground">Good News From Indonesia</span>
            </div>
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                <span className="font-heading font-bold text-xs">ITS</span>
              </div>
              <span className="font-medium text-sm text-muted-foreground">ITS Surabaya</span>
            </div>
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                <span className="font-heading font-bold text-xs">KD</span>
              </div>
              <span className="font-medium text-sm text-muted-foreground">Kemendikbud Ristek</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
