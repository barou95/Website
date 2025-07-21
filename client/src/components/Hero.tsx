import { Button } from "@/components/ui/button";
import { Monitor, Wifi, Shield, Cloud, Wrench, Headphones } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    { icon: Monitor, label: "Postes de travail" },
    { icon: Wifi, label: "Réseaux" },
    { icon: Shield, label: "Sécurité" },
    { icon: Cloud, label: "Cloud" },
    { icon: Wrench, label: "Maintenance" },
    { icon: Headphones, label: "Support" },
  ];

  return (
    <section id="accueil" className="bg-gradient-to-br from-labtek-navy via-labtek-blue to-labtek-light py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Votre partenaire <span className="text-labtek-light">informatique</span> de confiance
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
              Solutions complètes pour particuliers et PME. Installation, maintenance et support informatique sur mesure en France entière.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-white text-labtek-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
                size="lg"
              >
                Demander un devis gratuit
              </Button>
              <Button
                onClick={() => scrollToSection("services")}
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-labtek-navy transition-colors"
                size="lg"
              >
                Découvrir nos services
              </Button>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-labtek-light">24/7</div>
                <div className="text-blue-200">Support disponible</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-labtek-light">France</div>
                <div className="text-blue-200">Interventions nationales</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-labtek-light">+5 ans</div>
                <div className="text-blue-200">D'expertise</div>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:text-right"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-3 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-white/20 rounded-lg p-4 text-center"
                  >
                    <service.icon className="text-white w-8 h-8 mx-auto mb-2" />
                    <div className="text-white text-sm">{service.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
