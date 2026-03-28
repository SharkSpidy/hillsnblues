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
          
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
