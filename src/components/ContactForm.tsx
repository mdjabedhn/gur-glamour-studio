import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "ধন্যবাদ! 🎉",
      description: "আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।",
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-2 font-hind">
            যোগাযোগ করুন
          </h2>
          <p className="text-3xl md:text-5xl font-bold text-outline opacity-40 mb-6">
            CONTACT US
          </p>
          <div className="h-1 w-24 gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground">
            আমরা সবসময় আপনার সেবায় প্রস্তুত
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 hover:shadow-[var(--shadow-card)] transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <Phone className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-primary">ফোন</h3>
                  <p className="text-muted-foreground">+880 1818238270</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-[var(--shadow-card)] transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <Mail className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-primary">ইমেইল</h3>
                  <p className="text-muted-foreground">info@khejurergur.com</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-[var(--shadow-card)] transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <MapPin className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-primary">ঠিকানা</h3>
                  <p className="text-muted-foreground">ঢাকা, বাংলাদেশ</p>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="p-8 shadow-[var(--shadow-card)] bg-card/80 backdrop-blur-sm border-primary/20">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input 
                  placeholder="আপনার নাম *"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="border-primary/20 focus:border-primary"
                />
              </div>
              <div>
                <Input 
                  type="tel"
                  placeholder="ফোন নম্বর *"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  className="border-primary/20 focus:border-primary"
                />
              </div>
              <div>
                <Input 
                  type="email"
                  placeholder="ইমেইল"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="border-primary/20 focus:border-primary"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="আপনার বার্তা *"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  rows={5}
                  className="border-primary/20 focus:border-primary"
                />
              </div>
              <Button type="submit" className="w-full gradient-primary text-white shadow-[var(--shadow-glow)] text-lg">
                বার্তা পাঠান 📧
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
