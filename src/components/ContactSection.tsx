import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, User } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-secondary relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_65%,transparent_110%)] opacity-15" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6 animate-fade-in">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Ready to find your perfect property? Contact our expert team today
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info & Map */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Phone className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl mb-2 text-primary">Phone</h3>
                    <p className="text-muted-foreground text-lg">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Mail className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl mb-2 text-primary">Email</h3>
                    <p className="text-muted-foreground text-lg">info@luxeestate.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <MapPin className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl mb-2 text-primary">Office</h3>
                    <p className="text-muted-foreground text-lg">
                      123 Luxury Avenue<br />
                      Beverly Hills, CA 90210
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Google Maps */}
              <div className="rounded-3xl overflow-hidden border border-border/50 h-[350px] shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-premium)] transition-shadow duration-500">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.3287964933396!2d-118.40193!3d34.06991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bbfea5709df5%3A0x8c21c7e7b5ac0f3c!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LuxeEstate Office Location"
                />
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-card/60 backdrop-blur-md rounded-3xl p-8 shadow-[var(--shadow-elegant)] border border-border/60 animate-scale-in hover:shadow-[var(--shadow-premium)] transition-shadow duration-500">
              <h3 className="font-display text-3xl font-bold text-primary mb-6">Send Us a Message</h3>
              <form className="space-y-5">
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-muted-foreground/70">
                    <User className="w-4 h-4" />
                  </span>
                  <Input
                    placeholder="Your Name"
                    className="bg-background border-border/50 h-12 pl-11 focus:border-accent focus:ring-accent/20 transition-all duration-300 text-base"
                  />
                </div>
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-muted-foreground/70">
                    <Mail className="w-4 h-4" />
                  </span>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-background border-border/50 h-12 pl-11 focus:border-accent focus:ring-accent/20 transition-all duration-300 text-base"
                  />
                </div>
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-muted-foreground/70">
                    <Phone className="w-4 h-4" />
                  </span>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    className="bg-background border-border/50 h-12 pl-11 focus:border-accent focus:ring-accent/20 transition-all duration-300 text-base"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={6}
                    className="bg-background border-border/50 focus:border-accent focus:ring-accent/20 transition-all duration-300 resize-none text-base"
                  />
                </div>
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground h-14 text-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 hover:scale-[1.02]"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
