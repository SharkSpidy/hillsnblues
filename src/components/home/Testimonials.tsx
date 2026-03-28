import { Check } from 'lucide-react';
import stayImage from '../../assets/images/Sunset_Hills.jpeg'; 

function Testimonials() {
  return (
    <section className="py-20 bg-background-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>
            <h2 className="font-heading text-3xl text-primary-900 mb-8">
              Why Choose Hills & Blues?
            </h2>

            <ul className="space-y-6">
              {[
                "Peaceful plantation setting",
                "Easy access to major viewpoints and attractions",
                "Ideal for couples & small families",
                "Authentic hill station experience",
                "Clean, private and comfortable space"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600">
                    <Check className="w-5 h-5" />
                  </div>
                  <span className="text-neutral-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-6">

            {/* IMAGE WITH STORY STYLE BORDERS */}
            <div className="relative">

              {/* Top Left Border */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary-300 rounded-tl-3xl"></div>

              {/* Bottom Right Border */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary-300 rounded-br-3xl"></div>

              {/* Image */}
              <div className="relative rounded-large overflow-hidden shadow-lg group z-10">
                <img
                  src={stayImage}
                  alt="Stay Experience"
                  className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

            </div>

            {/* TEXT BELOW IMAGE */}
            <div className="text-center lg:text-left space-y-2">
              <p className="font-heading text-xl text-primary-900">
                Here, time slows down. 
              </p>
              <p className="text-neutral-600 text-sm">
                Evenings are best spent watching golden sunsets melt into misty horizons, while mornings invite you for refreshing plantation strolls.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;