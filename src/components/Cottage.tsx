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
        <div className="text-center mb-14">
          <h2 className="font-heading text-2xl md:text-3xl mb-3">
            The Cottage - Comfort Meets Simplicity
          </h2>
        </div>

        {/* ================= IMAGES ================= */}
        <div className="flex flex-col gap-6 md:gap-8 mb-14 items-center">

          <div className="w-full max-w-4xl">
            <div className="relative h-[260px] md:h-[360px] rounded-large overflow-hidden group">
              <img
                src={cottageporch}
                alt="Cottage Porch"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="w-full max-w-4xl">
            <div className="relative h-[260px] md:h-[360px] rounded-large overflow-hidden group">
              <img
                src={cottageFront}
                alt="Cottage Front"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

        </div>

        {/* ================= DIVIDER ================= */}
        <div className="w-full h-px bg-white/10 mb-12"></div>

        <p className="text-primary-200 text-sm text-center mb-10">
            Our thoughtfully designed cottage features
        </p>

        {/* ================= FEATURES ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">

          {/* Card */}
          <div className="glass-dark p-5 rounded-large flex gap-4 items-start">
            <BedDouble className="text-secondary-300 w-6 h-6 mt-1" />
            <div>
              <h3 className="font-heading text-lg text-white">Two Cozy Bedrooms</h3>
              <p className="text-xs text-primary-200 mt-1">
                Spacious, well-ventilated bedrooms with comfortable beds and serene plantation views ensure restful nights after a day of exploring.
              </p>
            </div>
          </div>

          <div className="glass-dark p-5 rounded-large flex gap-4 items-start">
            <Bath className="text-secondary-300 w-6 h-6 mt-1" />
            <div>
              <h3 className="font-heading text-lg text-white">Modern Bathroom</h3>
              <p className="text-xs text-primary-200 mt-1">
                Clean, well-maintained, and equipped with essential amenities to provide a refreshing experience.
              </p>
            </div>
          </div>

          <div className="glass-dark p-5 rounded-large flex gap-4 items-start">
            <Armchair className="text-secondary-300 w-6 h-6 mt-1" />
            <div>
              <h3 className="font-heading text-lg text-white">Inviting Living Room</h3>
              <p className="text-xs text-primary-200 mt-1">
                A warm and welcoming space to unwind with your loved ones. Enjoy heartfelt conversations, board games, or simply relax with a cup of tea while gazing at the greenery outside.
              </p>
            </div>
          </div>

          <div className="glass-dark p-5 rounded-large flex gap-4 items-start">
            <CookingPot className="text-secondary-300 w-6 h-6 mt-1" />
            <div>
              <h3 className="font-heading text-lg text-white">Dining Area</h3>
              <p className="text-xs text-primary-200 mt-1">
                A charming dining space where you can savor delicious home-style meals or enjoy takeaway delights from nearby eateries. Kitchen with essential amenities like fridge, microwave oven, induction cooker, RO-UV Filter for drinking water, kettle and cutleries.
              </p>
            </div>
          </div>

        </div>

        {/* ================= PRICE ================= */}
        <div className="bg-white/5 border border-white/5 p-6 rounded-large flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">

          <div>
            <p className="text-xs uppercase text-primary-300 mb-1 tracking-wide">
              Starting From
            </p>

            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="text-3xl font-light tracking-wide">₹4,999</span>
              <span className="text-sm text-primary-200">/ night</span>
            </div>

            <p className="text-xs text-primary-300 mt-1">
              + GST applicable
            </p>
          </div>

          <a
            href="#contact"
            className="bg-white text-primary-900 px-6 py-3 rounded-small text-sm font-medium hover:bg-primary-50 transition-all shadow-md"
          >
            Book Now
          </a>

        </div>

      </div>
    </section>
  );
}

export default Cottage;