import { Dumbbell, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const footerLinks = {
  Product: [
    { name: 'Features', href: '/#features' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Integrations', href: '/product/integrations' },
    { name: 'API', href: '/product/api' },
  ],
  Solutions: [
    { name: 'WhatsApp Automation', href: '/solutions/whatsapp-integrated-gym-software' },
    { name: 'Biometric Access', href: '/solutions/biometric-attendance-system-gyms' },
    { name: 'GST Billing', href: '/solutions/gst-compliant-gym-billing-software' },
    { name: 'Kharagpur Hub', href: '/solutions/gym-management-software-kharagpur' },
  ],
  Locations: [
    { name: 'Inda, Kharagpur', href: '/manage/kharagpur/inda' },
    { name: 'Malancha, Kharagpur', href: '/manage/kharagpur/malancha' },
    { name: 'Nimpura, Kharagpur', href: '/manage/kharagpur/nimpura' },
    { name: 'IIT Area', href: '/manage/kharagpur/iit-area' },
  ],
  Company: [
    { name: 'About', href: '/company/about' },
    { name: 'Careers', href: '/company/careers' },
    { name: 'Blog', href: '/company/blog' },
    { name: 'Privacy', href: '/legal/privacy' },
  ],
};

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 py-16 md:py-24 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 md:gap-16 mb-16 md:mb-20">
          {/* Brand */}
          <div className="col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <a href="/" className="flex items-center gap-4 mb-6 md:mb-8 group">
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden shadow-lg transition-transform group-hover:scale-110">
                <img
                  src="/logo.png"
                  alt="Fitexo Logo"
                  width="48"
                  height="48"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <span className="text-2xl md:text-3xl font-normal text-white uppercase tracking-tight">Fitexo</span>
            </a>
            <p className="text-muted-foreground/70 mb-6 md:mb-8 max-w-xs font-medium uppercase tracking-tight text-[10px] leading-relaxed">
              The premier gym management software trusted by fitness
              professionals and business owners worldwide.
            </p>
            <div className="flex gap-3 md:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 md:w-10 md:h-10 border border-white/10 rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="text-center md:text-left">
              <h4 className="font-bold text-primary mb-6 md:mb-7 uppercase tracking-[0.2em] text-[10px]">{category}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 font-bold uppercase text-[10px] tracking-widest flex items-center justify-center md:justify-start gap-2 group/link"
                    >
                      <div className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity hidden md:block" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center">
          <p className="text-muted-foreground/70 text-[10px] font-bold uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} FITEXO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/70">
            <span>DESIGNED FOR</span>
            <span className="text-primary font-bold">GROWTH</span>
            <span>BY FITNESS EXPERTS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
