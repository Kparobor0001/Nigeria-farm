import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '@/components/products/product-card';
import { ProductFilters } from '@/components/products/product-filters';
import { nigerianProducts } from '@/lib/data';
import { FilterOptions, Product } from '@/lib/types';
import { Button } from '@/components/ui/button';

export default function Products() {
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'All Categories',
    sortBy: 'name-asc',
    minPrice: 0,
    maxPrice: 2000000,
    searchQuery: '',
  });

  const [visibleProducts, setVisibleProducts] = useState(12);

  const filteredProducts = useMemo(() => {
    let filtered = [...nigerianProducts];

    // Apply search filter
    if (filters.searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(filters.searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (filters.category !== 'All Categories') {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    // Apply price filter
    filtered = filtered.filter(product =>
      product.price >= filters.minPrice && product.price <= filters.maxPrice
    );

    // Apply sorting
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return b.id.localeCompare(a.id);
        default:
          return 0;
      }
    });

    return filtered;
  }, [filters]);

  const handleLoadMore = () => {
    setVisibleProducts(prev => prev + 12);
  };

  return (
    <div className="min-h-screen bg-gray-50" data-testid="products-page">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <ProductFilters filters={filters} onFiltersChange={setFilters} />
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-gray-900"
                data-testid="products-title"
              >
                Our Products
              </motion.h1>
              <span className="text-gray-600" data-testid="products-count">
                {filteredProducts.length} products found
              </span>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12" data-testid="no-products">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your filters or search query</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="products-grid">
                  {filteredProducts.slice(0, visibleProducts).map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </div>

                {/* Load More Button */}
                {visibleProducts < filteredProducts.length && (
                  <div className="text-center mt-12">
                    <Button
                      onClick={handleLoadMore}
                      className="bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all"
                      data-testid="button-load-more"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Load More Products
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
