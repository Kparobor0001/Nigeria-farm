import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, User, Menu, Truck, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/use-cart';
import { LoginModal } from '@/components/auth/login-modal';

export function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { totalItems, setIsOpen: setCartOpen } = useCart();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActiveLink = (href: string) => {
    if (href === '/' && location === '/') return true;
    if (href !== '/' && location.startsWith(href)) return true;
    return false;
  };

  const handleCartClick = () => {
    setCartOpen(true);
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  return (
    <>
      <motion.nav 
        className="sticky top-0 z-50 bg-background/95 backdrop-blur-md shadow-2xl border-b border-border" 
        data-testid="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Enhanced Promotional Banner */}
        <motion.div 
          className="gradient-animated text-white text-center py-3 text-sm relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="container mx-auto px-4 flex items-center justify-between relative z-10">
            <motion.div 
              className="flex items-center"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Truck className="w-4 h-4 mr-2" />
              </motion.div>
              <span className="text-shadow-glow">Free delivery in Lagos, Abuja & Port Harcourt</span>
            </motion.div>
            <div className="hidden sm:flex items-center">
              <motion.span
                animate={{ opacity: [1, 0.8, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-shadow-glow"
              >
                Fresh from farm to your table
              </motion.span>
              <Button variant="ghost" size="sm" className="ml-2 text-white hover:text-gray-200 backdrop-blur-custom rounded-full">
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-1 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <div className="absolute top-2 right-20 w-1 h-1 bg-white rounded-full animate-ping"></div>
              <div className="absolute bottom-1 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
            </div>
          </div>
        </motion.div>
        
        {/* Main Navigation */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="flex items-center space-x-3 group" data-testid="link-logo">
                <motion.div
                  className="relative p-2 bg-primary rounded-full"
                  style={{
                    boxShadow: '0 0 20px hsl(186, 100%, 60%)'
                  }}
                  animate={{ 
                    rotate: [0, 360],
                    boxShadow: [
                      '0 0 20px hsl(186, 100%, 60%)',
                      '0 0 30px hsl(0, 85%, 67%)',
                      '0 0 20px hsl(186, 100%, 60%)'
                    ]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    boxShadow: { duration: 3, repeat: Infinity }
                  }}
                >
                  <Leaf className="h-10 w-10 text-background" />
                </motion.div>
                <div>
                  <motion.h1 
                    className="text-xl font-bold text-foreground group-hover:text-primary transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    Nigerian Fresh
                  </motion.h1>
                  <motion.p 
                    className="text-xs text-muted-foreground group-hover:text-primary transition-colors"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Farm to Future
                  </motion.p>
                </div>
              </Link>
            </motion.div>

            {/* Enhanced Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                      isActiveLink(link.href)
                        ? 'text-primary font-medium bg-primary/10 border border-primary/20'
                        : 'text-foreground hover:text-primary hover:bg-primary/5'
                    }`}
                    data-testid={`link-${link.label.toLowerCase()}`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {isActiveLink(link.href) && (
                      <motion.div
                        className="absolute inset-0 shimmer-effect animate-shimmer opacity-30 rounded-full"
                        layoutId="activeNavBackground"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Search Bar */}
            <motion.div 
              className="hidden lg:flex flex-1 max-w-md mx-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="relative w-full group">
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 rounded-full border-2 border-border focus:border-primary transition-all duration-300 group-hover:shadow-lg backdrop-blur-sm bg-card text-foreground"
                  data-testid="input-search"
                />
                <motion.div
                  className="absolute left-4 top-1/2 transform -translate-y-1/2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Search className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.div>
                {searchQuery && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-glow opacity-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                  />
                )}
              </div>
            </motion.div>

            {/* Enhanced Action Buttons */}
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  onClick={handleCartClick}
                  className="bg-primary hover:bg-primary/80 text-background rounded-full shadow-lg relative overflow-hidden group"
                  style={{
                    boxShadow: '0 0 20px hsl(186, 100%, 60%)'
                  }}
                  data-testid="button-cart"
                >
                  <span className="absolute inset-0 shimmer-effect animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <motion.div
                    className="flex items-center relative z-10"
                    animate={totalItems > 0 ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">Cart</span>
                  </motion.div>
                  {totalItems > 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      <Badge className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-6 h-6 flex items-center justify-center p-0 shadow-lg animate-pulse">
                        {totalItems}
                      </Badge>
                    </motion.div>
                  )}
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Button
                  onClick={handleLoginClick}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-lg relative overflow-hidden group"
                  style={{
                    boxShadow: '0 0 20px hsl(0, 85%, 67%)'
                  }}
                  data-testid="button-login"
                >
                  <span className="absolute inset-0 shimmer-effect animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <div className="flex items-center relative z-10">
                    <User className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">Login</span>
                  </div>
                </Button>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden backdrop-blur-custom border-glow rounded-full"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  data-testid="button-mobile-menu"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-gray-200"
              data-testid="mobile-menu"
            >
              <div className="pt-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block py-2 px-4 rounded transition-colors ${
                      isActiveLink(link.href)
                        ? 'text-primary bg-primary/10 font-medium'
                        : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`mobile-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Link>
                ))}
                
                {/* Mobile Search */}
                <div className="pt-4">
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                      data-testid="input-mobile-search"
                    />
                    <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  );
}
