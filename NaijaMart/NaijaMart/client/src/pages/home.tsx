import { HeroSection } from '@/components/hero/hero-section';
import { FlashSaleSection } from '@/components/flash-sale/flash-sale-section';
import { motion } from 'framer-motion';
import { ProductCard } from '@/components/products/product-card';
import { nigerianProducts } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight, Truck, Shield, Leaf } from 'lucide-react';

export default function Home() {
  const featuredProducts = nigerianProducts.slice(4, 8);

  const features = [
    {
      icon: Truck,
      title: 'Free Delivery',
      description: 'Free delivery in Lagos, Abuja & Port Harcourt for orders above ₦50,000',
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'Fresh produce sourced directly from trusted local farmers',
    },
    {
      icon: Leaf,
      title: 'Organic & Fresh',
      description: 'Pesticide-free, naturally grown produce for healthy living',
    },
  ];

  return (
    <div data-testid="home-page">
      <HeroSection />
      <FlashSaleSection />
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Nigerian Fresh?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering the freshest, highest quality produce 
              from Nigerian farms to your doorstep.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                data-testid={`feature-${index}`}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600">
              Discover our most popular fresh produce
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} showSaleBadge={false} />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all">
                View All Products
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Stay Fresh with Us</h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest updates on new products, special offers, and farming tips
            </p>
            <div className="max-w-md mx-auto flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-full">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
