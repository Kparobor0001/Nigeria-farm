import { motion } from 'framer-motion';
import { Leaf, Users, Award, Heart } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '500+', label: 'Local Farmers', icon: Users },
    { number: '10,000+', label: 'Happy Customers', icon: Heart },
    { number: '50+', label: 'Products', icon: Leaf },
    { number: '3', label: 'Years Experience', icon: Award },
  ];

  const values = [
    {
      title: 'Fresh & Organic',
      description: 'We source only the freshest, pesticide-free produce directly from local farmers.',
      icon: Leaf,
      color: 'text-green-600',
    },
    {
      title: 'Supporting Farmers',
      description: 'We partner with local Nigerian farmers to provide them with fair prices and sustainable income.',
      icon: Users,
      color: 'text-blue-600',
    },
    {
      title: 'Quality Assurance',
      description: 'Every product is carefully inspected to ensure it meets our high quality standards.',
      icon: Award,
      color: 'text-yellow-600',
    },
    {
      title: 'Community First',
      description: 'We believe in building strong communities through healthy, locally-sourced food.',
      icon: Heart,
      color: 'text-red-600',
    },
  ];

  return (
    <div className="min-h-screen bg-white" data-testid="about-page">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            data-testid="about-title"
          >
            About Nigerian Fresh
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
            data-testid="about-subtitle"
          >
            Connecting Nigerian farmers with families across the nation, delivering 
            fresh, organic produce straight from farm to table.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
                data-testid={`stat-${index}`}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Nigerian farmer"
                className="rounded-2xl shadow-xl w-full"
                data-testid="story-image"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6" data-testid="story-title">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6" data-testid="story-text-1">
                Nigerian Fresh was born from a simple belief: everyone deserves access to 
                fresh, healthy, and locally-grown produce. Founded in 2021, we started as 
                a small initiative to connect urban families with rural farmers.
              </p>
              <p className="text-gray-600 mb-6" data-testid="story-text-2">
                Today, we work with over 500 farmers across Nigeria, from the yam fields 
                of Benue to the cassava farms of Ogun State. Our mission is to create a 
                sustainable food ecosystem that benefits both farmers and consumers.
              </p>
              <p className="text-gray-600" data-testid="story-text-3">
                Every purchase you make helps support local farmers, promotes sustainable 
                agriculture, and brings you closer to the source of your food.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="values-title">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" data-testid="values-subtitle">
              These core values guide everything we do, from sourcing to delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                data-testid={`value-${index}`}
              >
                <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4`}>
                  <value.icon className={`w-6 h-6 ${value.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4" data-testid="cta-title">
              Join Our Mission
            </h2>
            <p className="text-xl mb-8 opacity-90" data-testid="cta-subtitle">
              Be part of the movement to support local farmers and enjoy fresh, healthy produce.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
              data-testid="cta-button"
            >
              Start Shopping
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
