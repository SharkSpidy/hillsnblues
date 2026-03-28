import { useEffect, useState } from "react";
import logo from "../../assets/icon/Logo.png"; // adjust path

export default function Loader() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-b from-primary-900 via-primary-800 to-black transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center">
        <img
          src={logo}
          alt="Logo"
          className="w-50 mx-auto logo-animation"
        />
        <p className="text-white/60 mt-4 text-xs tracking-[0.3em] uppercase">
          Hills & Blues
        </p>
      </div>
    </div>
  );
}