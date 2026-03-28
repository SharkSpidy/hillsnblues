import { MapPin, Phone, Mail, Map } from 'lucide-react';

function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-20 bg-primary-900 text-white relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-heading text-4xl mb-6">Your Perfect Hill Retreat Awaits</h2>
            <p className="text-primary-100 mb-10 text-lg">
              If you’re longing for a cozy escape surrounded by nature, fresh mountain air, and scenic beauty, our plantation cottage in Peerumedu is your perfect choice.

Come experience simplicity, serenity, and soulful comfort — all in one beautiful destination.

            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-secondary-400 mt-1" />
                <div>
                  <h4 className="font-bold text-white">Location</h4>
                  <p className="text-primary-200">Peerumedu, Idukki District, Kerala, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-secondary-400 mt-1" />
                <div>
                  <h4 className="font-bold text-white">Phone</h4>
                  <p className="text-primary-200">+91 9400500758</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-secondary-400 mt-1" />
                <div>
                  <h4 className="font-bold text-white">Email</h4>
                  <p className="text-primary-200">hillsnblues@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-10 w-full h-64 rounded-large overflow-hidden border border-primary-700 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3934.25484361517!2d77.0159800746657!3d9.573286990511436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMzQnMjMuOCJOIDc3wrAwMScwNi44IkU!5e0!3m2!1sen!2sin!4v1774625959572!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="bg-white rounded-large p-8 text-neutral-800 shadow-2xl">
            <h3 className="font-heading text-2xl text-primary-900 mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-neutral-600 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-small border border-neutral-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors bg-neutral-50"
                  placeholder="John Doe"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-600 mb-1">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-small border border-neutral-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors bg-neutral-50"
                    placeholder="+91 ..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-600 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-small border border-neutral-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors bg-neutral-50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-600 mb-1">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-small border border-neutral-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors bg-neutral-50"
                  placeholder="Tell us about your travel plans..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-700 hover:bg-primary-800 text-white font-bold py-4 rounded-small transition-colors shadow-lg mt-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
