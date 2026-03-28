import { BedDouble, Bath, Armchair } from 'lucide-react';
import cottageFront from '../assets/images/Cottage_Front.jpeg';
function Cottage() {
  return (
    <section id="cottage" className="py-20 bg-primary-900 text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary-300 uppercase tracking-widest text-sm font-semibold">
            Exclusive Stay
          </span>
          <h2 className="font-heading text-4xl md:text-5xl mt-3 mb-4">Your Private Cottage</h2>
          <p className="text-primary-100 max-w-2xl mx-auto font-light">
            An intimate space designed for slow living, where every corner tells a story of
            comfort and nature.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="relative h-full min-h-[400px] rounded-large overflow-hidden shadow-2xl group">
              <img
                src={cottageFront}
                alt="Cottage Interior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs uppercase tracking-wide border border-white/30">
                  The Cottage
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="glass-dark p-6 rounded-large hover:bg-white/5 transition-colors cursor-default">
              <div className="flex items-center gap-4 mb-2">
                <BedDouble className="text-secondary-300 w-6 h-6" />
                <h3 className="font-heading text-xl text-white">Two Cozy Bedrooms</h3>
              </div>
              <p className="text-primary-100 text-sm pl-10">
                Spacious rooms with plantation views, premium linens, and restful comfort for a
                perfect night's sleep.
              </p>
            </div>

            <div className="glass-dark p-6 rounded-large hover:bg-white/5 transition-colors cursor-default">
              <div className="flex items-center gap-4 mb-2">
                <Bath className="text-secondary-300 w-6 h-6" />
                <h3 className="font-heading text-xl text-white">Modern Bathroom</h3>
              </div>
              <p className="text-primary-100 text-sm pl-10">
                Clean, well-maintained spaces equipped with hot water, essential toiletries, and
                modern fixtures.
              </p>
            </div>

            <div className="glass-dark p-6 rounded-large hover:bg-white/5 transition-colors cursor-default">
              <div className="flex items-center gap-4 mb-2">
                <Armchair className="text-secondary-300 w-6 h-6" />
                <h3 className="font-heading text-xl text-white">Living & Dining</h3>
              </div>
              <p className="text-primary-100 text-sm pl-10">
                A warm, inviting living space for connection and a dining area perfect for
                enjoying home-style meals.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-5 rounded-large">
  <div className="flex items-center justify-between">
    
    {/* Price */}
    <div>
      <p className="text-primary-200 text-xs uppercase tracking-wide mb-1">
        Starting From
      </p>
      <div className="flex items-end gap-2">
        <span className="text-3xl font-semibold text-white">₹4,999</span>
        <span className="text-primary-200 text-sm mb-1">/ night</span>
      </div>
      <p className="text-primary-300 text-xs mt-1">
        + GST applicable
      </p>
    </div>

    {/* CTA */}
    <a
      href="#contact"
      className="bg-white text-primary-900 px-4 py-2 rounded-small text-sm font-medium hover:bg-primary-50 transition-all"
    >
      Book Now
    </a>
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cottage;
