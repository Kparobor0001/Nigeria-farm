import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CountdownTimerProps {
  targetDate?: Date;
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
}

export function CountdownTimer({ 
  targetDate, 
  initialHours = 0, 
  initialMinutes = 27, 
  initialSeconds = 9 
}: CountdownTimerProps) {
  const [time, setTime] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        let { hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset timer when it reaches 0
          hours = 0;
          minutes = 27;
          seconds = 9;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <motion.div 
      className="bg-white rounded-2xl p-6 shadow-2xl text-center min-w-[100px] relative overflow-hidden group border-glow"
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      animate={{ 
        boxShadow: ["0 10px 30px rgba(0,0,0,0.1)", "0 20px 40px rgba(220,38,38,0.3)", "0 10px 30px rgba(0,0,0,0.1)"]
      }}
      transition={{ 
        boxShadow: { duration: 2, repeat: Infinity },
        scale: { duration: 0.2 },
        y: { duration: 0.2 }
      }}
      data-testid={`countdown-${label.toLowerCase()}`}
    >
      <span className="absolute inset-0 shimmer-effect animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity"></span>
      <motion.div 
        className="text-3xl font-bold text-red-600 relative z-10"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        {String(value).padStart(2, '0')}
      </motion.div>
      <div className="text-sm text-gray-600 capitalize font-medium relative z-10">{label}</div>
      
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-400 via-orange-400 to-red-400 p-[2px] opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-white rounded-2xl w-full h-full"></div>
      </div>
    </motion.div>
  );

  return (
    <motion.div 
      className="flex justify-center items-center space-x-6" 
      data-testid="countdown-timer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <TimeUnit value={time.hours} label="hours" />
      <motion.div 
        className="text-4xl text-red-600 font-bold"
        animate={{ 
          scale: [1, 1.2, 1],
          color: ["#dc2626", "#f97316", "#dc2626"]
        }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        :
      </motion.div>
      <TimeUnit value={time.minutes} label="minutes" />
      <motion.div 
        className="text-4xl text-red-600 font-bold"
        animate={{ 
          scale: [1, 1.2, 1],
          color: ["#dc2626", "#f97316", "#dc2626"]
        }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
      >
        :
      </motion.div>
      <TimeUnit value={time.seconds} label="seconds" />
    </motion.div>
  );
}
