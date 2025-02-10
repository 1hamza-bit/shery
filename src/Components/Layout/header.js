import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";
import { motion } from "framer-motion";


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest(".mobile-menu") && !event.target.closest(".menu-button")) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="w-full sticky top-0 left-0 z-50 md:blurs bg-black/40 border-b border-white/20 text-white transition-all">
      {/* Top Bar */}
      <div className="bg-black/70 hidden md:flex justify-between items-center text-sm px-8 py-2 border-b border-gray-700">
        <div className="flex items-center space-x-6">
          <a href="tel:1-800-HYDRAULIC" className="flex items-center space-x-2">
            <span>1-800-HYDRAULIC</span>
          </a>
          <a href="mailto:contact@hydraulicsolutions.com" className="flex items-center space-x-2">
            <span>shahzadtradingco26@gmail.com</span>
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
          <Link to="/about" className="hover:text-[#E9B57A] transition-all">About Us</Link>
          <Link to="/contact" className="hover:text-[#E9B57A] transition-all">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl bg-transparent z-50">
          <motion.div animate={{ rotate: mobileMenuOpen ? 30 : 0 }}>
            {mobileMenuOpen ? <X size={30} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} /> : <Menu size={30} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />}
          </motion.div>
        </div>
      </nav>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: mobileMenuOpen ? "55%" : "0%" }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 right-0 h-full bg-black text-white flex flex-col space-y-6 text-lg overflow-hidden ${
          mobileMenuOpen ? "py-20 px-8" : "p-0"
        }`}      >
        <Link to="/" className="text-2xl font-bold text-[#E9B57A]">
          Shaharyar<span className="text-white"> Traders</span>
        </Link>
        <Link to="/products" className="hover:text-[#E9B57A] transition-all" onClick={() => setMobileMenuOpen(false)}>Products</Link>
        <Link to="/about" className="hover:text-[#E9B57A] transition-all" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
        <Link to="/contact" className="hover:text-[#E9B57A] transition-all" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
      </motion.div>
    </header>
  );
};

export default Header;
