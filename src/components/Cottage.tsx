import { BedDouble, Bath, Armchair, CookingPot } from 'lucide-react';
import cottageFront from '../assets/images/Cottage_Front.jpeg';
import cottageporch from '../assets/images/Cottage_Porch.jpeg';

function Cottage() {
  return (
    <section id="cottage" className="py-20 bg-primary-900 text-white relative overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}
      ></div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">
            The Cottage - Comfort Meets Simplicity
          </h2>
          <p className="text-primary-100 font-light">
            Our thoughtfully designed cottage features:
          </p>
        </div>

        {/* ================= IMAGES ================= */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 mb-12">

          <div className="relative h-[250px] md:h-[350px] rounded-large overflow-hidden group">
            <img
              src={cottageporch}
              alt="Cottage Front"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="relative h-[250px] md:h-[350px] rounded-large overflow-hidden group">
            <img
              src={cottageFront}
              alt="Cottage Porch"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

        </div>

        {/* ================= DIVIDER ================= */}
        <div className="w-full h-px bg-white/10 mb-10"></div>

        {/* ================= FEATURES ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">

          <div className="glass-dark p-5 rounded-large">
            <BedDouble className="mb-2 text-secondary-300" />
            <h3 className="font-heading text-lg">Two Cozy Bedrooms</h3>
            <p className="text-xs text-primary-200">
              Spacious rooms with plantation views
            </p>
          </div>

          <div className="glass-dark p-5 rounded-large">
            <Bath className="mb-2 text-secondary-300" />
            <h3 className="font-heading text-lg">Modern Bathroom</h3>
            <p className="text-xs text-primary-200">
              Clean and well maintained
            </p>
          </div>

          <div className="glass-dark p-5 rounded-large">
            <Armchair className="mb-2 text-secondary-300" />
            <h3 className="font-heading text-lg">Living Space</h3>
            <p className="text-xs text-primary-200">
              Warm and inviting for relaxation
            </p>
          </div>

          <div className="glass-dark p-5 rounded-large">
            <CookingPot className="mb-2 text-secondary-300" />
            <h3 className="font-heading text-lg">Dining Area</h3>
            <p className="text-xs text-primary-200">
              Enjoy meals in a cozy setting
            </p>
          </div>

        </div>

        {/* ================= PRICE ================= */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-large flex flex-col sm:flex-row justify-between items-center gap-4">

          <div className="text-center sm:text-left">
            <p className="text-xs uppercase text-primary-300 mb-1">
              Starting From
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="text-3xl font-light">₹4,999</span>
              <span className="text-sm text-primary-200">/ night</span>
            </div>
            <p className="text-xs text-primary-300 mt-1">
              + GST applicable
            </p>
          </div>

          <a
            href="#contact"
            className="bg-white text-primary-900 px-6 py-3 rounded-small text-sm font-medium hover:bg-primary-50 transition-all"
          >
            Book Now
          </a>

        </div>

      </div>
    </section>
  );
}

export default Cottage;