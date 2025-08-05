import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { CountdownTimer } from './countdown-timer';
import { ProductCard } from '@/components/products/product-card';
import { nigerianProducts } from '@/lib/data';

export function FlashSaleSection() {
  const flashSaleProducts = nigerianProducts.filter(product => product.onSale).slice(0, 4);

  return (
    <section className="py-20 gradient-flash gradient-animated relative overflow-hidden" data-testid="flash-sale-section">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-accent/30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary/20 rounded-full animate-spin"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Flash Sale Header */}
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center bg-gradient-to-r from-accent via-primary to-accent text-white px-8 py-4 rounded-full mb-6 shadow-2xl relative overflow-hidden group"
            style={{
              boxShadow: '0 0 40px hsl(0, 85%, 67%), 0 0 60px hsl(186, 100%, 60%)'
            }}
            initial={{ scale: 0.5, opacity: 0, rotateY: 180 }}
            whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            data-testid="flash-sale-badge"
          >
            <span className="absolute inset-0 shimmer-effect animate-shimmer opacity-30"></span>
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              <Zap className="w-6 h-6 mr-3 text-yellow-300 animate-glow" />
            </motion.div>
            <span className="font-bold text-xl relative z-10">Flash Sale - Limited Time!</span>
          </motion.div>
          
          {/* Countdown Timer */}
          <CountdownTimer />
          
          <motion.p 
            className="text-foreground text-xl mt-8 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            data-testid="flash-sale-description"
          >
            <motion.span
              animate={{ color: ["hsl(var(--foreground))", "hsl(var(--accent))", "hsl(var(--foreground))"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Don't miss out on these amazing deals!
            </motion.span>
          </motion.p>
        </div>

        {/* Enhanced Flash Sale Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {flashSaleProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ y: 100, opacity: 0, scale: 0.8 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.7,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              {/* Decorative glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 rounded-3xl opacity-20 blur animate-pulse"></div>
              <div className="relative">
                <ProductCard product={product} showSaleBadge />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
