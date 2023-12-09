

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="mb-4">
          <h2 className="text-2xl font-bold py-12 text-center">Adewunmi Oluwapelumi</h2>
          <p className="text-sm">Feel free to reach out for collaboration or any inquiries.</p>
        </div>

        <div className="flex space-x-4">
          <a href="#your-social-link" className="text-accentBlue hover:text-accentBlueDark">
            Twitter
          </a>
          <a href="#your-social-link" className="text-accentGreen hover:text-accentGreenDark">
            LinkedIn
          </a>
          <a href="#your-social-link" className="text-accentRed hover:text-accentRedDark">
            GitHub
          </a>
        </div>

        <div className="mt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()}   pelumidel.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
