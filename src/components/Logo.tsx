import React from 'react';
import { Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center space-x-2 group transition-all duration-300"
    >
      <Code className="text-neon-green group-hover:scale-110 transition-transform duration-300" size={32} />
      <span className="text-xl font-bold">
        <span className="text-neon-green">H</span>DEV Solutions
      </span>
    </Link>
  );
};

export default Logo;