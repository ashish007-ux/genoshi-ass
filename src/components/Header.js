// Header.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClass = scrolling ? 'bg-gray-800' : 'bg-gray-100';

  return (
    <header className={`fixed w-full top-0 z-10 ${headerClass} transition duration-300 shadow-md p-4`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-black text-lg font-semibold">
          Logo
        </Link>
        <div className="flex space-x-4">
          <Link to="/sign-in" className="text-black">
            Sign In
          </Link>
          <Link to="/sign-up" className="text-black">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
