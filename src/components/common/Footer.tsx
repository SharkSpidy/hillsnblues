import { Instagram, Facebook } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <span className="font-heading text-2xl text-white font-bold tracking-wider block mb-2">
            Hills & Blues
          </span>
          <p className="text-sm">A quiet escape into the hills.</p>
        </div>
        <div className="flex gap-6 text-sm">
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
        <div className="flex gap-4">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-700 hover:text-white transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-700 hover:text-white transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-neutral-800 text-center text-xs text-neutral-600">
        © 2026 Hills & Blues. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
