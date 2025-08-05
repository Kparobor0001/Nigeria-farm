import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/lib/types';
import { useCart } from '@/hooks/use-cart';
import { useFavorites } from '@/hooks/use-favorites';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  showSaleBadge?: boolean;
}

export function ProductCard({ product, showSaleBadge = true }: ProductCardProps) {
  const { addItem } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [isAdding, setIsAdding] = useState(false);
  const favorite = isFavorite(product.id);

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem(product);
    
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  const handleToggleFavorite = () => {
    toggleFavorite(product.id);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div 
      className="product-card-hover bg-card rounded-2xl shadow-xl overflow-hidden relative group"
      style={{
        boxShadow: '0 4px 20px hsl(220, 39%, 15%), 0 0 40px hsl(186, 100%, 10%)'
      }}
      whileHover={{ y: -12, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
      data-testid={`card-product-${product.id}`}
    >
      <div className="relative overflow-hidden">
        {product.onSale && showSaleBadge && (
          <motion.div
            className="absolute top-4 left-4 z-20"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Badge 
              className="bg-gradient-to-r from-accent via-primary to-accent text-white shadow-lg"
              style={{
                boxShadow: '0 0 20px hsl(0, 85%, 67%)'
              }}
              data-testid={`badge-sale-${product.id}`}
            >
              <motion.span
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                -{product.salePercentage}%
              </motion.span>
            </Badge>
          </motion.div>
        )}
        
        <motion.div
          className="absolute top-4 right-4 z-20"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <Button
            variant="ghost"
            size="icon"
            className={`w-12 h-12 backdrop-blur-sm rounded-full transition-all ${
              favorite ? 'text-accent bg-accent/10' : 'text-muted-foreground hover:text-accent bg-card/90'
            }`}
            style={{
              boxShadow: favorite ? '0 0 15px hsl(0, 85%, 67%)' : '0 0 10px hsl(220, 39%, 15%)'
            }}
            onClick={handleToggleFavorite}
            data-testid={`button-favorite-${product.id}`}
          >
            <motion.div
              animate={favorite ? { scale: [1, 1.3, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              <Heart className={`w-5 h-5 ${favorite ? 'fill-current' : ''}`} />
            </motion.div>
          </Button>
        </motion.div>
        
        <motion.div className="relative overflow-hidden">
          <motion.img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            data-testid={`img-product-${product.id}`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          {/* Hover overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
        </motion.div>
      </div>
      
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2 text-card-foreground" data-testid={`text-name-${product.id}`}>
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-3" data-testid={`text-description-${product.id}`}>
          {product.description}
        </p>
        
        <div className="flex items-center mb-3">
          <div className="flex text-yellow-400 text-sm mr-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} 
              />
            ))}
          </div>
          <span className="text-muted-foreground text-sm">({product.rating})</span>
          <span className="text-primary text-sm ml-auto" data-testid={`text-stock-${product.id}`}>
            Stock: {product.stock}
          </span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-primary" data-testid={`text-price-${product.id}`}>
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-lg text-muted-foreground line-through ml-2">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button 
            onClick={handleAddToCart}
            className={`w-full py-4 font-medium transition-all relative overflow-hidden group shadow-lg ${
              isAdding 
                ? 'bg-accent hover:bg-accent/90' 
                : 'bg-primary hover:bg-primary/80'
            }`}
            style={{
              boxShadow: isAdding 
                ? '0 0 25px hsl(0, 85%, 67%)' 
                : '0 0 25px hsl(186, 100%, 60%)'
            }}
            data-testid={`button-add-cart-${product.id}`}
          >
            <span className="absolute inset-0 shimmer-effect animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <motion.div
              className="flex items-center justify-center relative z-10"
              animate={isAdding ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={isAdding ? { rotate: [0, 360] } : {}}
                transition={{ duration: 0.5 }}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
              </motion.div>
              {isAdding ? 'Added!' : 'Add to Cart'}
            </motion.div>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
