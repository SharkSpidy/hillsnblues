import { Check, Quote, Star } from 'lucide-react';

function Testimonials() {
  return (
    <section className="py-20 bg-background-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-heading text-3xl text-primary-900 mb-8">Why Choose Hills & Blues?</h2>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600">
                  <Check className="w-5 h-5" />
                </div>
                <span className="text-neutral-700 text-lg">
                  Peaceful plantation setting
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600">
                  <Check className="w-5 h-5" />
                </div>
                <span className="text-neutral-700 text-lg">
                  Easy access to major viewpoints and attractions
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600">
                  <Check className="w-5 h-5" />
                </div>
                <span className="text-neutral-700 text-lg">Ideal for couples & small families</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600">
                  <Check className="w-5 h-5" />
                </div>
                <span className="text-neutral-700 text-lg">Authentic hill station experience</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600">
                  <Check className="w-5 h-5" />
                </div>
                <span className="text-neutral-700 text-lg">Clean, private and comfortable space</span>
              </li>
            </ul>
          </div>

          {/* <div className="bg-white p-8 rounded-large shadow-custom border border-neutral-100 relative">
            <Quote className="absolute top-8 left-8 w-10 h-10 text-primary-100 fill-current" />
            <div className="relative z-10 pt-8">
              <p className="text-neutral-600 italic text-lg mb-6">
                "A truly peaceful escape into nature. The morning mist rolling over the tea gardens
                while sipping coffee on the porch was unforgettable. Perfect place to disconnect
                and relax."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-neutral-200 rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading text-primary-900 font-bold">Anjali Menon</h4>
                  <div className="flex text-secondary-500 text-xs">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
