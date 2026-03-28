import { Instagram, Facebook } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 border-t border-neutral-800">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        
        {/* Brand */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="font-heading text-2xl text-white font-semibold tracking-wide">
            Hills & Blues
          </h2>
          <p className="text-sm text-neutral-500">
            A quiet escape into the hills.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-8 text-sm">
          <a href="#home" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#cottage" className="hover:text-white transition-colors">
            The Cottage
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>

        {/* Socials */}
        <div className="flex justify-center md:justify-end gap-4">
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-primary-700 hover:text-white transition-all"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-primary-700 hover:text-white transition-all"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-neutral-800"></div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-xs text-neutral-600">
        © {new Date().getFullYear()} Hills & Blues. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;