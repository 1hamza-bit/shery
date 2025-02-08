import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="w-full sticky top-0 left-0 z-50 bg-black/40 blurs border-b border-white/20 text-white transition-all">
      {/* Top Bar */}
      <div className="bg-black/70 hidden md:flex justify-between items-center text-sm px-8 py-2 border-b border-gray-700">
        <div className="flex items-center space-x-6">
          <a href="tel:1-800-HYDRAULIC" className="flex items-center space-x-2">
            <span>1-800-HYDRAULIC</span>
          </a>
          <a href="mailto:contact@hydraulicsolutions.com" className="flex items-center space-x-2">
            <span>shahzadtrading123@gmail.com.com</span>
          </a>
        </div>
        <div className="space-x-6">
          <Link to="#" className="hover:text-[#E9B57A]">Support</Link>
          <Link to="#" className="hover:text-[#E9B57A]">Careers</Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#E9B57A]">
            Shaharyar<span className="text-white"> Traders</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
         
          <Link to="/products" className="hover:text-[#E9B57A] transition-all">Products</Link>
          {/* <Link to="/solutions" className="hover:text-[#E9B57A] transition-all">Solutions</Link> */}
          <Link to="/about" className="hover:text-[#E9B57A] transition-all">About Us</Link>
          <Link to="/contact" className="hover:text-[#E9B57A] transition-all">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl bg-transparent" onClick={() => setMobileMenuOpen(true)}>
          ☰
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-lg flex flex-col items-center justify-center space-y-6 text-lg transition-all">
          <button className="absolute top-6 right-6 text-3xl" onClick={() => setMobileMenuOpen(false)}>
            ✖
          </button>
          <Link to="/" className="text-2xl font-bold text-[#E9B57A]" onClick={() => setMobileMenuOpen(false)}>
            HydraulicPro
          </Link>
          <Link to="/products" className="hover:text-[#E9B57A] transition-all" onClick={() => setMobileMenuOpen(false)}>Products</Link>
          {/* <Link to="/services" className="hover:text-[#E9B57A] transition-all" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link to="/solutions" className="hover:text-[#E9B57A] transition-all" onClick={() => setMobileMenuOpen(false)}>Solutions</Link> */}
          <Link to="/about" className="hover:text-[#E9B57A] transition-all" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <Link to="/contact" className="hover:text-[#E9B57A] transition-all" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
