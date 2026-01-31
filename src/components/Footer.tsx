import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
const quickLinks = [
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Success Stories", path: "#" },
  { label: "Blog", path: "#" },
  { label: "Contact", path: "/contact" },
];
export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
<img
  src="/image.png"
  alt="Career4S Logo"
  className="h-20 lg:h-24 w-auto object-contain transition-transform duration-300 hover:scale-105"
/>

            <p className="text-background/70 mb-6 leading-relaxed">
              Empowering students to achieve their academic and career dreams through expert guidance and personalized counseling.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/career4s/about/ " className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/Career4sdotcom?t=2M8_XpQURjNLOuZjqiAp2Q&s=09" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/career4s-private-limited/" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/career4s?igsh=MTZvdXAxd2MybHlkaQ==" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
   <div>
  <h3 className="font-display font-semibold text-lg mb-6">Quick Links</h3>
  <ul className="space-y-3">
    {quickLinks.map((link) => (
      <li key={link.path}>
        <Link
          to={link.path}
          className="text-background/70 hover:text-primary transition-colors"
        >
          {link.label}
        </Link>
      </li>
    ))}
  </ul>
</div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {["Admissions India ", "Admissions Abroad", "Online education", "Distance education"].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-background/70 hover:text-primary transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-background/70">
                Delhi Branch: 119, first floor Dlf Tower - A Jasola Delhi
            

                </span>
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-background/70">
                Faridabad Branch:  Block E/1 - 58 Sec-11, Near YMCA University, Faridabad-121006(HR)
                
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+919876543210" className="text-background/70 hover:text-primary transition-colors">
                  +91 9650831008
                </a>
              </li>
              <li className="flex items-center gap-3">
                {/* <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@career4s.com" className="text-background/70 hover:text-primary transition-colors">
                  info@career4s.com
                </a> */}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Career 4S Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/50 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/50 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
