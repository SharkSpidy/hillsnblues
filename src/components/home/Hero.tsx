import hillsImage from '../../assets/images/Title.jpeg';

function Hero() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-end justify-center pb-24 md:pb-10 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={hillsImage}
          alt="Hills Peerumedu"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/40 via-neutral-900/20 to-neutral-900/60"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto fade-in-up">
        <p className="text-2xl md:text-3xl lg:text-4xl text-neutral-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
          <span className="italic font-medium">
            Welcome To Serenity In The Hills
          </span>
        <span className="block text-primary-100 text-sm md:text-base uppercase tracking-[0.2em] mb-4 font-medium">
          Peerumedu, Kerala
        </span>
        </p>
        {/* <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-lg">
          Welcome To Serenity in <br />
          <span className="italic font-light">the Hills</span>
        </h1> */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="bg-white text-primary-900 hover:bg-primary-50 px-8 py-4 rounded-small font-medium transition-all shadow-lg transform hover:-translate-y-1"
          >
            Book Your Stay
          </a>
          <a
            href="#cottage"
            onClick={(e) => handleLinkClick(e, '#cottage')}
            className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-4 rounded-small font-medium transition-all backdrop-blur-sm"
          >
            Explore the Cottage
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
