import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

import logo from '../../assets/icon/Logo.png';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-primary-900/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          <div className="flex-shrink-0 flex items-center">
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')}>
              <img
                src={logo}
                alt="Hills & Blues Logo"
                className="h-20 w-auto object-contain cursor-pointer drop-shadow-md"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                onClick={(e) => handleLinkClick(e, '#home')}
                className="text-white hover:text-primary-200 px-3 py-2 rounded-md text-sm font-medium transition-colors drop-shadow-sm"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => handleLinkClick(e, '#about')}
                className="text-white hover:text-primary-200 px-3 py-2 rounded-md text-sm font-medium transition-colors drop-shadow-sm"
              >
                Story
              </a>
              <a
                href="#cottage"
                onClick={(e) => handleLinkClick(e, '#cottage')}
                className="text-white hover:text-primary-200 px-3 py-2 rounded-md text-sm font-medium transition-colors drop-shadow-sm"
              >
                The Cottage
              </a>
              <a
                href="#experience"
                onClick={(e) => handleLinkClick(e, '#experience')}
                className="text-white hover:text-primary-200 px-3 py-2 rounded-md text-sm font-medium transition-colors drop-shadow-sm"
              >
                Experience
              </a>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-primary-900 px-5 py-2 rounded-small text-sm font-medium transition-all border border-white/30"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="text-white hover:text-primary-200 p-2"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;