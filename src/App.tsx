import { useState, useEffect } from 'react';
import ViewSwitcher from './components/common/ViewSwitcher';
import Navbar from './components/common/Navbar';
import Hero from './components/home/Hero';
import Story from './components/home/Story';
import Cottage from './components/Cottage';
import Gallery from './components/home/Gallery';
import Experience from './components/Experience';
import Testimonials from './components/home/Testimonials';
import Contact from './components/Contact';
import Footer from './components/common/Footer';
import Loader from './components/common/Loader';

type ViewType = 'landing' | 'admin-login' | 'admin-dashboard';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('landing');
  const [loading, setLoading] = useState(true);

  const handleSwitchView = (view: ViewType) => {
    setCurrentView(view);
    if (view === 'landing') {
      window.scrollTo(0, 0);
    }
  };

  // Loader effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // adjust duration here

    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll + prevent default form
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };

    const handleFormSubmit = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'FORM') {
        e.preventDefault();
      }
    };

    document.addEventListener('click', handleAnchorClick);
    document.addEventListener('submit', handleFormSubmit);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      document.removeEventListener('submit', handleFormSubmit);
    };
  }, []);

  // 🔥 LOADER FIRST
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ViewSwitcher onSwitchView={handleSwitchView} />

      {currentView === 'landing' && (
        <div className="view-section active">
          <Navbar />
          <Hero />
          <Story />
          <Cottage />
          <Gallery />
          <Testimonials />
          <Experience />
          <Contact />
          <Footer />
        </div>
      )}

      {/* Future: admin views here */}
    </>
  );
}

export default App;