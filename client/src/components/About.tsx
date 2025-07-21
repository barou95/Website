import { Card, CardContent } from "@/components/ui/card";
import { Bus, Handshake, MapPin, Clock, Server, Laptop, Smartphone, Printer } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const values = [
    {
      icon: Bus,
      title: "Expertise Certifiée",
      description: "Ingénieur diplômé avec plusieurs années d'expérience en entreprise"
    },
    {
      icon: Handshake,
      title: "Approche Humaine",
      description: "Explications claires et accompagnement personnalisé"
    },
    {
      icon: MapPin,
      title: "Couverture Nationale",
      description: "Interventions dans toute la France depuis l'Essonne"
    },
    {
      icon: Clock,
      title: "Réactivité",
      description: "Support rapide et interventions dans les meilleurs délais"
    }
  ];

  const devices = [
    { icon: Laptop, label: "Ordinateurs" },
    { icon: Smartphone, label: "Mobiles" },
    { icon: Printer, label: "Imprimantes" }
  ];

  return (
    <section id="apropos" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">À propos de Labtek</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">Labtek</strong> est une micro-entreprise spécialisée dans les services informatiques, née de la passion pour la technologie et du désir d'accompagner particuliers et entreprises dans leur quotidien numérique.
              </p>
              <p>
                Fondée par un <strong className="text-labtek-navy">ingénieur réseaux et systèmes</strong> expérimenté, Labtek apporte une expertise technique pointue avec une approche humaine et accessible. Nous traduisons la complexité technique en solutions simples et efficaces.
              </p>
              <p>
                Basés dans l'<strong className="text-labtek-navy">Essonne</strong>, nous intervenons sur tout le territoire français, combinant interventions sur site et support à distance pour vous offrir une assistance complète et réactive.
              </p>
            </div>

            {/* Key Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-labtek-navy rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{value.title}</h3>
                    <p className="text-slate-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* About Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:text-center"
          >
            <Card className="bg-white shadow-lg border border-slate-200">
              <CardContent className="p-8">
                <div className="mb-8">
                  {/* Network diagram visualization */}
                  <div className="relative">
                    {/* Central hub */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="w-20 h-20 bg-gradient-to-br from-labtek-navy to-labtek-blue rounded-full flex items-center justify-center mx-auto mb-8"
                    >
                      <Server className="text-white w-10 h-10" />
                    </motion.div>
                    
                    {/* Connected devices */}
                    <div className="grid grid-cols-3 gap-6">
                      {devices.map((device, index) => (
                        <motion.div
                          key={device.label}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                          viewport={{ once: true }}
                          className="text-center"
                        >
                          <div className="w-14 h-14 bg-labtek-light rounded-lg flex items-center justify-center mx-auto mb-2">
                            <device.icon className="text-white w-6 h-6" />
                          </div>
                          <p className="text-sm text-slate-600">{device.label}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Connection lines (decorative) */}
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-px h-8 bg-slate-300"></div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-labtek-navy">100+</div>
                    <div className="text-slate-600 text-sm">Interventions réalisées</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-labtek-navy">24h</div>
                    <div className="text-slate-600 text-sm">Délai de réponse moyen</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-6 inline-flex items-center bg-labtek-navy text-white px-6 py-3 rounded-full"
            >
              <MapPin className="mr-2 w-5 h-5" />
              <span className="font-semibold">Basé en Essonne, France</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
