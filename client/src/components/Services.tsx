import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plug, Network, Download, Mail, Wrench, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: Plug,
      title: "Installation de Systèmes Connectés",
      description: "Mise en place de votre environnement numérique : ordinateurs, imprimantes, Wi-Fi, caméras de surveillance, écrans connectés. Tout est configuré et prêt à l'emploi.",
      features: [
        "Configuration postes de travail",
        "Installation imprimantes réseau",
        "Systèmes de surveillance"
      ]
    },
    {
      icon: Network,
      title: "Infrastructure Réseau & Sécurité",
      description: "Création et sécurisation de votre réseau informatique. Internet rapide et fiable, connexions sécurisées, sauvegarde de vos données importantes.",
      features: [
        "Installation routeurs et Wi-Fi",
        "Câblage réseau (RJ45)",
        "Sécurisation et sauvegardes"
      ]
    },
    {
      icon: Download,
      title: "Déploiement de Logiciels",
      description: "Installation et configuration de tous vos logiciels professionnels : Office 365, Google Workspace, logiciels métiers, outils de gestion adaptés à votre activité.",
      features: [
        "Suites bureautiques complètes",
        "Logiciels de gestion CRM",
        "Outils métiers spécialisés"
      ]
    },
    {
      icon: Mail,
      title: "Emails & Hébergement Pro",
      description: "Création de votre identité numérique professionnelle : adresses email à votre nom, site web, nom de domaine. Une image professionnelle assurée.",
      features: [
        "Adresses email personnalisées",
        "Nom de domaine et hébergement",
        "Configuration messagerie sécurisée"
      ]
    },
    {
      icon: Wrench,
      title: "Maintenance et Support",
      description: "Assistance continue pour que votre informatique fonctionne parfaitement. Intervention rapide sur site ou à distance, conseils personnalisés.",
      features: [
        "Support technique 24/7",
        "Interventions sur site",
        "Audits et conseils personnalisés"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">Nos domaines d'expertise</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Des solutions informatiques complètes et accessibles, expliquées simplement pour vous accompagner dans votre transformation numérique.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-50 hover:shadow-xl transition-all duration-300 border border-slate-100 group h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-labtek-navy to-labtek-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-600">
                        <Check className="text-labtek-blue w-5 h-5 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            onClick={scrollToContact}
            className="bg-labtek-navy text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-labtek-blue transition-colors"
            size="lg"
          >
            <Wrench className="mr-3 w-5 h-5" />
            Discutons de votre projet
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
