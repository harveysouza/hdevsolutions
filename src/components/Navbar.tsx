import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            Sobre
          </NavLink>
          <div className="relative group">
            <NavLink to="/services" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
              Serviços
            </NavLink>
            <div className="absolute left-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <NavLink 
                to="/services" 
                className="block px-4 py-2 text-gray-300 hover:text-neon-green hover:bg-gray-800/50"
                onClick={closeMenu}
              >
                Websites WordPress
              </NavLink>
              <NavLink 
                to="/servicos" 
                className="block px-4 py-2 text-gray-300 hover:text-neon-green hover:bg-gray-800/50"
                onClick={closeMenu}
              >
                Websites Modernos
              </NavLink>
              <NavLink 
                to="/shopify" 
                className="block px-4 py-2 text-gray-300 hover:text-neon-green hover:bg-gray-800/50"
                onClick={closeMenu}
              >
                Lojas Shopify
              </NavLink>
            </div>
          </div>
          <NavLink to="/portfolio" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            Portfólio
          </NavLink>
          <NavLink to="/contact" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            Contato
          </NavLink>
          <a href="/contact" className="btn btn-primary ml-4">
            Orçamento Grátis
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed top-[72px] left-0 right-0 bg-black/95 backdrop-blur-md transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 h-[calc(100vh-72px)]' : 'opacity-0 h-0 pointer-events-none'
        }`}
      >
        <nav className="container flex flex-col space-y-6 py-8">
          <NavLink 
            to="/" 
            className={({isActive}) => `nav-link text-xl ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({isActive}) => `nav-link text-xl ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Sobre
          </NavLink>
          <NavLink 
            to="/services" 
            className={({isActive}) => `nav-link text-xl ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Serviços
          </NavLink>
          <div className="pl-4 space-y-4">
            <NavLink 
              to="/services" 
              className={({isActive}) => `nav-link text-lg ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Websites WordPress
            </NavLink>
            <NavLink 
              to="/servicos" 
              className={({isActive}) => `nav-link text-lg ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Websites Modernos
            </NavLink>
            <NavLink 
              to="/shopify" 
              className={({isActive}) => `nav-link text-lg ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Lojas Shopify
            </NavLink>
          </div>
          <NavLink 
            to="/portfolio" 
            className={({isActive}) => `nav-link text-xl ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Portfólio
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => `nav-link text-xl ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Contato
          </NavLink>
          <a 
            href="/contact" 
            className="btn btn-primary self-start"
            onClick={closeMenu}
          >
            Orçamento Grátis
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;