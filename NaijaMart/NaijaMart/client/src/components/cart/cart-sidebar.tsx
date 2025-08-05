import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useCart } from '@/hooks/use-cart';

export function CartSidebar() {
  const { items, totalItems, totalPrice, updateQuantity, removeItem, clearCart, isOpen, setIsOpen } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
            data-testid="cart-overlay"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-2xl z-50"
            data-testid="cart-sidebar"
          >
            <div className="flex flex-col h-full">
              {/* Cart Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-xl font-bold text-dark flex items-center">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Shopping Cart
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  data-testid="button-close-cart"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {items.length === 0 ? (
                  <div className="text-center py-8">
                    <ShoppingBag className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-500" data-testid="text-empty-cart">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <Card key={item.id} className="p-4" data-testid={`cart-item-${item.product.id}`}>
                        <div className="flex items-center space-x-4">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-16 h-16 object-cover rounded-lg"
                            data-testid={`img-cart-${item.product.id}`}
                          />
                          <div className="flex-1">
                            <h4 className="font-medium" data-testid={`text-cart-name-${item.product.id}`}>
                              {item.product.name}
                            </h4>
                            <p className="text-sm text-gray-600" data-testid={`text-cart-price-${item.product.id}`}>
                              {formatPrice(item.product.price)}
                            </p>
                            <div className="flex items-center space-x-2 mt-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="w-8 h-8"
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                data-testid={`button-decrease-${item.product.id}`}
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                              <span className="font-medium min-w-[20px] text-center" data-testid={`text-quantity-${item.product.id}`}>
                                {item.quantity}
                              </span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="w-8 h-8"
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                data-testid={`button-increase-${item.product.id}`}
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-red-500 hover:text-red-700"
                            onClick={() => removeItem(item.product.id)}
                            data-testid={`button-remove-${item.product.id}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart Footer */}
              {items.length > 0 && (
                <div className="border-t p-6">
                  <Button
                    variant="ghost"
                    className="w-full text-center text-gray-600 hover:text-gray-800 mb-4"
                    onClick={clearCart}
                    data-testid="button-clear-cart"
                  >
                    Clear Cart
                  </Button>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-2xl font-bold text-primary" data-testid="text-total-price">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                  
                  <Button 
                    className="w-full py-4 text-lg font-semibold"
                    data-testid="button-checkout"
                  >
                    Proceed to Checkout
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
