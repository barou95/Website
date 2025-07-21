import { Laptop } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    { name: "Installation Systèmes", href: "services" },
    { name: "Infrastructure Réseau", href: "services" },
    { name: "Déploiement Logiciels", href: "services" },
    { name: "Emails & Hébergement", href: "services" },
    { name: "Maintenance & Support", href: "services" }
  ];

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-labtek-navy rounded-lg flex items-center justify-center">
                <Laptop className="text-labtek-blue w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Labtek</h3>
                <p className="text-slate-400">Services Informatiques</p>
              </div>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Votre partenaire informatique de confiance pour accompagner particuliers et PME dans leur transformation numérique. Solutions complètes depuis l'Essonne, interventions partout en France.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-labtek-navy transition-colors"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-labtek-navy transition-colors"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Nos Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <button
                    onClick={() => scrollToSection(service.href)}
                    className="text-slate-300 hover:text-white transition-colors text-left"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="text-slate-300">contact@labtek.fr</div>
              <div className="text-slate-300">06 XX XX XX XX</div>
              <div className="text-slate-300">Essonne, France</div>
              <div className="text-slate-300">Interventions nationales</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm mb-4 md:mb-0">
            © 2024 Labtek. Tous droits réservés. | SIRET: XXX XXX XXX XXXXX
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Confidentialité
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
