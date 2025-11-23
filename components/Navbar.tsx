import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Snowflake } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Elsa X', path: '/' },
    { name: '功能', path: '/features' },
    { name: '规格', path: '/specs' },
    { name: '图库', path: '/gallery' },
    { name: 'Permafrost OS', path: '/os' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
            <Snowflake size={18} className="text-blue-400" />
            <span className="font-semibold tracking-wide text-sm">Arendelle Robotics</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-medium tracking-wide transition-colors ${location.pathname === link.path ? 'text-white' : 'text-gray-400 hover:text-white'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link to="/purchase">
                <ShoppingBag size={16} className="text-gray-300 hover:text-blue-400 transition-colors" />
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-300 hover:text-white">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-4 pb-12 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block text-2xl font-semibold text-gray-200 hover:text-blue-400 py-2 border-b border-white/10"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/purchase" className="block mt-8 bg-blue-600 text-white text-center py-3 rounded-full font-medium">
            购买 Elsa X
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
