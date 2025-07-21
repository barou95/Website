import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle, 
  AlertTriangle 
} from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    entreprise: "",
    service: "",
    message: "",
    budget: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xblkdyqn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message envoyé !",
          description: "Nous vous recontacterons dans les plus brefs délais.",
        });
        setFormData({
          prenom: "",
          nom: "",
          email: "",
          telephone: "",
          entreprise: "",
          service: "",
          message: "",
          budget: ""
        });
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email professionnel",
      value: "contact@labtek.fr"
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "06 XX XX XX XX"
    },
    {
      icon: MapPin,
      title: "Zone d'intervention",
      value: "France entière (basé en Essonne)"
    },
    {
      icon: Clock,
      title: "Disponibilité",
      value: "Lun-Ven: 9h-18h\nSupport urgent: 24/7"
    }
  ];

  const commitments = [
    "Réponse sous 24h maximum",
    "Devis gratuit et sans engagement",
    "Conseils personnalisés inclus",
    "Intervention dans toute la France"
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">Parlons de votre projet</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Vous avez un besoin informatique ? Contactez-nous pour un devis gratuit et des conseils personnalisés. Nous vous accompagnons de A à Z.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-50">
              <CardContent className="p-8 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Form Fields */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="prenom" className="text-sm font-semibold text-slate-700 mb-2">
                        Prénom *
                      </Label>
                      <Input
                        id="prenom"
                        name="prenom"
                        required
                        value={formData.prenom}
                        onChange={(e) => handleInputChange("prenom", e.target.value)}
                        placeholder="Votre prénom"
                        className="focus:ring-labtek-blue focus:border-transparent"
                      />
                    </div>
                    <div>
                      <Label htmlFor="nom" className="text-sm font-semibold text-slate-700 mb-2">
                        Nom *
                      </Label>
                      <Input
                        id="nom"
                        name="nom"
                        required
                        value={formData.nom}
                        onChange={(e) => handleInputChange("nom", e.target.value)}
                        placeholder="Votre nom"
                        className="focus:ring-labtek-blue focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-sm font-semibold text-slate-700 mb-2">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="votre@email.fr"
                        className="focus:ring-labtek-blue focus:border-transparent"
                      />
                    </div>
                    <div>
                      <Label htmlFor="telephone" className="text-sm font-semibold text-slate-700 mb-2">
                        Téléphone
                      </Label>
                      <Input
                        id="telephone"
                        name="telephone"
                        type="tel"
                        value={formData.telephone}
                        onChange={(e) => handleInputChange("telephone", e.target.value)}
                        placeholder="06 12 34 56 78"
                        className="focus:ring-labtek-blue focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="entreprise" className="text-sm font-semibold text-slate-700 mb-2">
                      Entreprise / Statut
                    </Label>
                    <Select value={formData.entreprise} onValueChange={(value) => handleInputChange("entreprise", value)}>
                      <SelectTrigger className="focus:ring-labtek-blue focus:border-transparent">
                        <SelectValue placeholder="Sélectionnez votre statut" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="particulier">Particulier</SelectItem>
                        <SelectItem value="micro-entreprise">Micro-entreprise</SelectItem>
                        <SelectItem value="tpe">TPE (1-10 salariés)</SelectItem>
                        <SelectItem value="pme">PME (11-250 salariés)</SelectItem>
                        <SelectItem value="association">Association</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-sm font-semibold text-slate-700 mb-2">
                      Service souhaité
                    </Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger className="focus:ring-labtek-blue focus:border-transparent">
                        <SelectValue placeholder="Choisissez un service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="installation">Installation de systèmes connectés</SelectItem>
                        <SelectItem value="reseau">Infrastructure réseau & sécurité</SelectItem>
                        <SelectItem value="logiciels">Déploiement de logiciels</SelectItem>
                        <SelectItem value="emails">Emails & hébergement pro</SelectItem>
                        <SelectItem value="maintenance">Maintenance et support</SelectItem>
                        <SelectItem value="audit">Audit informatique</SelectItem>
                        <SelectItem value="autre">Autre / Plusieurs services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-semibold text-slate-700 mb-2">
                      Décrivez votre besoin *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Décrivez votre projet, vos besoins informatiques, le nombre de postes concernés, vos contraintes..."
                      className="focus:ring-labtek-blue focus:border-transparent resize-vertical"
                    />
                  </div>

                  <div>
                    <Label htmlFor="budget" className="text-sm font-semibold text-slate-700 mb-2">
                      Budget approximatif (optionnel)
                    </Label>
                    <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger className="focus:ring-labtek-blue focus:border-transparent">
                        <SelectValue placeholder="Sélectionnez une fourchette" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="moins-500">Moins de 500 €</SelectItem>
                        <SelectItem value="500-1500">500 € - 1 500 €</SelectItem>
                        <SelectItem value="1500-5000">1 500 € - 5 000 €</SelectItem>
                        <SelectItem value="5000-10000">5 000 € - 10 000 €</SelectItem>
                        <SelectItem value="plus-10000">Plus de 10 000 €</SelectItem>
                        <SelectItem value="non-defini">Budget non défini</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-labtek-navy text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-labtek-blue transition-colors"
                    size="lg"
                  >
                    <Send className="mr-3 w-5 h-5" />
                    {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                  </Button>

                  {/* Privacy Notice */}
                  <p className="text-sm text-slate-500 text-center leading-relaxed">
                    En soumettant ce formulaire, vous acceptez que vos données soient utilisées pour vous recontacter dans le cadre de votre demande.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <Card className="bg-gradient-to-br from-labtek-navy to-labtek-blue text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-8">Autres moyens de contact</h3>
                
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <div key={method.title} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <method.icon className="text-white w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold">{method.title}</div>
                        <div className="text-blue-100 whitespace-pre-line">{method.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-slate-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Nos engagements</h3>
                
                <div className="space-y-4">
                  {commitments.map((commitment, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
                      <span className="text-slate-700">{commitment}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Alert className="bg-red-50 border-red-200">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              <AlertDescription>
                <div className="mb-4">
                  <h4 className="font-bold text-red-800 mb-2">Urgence informatique ?</h4>
                  <p className="text-red-700 mb-4">
                    Panne critique, sécurité compromise, perte de données ?
                  </p>
                </div>
                <div className="text-center">
                  <Button 
                    className="bg-red-600 text-white hover:bg-red-700"
                    onClick={() => window.open("tel:0612345678")}
                  >
                    <Phone className="mr-2 w-4 h-4" />
                    Ligne d'urgence 24/7
                  </Button>
                </div>
              </AlertDescription>
            </Alert>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
