import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TypewriterText } from './typewriter-text';
import { Leaf, Apple, Carrot, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [particles, setParticles] = useState<Array<{ 
    id: number; 
    left: number; 
    delay: number; 
    type: 'cyan' | 'magenta' | 'white' 
  }>>([]);
  const [orbs, setOrbs] = useState<Array<{ 
    id: number; 
    left: number; 
    delay: number; 
    size: 'small' | 'medium' | 'large' 
  }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 20,
      type: ['cyan', 'magenta', 'white'][Math.floor(Math.random() * 3)] as 'cyan' | 'magenta' | 'white',
    }));
    
    const newOrbs = Array.from({ length: 15 }, (_, i) => ({
      id: i + 100,
      left: Math.random() * 100,
      delay: Math.random() * 25,
      size: ['small', 'medium', 'large'][Math.floor(Math.random() * 3)] as 'small' | 'medium' | 'large',
    }));
    
    setParticles(newParticles);
    setOrbs(newOrbs);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden nebula-background"
      data-testid="hero-section"
    >
      {/* 3D Particle Nebula Background */}
      <div className="floating-particles z-10">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className={`particle particle-${particle.type}`}
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
        {orbs.map((orb) => (
          <span
            key={orb.id}
            className={`orb-particle orb-${orb.size}`}
            style={{
              left: `${orb.left}%`,
              animationDelay: `${orb.delay}s`,
            }}
          />
        ))}
      </div>
      
      {/* Central Lens Flare Effect */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="w-96 h-96 rounded-full opacity-10"
            style={{
              background: 'radial-gradient(circle, hsl(186, 100%, 60%) 0%, hsl(0, 85%, 67%) 30%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
      
      {/* Enhanced Floating Elements */}
      <motion.div 
        className="absolute top-20 left-10 opacity-40 z-30"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, -5, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="backdrop-blur-custom rounded-full p-4 border-glow">
          <Leaf className="w-12 h-12 text-white animate-glow" />
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-20 right-10 opacity-40 z-30"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, -10, 10, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="backdrop-blur-custom rounded-full p-3 border-glow">
          <Apple className="w-10 h-10 text-white animate-glow" />
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute top-1/2 right-20 opacity-40 z-30"
        animate={{ 
          y: [0, -12, 0],
          rotate: [0, 15, -15, 0],
          x: [0, 5, -5, 0]
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div className="backdrop-blur-custom rounded-full p-2 border-glow">
          <Carrot className="w-8 h-8 text-white animate-glow" />
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute top-32 right-1/4 opacity-30 z-30"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 360],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="backdrop-blur-custom rounded-full p-3 border-glow">
          <Sparkles className="w-6 h-6 text-yellow-300 animate-glow" />
        </div>
      </motion.div>

      <div className="relative z-30 text-center text-white px-4 max-w-6xl mx-auto">
        {/* Futuristic Bold Typography */}
        <motion.h1 
          className="text-6xl md:text-8xl font-black mb-8"
          style={{ 
            fontFamily: '"Orbitron", "Bebas Neue", sans-serif',
            background: 'linear-gradient(45deg, hsl(186, 100%, 60%), hsl(0, 85%, 67%))',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          data-testid="hero-title"
        >
          <motion.div
            className="relative"
            animate={{
              textShadow: [
                "0 0 20px hsl(186, 100%, 60%), 0 0 40px hsl(186, 100%, 60%)",
                "0 0 40px hsl(0, 85%, 67%), 0 0 60px hsl(0, 85%, 67%)",
                "0 0 20px hsl(186, 100%, 60%), 0 0 40px hsl(186, 100%, 60%)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <motion.span 
              className="block leading-none"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              EXPLORE
            </motion.span>
            <motion.span 
              className="block leading-none"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              THE FUTURE
            </motion.span>
          </motion.div>
        </motion.h1>
        
        {/* Elegant Subheading with Typewriter Effect */}
        <motion.div
          className="text-lg md:text-xl mb-8 h-16 flex items-center justify-center"
          style={{ 
            fontFamily: '"Montserrat", sans-serif',
            color: 'hsl(0, 0%, 90%)',
            opacity: 0.8
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          data-testid="typewriter-container"
        >
          <TypewriterText 
            text="Innovate. Create. Inspire."
            className="pr-2 font-light tracking-wider"
          />
        </motion.div>
        
        <motion.p 
          className="text-base md:text-lg mb-12 opacity-70 leading-relaxed font-light max-w-2xl mx-auto"
          style={{ 
            fontFamily: '"Montserrat", sans-serif',
            color: 'hsl(0, 0%, 85%)'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          data-testid="hero-description"
        >
          Experience premium Nigerian agriculture with cutting-edge technology. 
          Fresh produce delivered directly from local farmers to your table.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          data-testid="hero-buttons"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-background px-12 py-6 text-lg font-bold shadow-2xl relative overflow-hidden group rounded-full transition-all duration-300"
              style={{
                fontFamily: '"Raleway", sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                boxShadow: '0 0 30px hsl(186, 100%, 60%), inset 0 0 30px transparent'
              }}
              data-testid="button-discover-now"
            >
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    '0 0 20px hsl(186, 100%, 60%)',
                    '0 0 40px hsl(186, 100%, 60%), 0 0 60px hsl(0, 85%, 67%)',
                    '0 0 20px hsl(186, 100%, 60%)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="relative z-10 flex items-center">
                <Sparkles className="w-5 h-5 mr-3" />
                Discover Now
              </span>
              {/* Particle sparks on hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                    }}
                    animate={{
                      x: [0, (Math.cos(i * 45 * Math.PI / 180) * 30)],
                      y: [0, (Math.sin(i * 45 * Math.PI / 180) * 30)],
                      opacity: [1, 0],
                      scale: [1, 0]
                    }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.05,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  />
                ))}
              </div>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="backdrop-blur-custom border-2 border-white/40 text-white hover:bg-white/20 px-10 py-5 text-lg font-semibold relative overflow-hidden group"
              data-testid="button-learn-more"
            >
              <span className="absolute inset-0 shimmer-effect animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <svg className="w-5 h-5 mr-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M9 10V9a2 2 0 012-2h2a2 2 0 012 2v1M9 10H7a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-2" />
              </svg>
              <span className="relative z-10">Learn More</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
