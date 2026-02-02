import { motion } from 'framer-motion';
import { Award, ArrowRight, Calculator } from 'lucide-react';
import heroImage from '@/assets/hero-osmoinc.jpg';

const Hero = () => {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-secondary" />
      
      {/* Organic Shape */}
      <div className="organic-shape absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/5" />
      <div className="organic-shape absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-accent/5" style={{ animationDelay: '-4s' }} />

      <div className="container-lg mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
            >
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">Peraih Emas PIMNAS 38 & Terdaftar HKI Desain Industri</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-6"
            >
              Revolusi Produksi Telur Asin:{' '}
              <span className="text-primary">Dari 14 Hari</span>{' '}
              Menjadi{' '}
              <span className="text-accent">5 Jam</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Tingkatkan produktivitas UMKM Anda dengan teknologi Tekanan Osmotik dan AI Sensor NIR. 
              <strong className="text-foreground"> Cepat, Masir, dan Higienis.</strong>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#tentang" className="btn-emerald inline-flex items-center justify-center gap-2">
                Lihat Spesifikasi Alat
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#profitabilitas" className="btn-outline inline-flex items-center justify-center gap-2">
                <Calculator className="w-4 h-4" />
                Hitung Keuntungan
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-medium">
              <img
                src={heroImage}
                alt="OSMOINC - Inkubator Telur Asin Otomatis"
                className="w-full h-auto object-cover"
              />
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-4 right-4 glass-strong rounded-2xl p-4"
              >
                <div className="text-sm text-muted-foreground">Efisiensi Waktu</div>
                <div className="font-heading font-bold text-2xl text-accent">3000%</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
