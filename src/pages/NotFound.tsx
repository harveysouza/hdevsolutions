import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  const [randomPos, setRandomPos] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    // Create glitch effect by randomly changing position
    const interval = setInterval(() => {
      setRandomPos({
        x: Math.random() * 10 - 5,
        y: Math.random() * 10 - 5
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div 
        className="text-center max-w-lg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="relative mb-8 inline-block"
          style={{ 
            transform: `translate(${randomPos.x}px, ${randomPos.y}px)` 
          }}
        >
          <motion.div
            className="text-9xl font-bold relative z-10"
            variants={itemVariants}
          >
            <span className="text-neon-green">4</span>
            <span className="text-neon-blue">0</span>
            <span className="text-neon-purple">4</span>
          </motion.div>
          
          <div className="absolute top-0 left-1 right-0 text-9xl font-bold text-neon-green opacity-50 blur-md animate-pulse">
            404
          </div>
        </motion.div>
        
        <motion.h1 
          className="text-3xl font-bold mb-6"
          variants={itemVariants}
        >
          Página não encontrada
        </motion.h1>
        
        <motion.p 
          className="text-gray-400 mb-8"
          variants={itemVariants}
        >
          Parece que você se aventurou em território desconhecido. A página que você está procurando não existe ou foi movida.
        </motion.p>
        
        <motion.div
          variants={itemVariants}
        >
          <Link 
            to="/" 
            className="btn btn-primary inline-flex items-center"
          >
            <Home className="mr-2" size={18} />
            Voltar para Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;