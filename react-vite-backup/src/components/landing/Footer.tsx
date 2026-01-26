import { Dumbbell, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const footerLinks = {
  Product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Integrations', href: '#' },
    { name: 'API', href: '#' },
  ],
  Company: [
    { name: 'About', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Press', href: '#' },
  ],
  Resources: [
    { name: 'Documentation', href: '#' },
    { name: 'Help Center', href: '#' },
    { name: 'Community', href: '#' },
    { name: 'Webinars', href: '#' },
  ],
  Legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Security', href: '#' },
    { name: 'GDPR', href: '#' },
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
    <footer className="relative bg-black border-t border-white/10 py-20 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 mb-20">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-3 mb-8 group">
              <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-xl shadow-lg transition-transform group-hover:scale-110">
                <Dumbbell className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-normal text-white uppercase tracking-tight">Fitexo</span>
            </a>
            <p className="text-muted-foreground/60 mb-8 max-w-xs font-medium uppercase tracking-tight text-[10px] leading-relaxed">
              The premier gym management software trusted by fitness
              professionals and business owners worldwide.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-primary mb-6 uppercase tracking-[0.2em] text-[10px]">{category}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/40 hover:text-white transition-colors duration-300 font-bold uppercase text-[10px] tracking-widest flex items-center gap-2 group/link"
                    >
                      <div className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground/40 text-[10px] font-bold uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} FITEXO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/40">
            <span>DESIGNED FOR</span>
            <span className="text-primary font-bold">GROWTH</span>
            <span>BY FITNESS EXPERTS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
