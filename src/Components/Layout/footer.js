import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white py-10 px-5">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h1 className="text-[#E9B57A] text-xl font-bold">Shaharyar Traders</h1>
            <div className="w-full h-0.5 bg-[#E9B57A] my-2"></div>
            <p>
              A hydraulic hose trading company, such as Shaharyar Traders, specializes in supplying high-quality hydraulic hoses and components for various industries.
            </p>
          </div>
          
          <div>
            <h1 className="text-[#E9B57A] text-xl font-bold">Site Links</h1>
            <div className="w-full h-0.5 bg-[#E9B57A] my-2"></div>
            <ul className="space-y-2">
              <li><Link to="/products" className="hover:text-[#E9B57A]">Products</Link></li>
              <li><Link to="/contact" className="hover:text-[#E9B57A]">Contact</Link></li>
              <li><Link to="/about" className="hover:text-[#E9B57A]">About</Link></li>
              <li><Link to="/privacy" className="hover:text-[#E9B57A]">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h1 className="text-[#E9B57A] text-xl font-bold">About Us</h1>
            <div className="w-full h-0.5 bg-[#E9B57A] my-2"></div>
            <p className="mt-2 text-lg">
              Based in Lahore, Pakistan, Shaharyar Traders is a renowned establishment dedicated to providing the highest quality hoses to the local market.
            </p>
          </div>
          
          <div>
            <h1 className="text-[#E9B57A] text-xl font-bold">Contact Us</h1>
            <div className="w-full h-0.5 bg-[#E9B57A] my-2"></div>
            <p>Let's connect with us via email:</p>
            <a href="mailto:hamtah112@gmail.com" className="inline-block bg-[#E9B57A] text-black px-4 py-2 mt-2 rounded hover:bg-orange-500">
              Email
            </a>
          </div>
        </div>
      </div>
      
      <div className="bg-black text-white text-center py-4 border-t border-[#E9B57A]">
        <p>&copy; 2023 Shaharyar Traders. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
