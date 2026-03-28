import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

import peerumedu_1 from '../assets/images/Peerumedu_1.jpg';
import peerumedu_4 from '../assets/images/Peerumedu_4.jpg';
import peerumedu_5 from '../assets/images/Peerumedu_5.jpg';

function Experience() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -350, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 350, behavior: 'smooth' });
  };

  return (
    <section id="experience" className="py-20 bg-background-100 overflow-hidden">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex justify-between items-end">
        <div>
          <h2 className="font-heading text-4xl text-primary-900 mb-2">
            Experience the Magic of Peerumedu
          </h2>
          <p className="text-neutral-600">
            Immerse yourself in the magic of Peerumedu.
          </p>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex gap-2">
          <button
            onClick={scrollLeft}
            className="p-2 rounded-full border border-neutral-300 hover:bg-white hover:shadow-sm transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-neutral-600" />
          </button>

          <button
            onClick={scrollRight}
            className="p-2 rounded-full border border-neutral-300 hover:bg-white hover:shadow-sm transition-all"
          >
            <ArrowRight className="w-5 h-5 text-neutral-600" />
          </button>
        </div>
      </div>

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 px-4 sm:px-6 lg:px-8 pb-8 no-scrollbar snap-x snap-mandatory"
      >

        {/* Card 1 */}
        <div className="min-w-[300px] md:min-w-[350px] snap-center group">
          <div className="relative h-[450px] rounded-large overflow-hidden shadow-md">
            <img
              src={peerumedu_5}
              alt="Parunthumpara"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="font-heading text-2xl text-white mb-1">
                Parunthumpara Views
              </h3>
              <p className="text-neutral-300 text-sm">
                Breathtaking eagle rock viewpoints just a short drive away.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2
        <div className="min-w-[300px] md:min-w-[350px] snap-center group">
          <div className="relative h-[450px] rounded-large overflow-hidden shadow-md">
            <img
              src={peerumedu_2}
              alt="Tea Plantation"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="font-heading text-2xl text-white mb-1">
                Tea Plantation Walks
              </h3>
              <p className="text-neutral-300 text-sm">
                Wander through endless green carpets of tea leaves.
              </p>
            </div>
          </div>
        </div> */}

        {/* Card 3 */}
        <div className="min-w-[300px] md:min-w-[350px] snap-center group">
          <div className="relative h-[450px] rounded-large overflow-hidden shadow-md">
            <img
              src={peerumedu_4}
              alt="Mountains"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="font-heading text-2xl text-white mb-1">
                Scenic Hill Drives
              </h3>
              <p className="text-neutral-300 text-sm">
                Winding roads through mist-covered mountains.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="min-w-[300px] md:min-w-[350px] snap-center group">
          <div className="relative h-[450px] rounded-large overflow-hidden shadow-md">
            <img
              src={peerumedu_1}
              alt="Hidden Nature Spot"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="font-heading text-2xl text-white mb-1">
                Hidden Nature Spots
              </h3>
              <p className="text-neutral-300 text-sm">
                Discover secluded areas where nature thrives in its purest form.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;