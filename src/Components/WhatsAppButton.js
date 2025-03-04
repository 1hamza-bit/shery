import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '+923224594593'; // Replace with your number (e.g., +861234567890)
  const message = 'Hello! I’m interested in your hydraulic hoses. Can you send me more details?';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Detect if the user is on mobile
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const handleClick = () => {
    console.log('WhatsApp button clicked'); // Optional analytics
    window.open(whatsappLink, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 cursor-pointer flex items-center bg-[#25D366] text-white py-3 px-5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out z-50"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="Chat with us on WhatsApp"
        className="w-6 h-6 mr-2"
      />
      <span className="text-sm font-semibold">
        {'Chat with Us'}
      </span>
    </button>
  );
};

export default WhatsAppButton;