"use client"; // Mark as a client component

import dynamic from "next/dynamic";
import Footer from "../Layout/footer";
import Header from "../Layout/header";
import styles from "./index.module.scss"; // Ensure this exists or remove if not needed
import shop from "../../Assets/shophose.jpg";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Dynamically import Globe to avoid SSR issues
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const labelData = [
  { lat: 35.8617, lng: 104.1954, text: "China", color: "red", labelSize: 80 },
  { lat: 35.9078, lng: 127.7669, text: "Korea", color: "blue", size: 80 },
  { lat: 37.0902, lng: -95.7129, text: "USA", color: "green", size: 120 },
  { lat: 41.8719, lng: 12.5674, text: "Italy", region: "europe", color: "yellow", size: 120 },
  { lat: 51.1657, lng: 10.4515, text: "Germany", region: "europe", color: "orange", size: 120 },
  { lat: 47.5162, lng: 14.5501, text: "Austria", region: "europe", color: "purple", size: 120 },
  { lat: 55.3781, lng: -3.4360, text: "UK", color: "cyan", size: 120 },
  { lat: 52.1326, lng: 5.2913, text: "Netherlands", region: "europe", color: "magenta", size: 120 },
  { lat: 51.9194, lng: 19.1451, text: "Poland", region: "europe", color: "lime", size: 120 },
  { lat: -30.5595, lng: 22.9375, text: "South Africa", color: "lime", size: 120 },
  { lat: 23.4241, lng: 53.8478, text: "UAE", color: "lime", size: 120 },
];

const lineData = [
  { startLat: 35.8617, startLng: 104.1954, endLat: 35.9078, endLng: 127.7669 }, // China to Korea
  { startLat: 35.9078, startLng: 127.7669, endLat: 37.0902, endLng: -95.7129 }, // Korea to USA
];

const Aboutus = () => {
  const globeEl = useRef();
  const w = typeof window !== "undefined" ? window.innerWidth : 0; // Avoid window access during SSR
  const shiftFactor = -0.6;
  const shiftAmmount = shiftFactor * w;
  const [hoveredLabel, setHoveredLabel] = useState(null);

  const handleLabelHover = (label) => {
    setHoveredLabel(label ? label.text : null); // Use `text` instead of `name`
  };

  const labelText = (label) => {
    return label.text === hoveredLabel ? label.text : "•";
  };

//   useEffect(() => {
//     if (globeEl.current) {
//       globeEl.current.controls().autoRotate = true;
//       globeEl.current.controls().autoRotateSpeed = 0.7;
//       const altitude = w > 1608 ? 4 : 2.5;
//       globeEl.current.pointOfView({ lat: 0, lng: 0, altitude });
//     }
//   }, []);

  const labelSize = (label) => {
    return label.region ? 1 : 3; // Dynamic size based on region
  };

  return (
    <>
      <div className={`${styles.about}`}>
        <div className={`${styles.overlay} mt-1`}>
          <Header />

          {/* About Us Section */}
          <div className="map container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-8 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
              <p className="text-base md:text-lg">
                "Shaharyar Traders, a subsidiary of Shahzad Trading Company established in 1975, specializes in top-quality hydraulic and rubber hoses for over a decade.
                Our parent company, Shahzad Trading, brings decades of industry expertise. We take pride in our international reach, having collaborated with numerous countries across the globe. From the United States to Japan, our commitment to quality remains unwavering. At Shaharyar Traders, we prioritize excellence and reliability in every product we deliver, ensuring customer satisfaction worldwide."
              </p>
            </div>
            <div className={`${styles.globe} relative flex justify-center items-center`}>
              <Globe
                width={w + shiftAmmount}
                height={400} // Fixed height for consistency
                globeImageUrl="https://unpkg.com/three-globe@2.18.0/example/img/earth-night.jpg"
                bumpImageUrl="https://unpkg.com/three-globe@2.18.0/example/img/earth-topology.png"
                backgroundColor="rgba(0,0,0,0)"
                animateIn={true}
                showGlobe={true}
                ref={globeEl}
                labelsData={labelData}
                labelText="text" // Use 'text' property directly
                labelSize={labelSize}
                labelColor={() => "rgba(255, 165, 0, 0.5)"}
                linesData={lineData}
                onLabelHover={handleLabelHover}
              />
              {hoveredLabel && (
                <div className="absolute top-2 left-2 bg-gray-800 text-white p-2 rounded">
                  {hoveredLabel}
                </div>
              )}
            </div>
          </div>

          {/* Who We Are Section */}
          <div className="snd bg-black mx-auto px-4 py-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold underline mb-4">Who We Are</h2>
            <p className="max-w-4xl mx-auto text-lg text-gray-300">
              Based in Lahore, Pakistan, Shaharyar Traders is a renowned establishment dedicated to providing the highest quality hoses to the local market. Since our inception, we've focused on serving the needs of our customers across Pakistan with excellence and integrity. Our commitment to delivering top-tier products has earned us a reputation as a trusted supplier in the region. From industrial enterprises to small businesses, we cater to a diverse range of clients, ensuring that each receives the best quality hoses available. At Shaharyar Traders, our roots run deep in the fabric of Pakistan's business landscape. We take pride in contributing to the growth and success of local industries by offering reliable solutions backed by superior customer service.
            </p>
          </div>

          {/* Our Shop Section */}
          <div className="thrd  mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-center items-center m-8 md:m-16">
              <img src={shop.src} alt="Shop" className="w-full h-auto object-cover rounded-lg" />
            </div>
            <div className="m-8 md:m-12 flex flex-col justify-center">
              <h2 className="text-lg md:text-xl font-bold underline mb-4 text-white">Our Shop</h2>
              <p className="max-w-4xl text-lg text-gray-300">
                Visit our shop located at Barandeth Road, where we house our extensive warehouse of top-quality stocklots. Discover a wide range of products to meet your needs.
              </p>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className={`${styles.bg}  mx-auto px-4 py-8 text-center`}>
            <h2 className="text-2xl md:text-3xl font-bold underline mb-4 text-white">Contact Us</h2>
            <p className="max-w-4xl mx-auto text-lg text-gray-300 mb-6">
              Do you have any queries? Please feel free to connect with us.
            </p>
            <Link href="/contact">
              <button className="border-2 border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition duration-300">
                Let’s Connect
              </button>
            </Link>

            {/* Additional Who We Are Section */}
            <div className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold underline mb-4 text-white">Who We Are</h2>
              <p className="max-w-4xl mx-auto text-lg text-gray-300">
                Shaharyar Traders by Shahzad Trading Company specializes in providing high-quality hydraulic hoses and rubber hoses, from the last 10 years.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Aboutus;