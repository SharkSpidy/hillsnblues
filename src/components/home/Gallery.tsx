import Bedroom1 from '../../assets/images/Bed_Room_1.jpeg';
import Bedroom2 from '../../assets/images/Bed_Room_2.jpeg';
import LivingRoom from '../../assets/images/Living_Room_1.jpeg';
import LivingRoom2 from '../../assets/images/Living_Room_2.jpeg';
import WashRoom from '../../assets/images/Wash_Room.jpeg';

function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          <div className="md:col-span-1 md:row-span-1 rounded-large overflow-hidden cursor-pointer group">
            <img
              src= {LivingRoom}
              alt="Living Room"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="md:col-span-1 md:row-span-2 rounded-large overflow-hidden cursor-pointer group">
            <img
              src= {Bedroom2}
              alt="Bedroom 2"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="md:col-span-1 md:row-span-1 rounded-large overflow-hidden cursor-pointer group">
            <img
              src={Bedroom1}
              alt="Bedroom 1"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="md:col-span-1 md:row-span-1 rounded-large overflow-hidden cursor-pointer group">
            <img
              src={LivingRoom2}
              alt="Living Room 2"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="md:col-span-1 md:row-span-1 rounded-large overflow-hidden cursor-pointer group">
            <img
              src= {WashRoom}
              alt="Wash Room"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
