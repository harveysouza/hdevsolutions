import React from 'react';
// import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, Facebook } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-950 border-t border-gray-900">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-400 mt-4">
              Soluções digitais profissionais para transformar seu negócio com alta performance e design moderno.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-400 hover:text-neon-green transition-colors" onClick={() => window.scrollTo(0,0)}>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-neon-green transition-colors" onClick={() => window.scrollTo(0,0)}>
                  Sobre
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-neon-green transition-colors" onClick={() => window.scrollTo(0,0)}>
                  Serviços
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-gray-400 hover:text-neon-green transition-colors" onClick={() => window.scrollTo(0,0)}>
                  Portfólio
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-neon-green transition-colors" onClick={() => window.scrollTo(0,0)}>
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <a href="/services" className="text-gray-400 hover:text-neon-green transition-colors" onClick={() => window.scrollTo(0,0)}>
                  Websites WordPress
                </a>
              </li>
              <li>
                <a href="/servicos" className="text-gray-400 hover:text-neon-green transition-colors" onClick={() => window.scrollTo(0,0)}>
                  Websites Modernos
                </a>
              </li>
              <li>
                <a href="/shopify" className="text-gray-400 hover:text-neon-green transition-colors" onClick={() => window.scrollTo(0,0)}>
                  Lojas Shopify
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-neon-green transition-colors" onClick={() => window.scrollTo(0,0)}>
                  Automação com N8n
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p className="text-gray-400 mb-4">
              Entre em contato conosco para transformar seu negócio.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-green transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-green transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-green transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-green transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container py-4 border-t border-gray-900">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            © {currentYear} HDEV Solutions. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            {/* CNPJ: XX.XXX.XXX/0001-XX */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;