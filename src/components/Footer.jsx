import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-50 py-6 text-center text-gray-600 text-sm mt-16">
      Developed by Avneesh Kumar © {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
