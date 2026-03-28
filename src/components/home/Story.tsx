import { MapPin } from 'lucide-react';
import StoryVideo from '../../assets/videos/View_Hills.mp4';

function Story() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary-300 rounded-tl-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary-300 rounded-br-3xl"></div>
            <video
              src={StoryVideo}
              autoPlay
              loop
              muted
              playsInline
              className="rounded-large shadow-custom w-full h-[500px] object-cover relative z-10"
            ></video>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl text-primary-900 mb-6">
                A Cottage Surrounded by Nature
              </h2>
              <div className="w-20 h-1 bg-secondary-400 mb-8"></div>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Welcome to{' '}
                <span className="font-heading text-primary-800 italic">Serenity in the Hills</span>{' '}
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Your Private Cottage in Peerumedu, Tucked away in the lush highlands of Kerala, our charming homestay cottage offers a serene retreat amidst sprawling tea and fragrant cardamom plantations. Designed for travelers who seek peace, comfort, and a touch of nature’s magic, this cozy haven promises an unforgettable stay in the heart of the Western Ghats.
                Wake up to mist-kissed mornings, the aroma of fresh cardamom in the air, and panoramic views of endless tea gardens. The gentle rustle of leaves, the songs of hill birds, and the cool mountain breeze create an atmosphere of pure tranquility.
Whether you’re planning a romantic getaway, a family holiday, or a peaceful work-from-hills escape, our cottage offers the perfect blend of comfort and nature.
              </p>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-large shadow-sm border border-neutral-100">
              <div className="bg-primary-50 p-3 rounded-full text-primary-700">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-lg text-primary-900 mb-1">Springdale Cottage Pambanar, Peermade</h3>
                <p className="text-neutral-500 text-sm">
                  2 Bedroom Entire Cottage Located just 1.2 km from Kallar Junction, on the scenic route to the
                  breathtaking Parunthumpara viewpoints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
