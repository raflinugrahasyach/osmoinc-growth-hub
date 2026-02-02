import { motion } from 'framer-motion';
import { Egg, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="kontak" className="bg-foreground text-primary-foreground section-padding">
      <div className="container-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12"
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center">
                <Egg className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-xl text-primary-foreground">OSMOINC</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Revolusi produksi telur asin dengan teknologi tekanan osmotik dan AI sensor NIR. 
              Cepat, Masir, dan Higienis.
            </p>
            <a href="#kontak" className="btn-amber inline-block text-sm">
              Pre-Order Sekarang
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Navigasi</h4>
            <ul className="space-y-3">
              <li>
                <a href="#beranda" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#tentang" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                  Tentang Alat
                </a>
              </li>
              <li>
                <a href="#keuntungan" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                  Keuntungan
                </a>
              </li>
              <li>
                <a href="#profitabilitas" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                  Profitabilitas
                </a>
              </li>
              <li>
                <a href="#tim" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                  Tim
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Institut Teknologi Sepuluh Nopember, Surabaya, Jawa Timur
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@osmoinc.id" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                  info@osmoinc.id
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+6281234567890" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                  +62 812 3456 7890
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © 2026 OSMOINC. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-primary-foreground/50 text-xs">
                Peraih Emas PIMNAS 38
              </span>
              <span className="text-primary-foreground/30">•</span>
              <span className="text-primary-foreground/50 text-xs">
                HKI Desain Industri
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
