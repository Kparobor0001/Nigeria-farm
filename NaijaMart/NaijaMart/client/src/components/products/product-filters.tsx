import { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { categories, sortOptions } from '@/lib/data';
import { FilterOptions } from '@/lib/types';

interface ProductFiltersProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
}

export function ProductFilters({ filters, onFiltersChange }: ProductFiltersProps) {
  const [priceRange, setPriceRange] = useState([filters.minPrice, filters.maxPrice]);

  const handleFilterChange = (key: keyof FilterOptions, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const handlePriceChange = (values: number[]) => {
    setPriceRange(values);
    onFiltersChange({ 
      ...filters, 
      minPrice: values[0], 
      maxPrice: values[1] 
    });
  };

  const clearFilters = () => {
    const defaultFilters: FilterOptions = {
      category: 'All Categories',
      sortBy: 'name-asc',
      minPrice: 0,
      maxPrice: 2000000,
      searchQuery: '',
    };
    onFiltersChange(defaultFilters);
    setPriceRange([0, 2000000]);
  };

  return (
    <Card className="sticky top-24" data-testid="product-filters">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center text-lg">
            <Filter className="w-5 h-5 mr-2" />
            Filters
          </CardTitle>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={clearFilters}
            className="text-primary hover:text-primary-light"
            data-testid="button-clear-filters"
          >
            Clear Filters
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Search */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Search
          </label>
          <div className="relative">
            <Input
              type="text"
              placeholder="Search products..."
              value={filters.searchQuery}
              onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
              className="pl-8"
              data-testid="input-search"
            />
            <Search className="w-4 h-4 absolute left-2 top-3 text-gray-400" />
          </div>
        </div>

        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <Select 
            value={filters.category} 
            onValueChange={(value) => handleFilterChange('category', value)}
          >
            <SelectTrigger data-testid="select-category">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Sort By */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sort By
          </label>
          <Select 
            value={filters.sortBy} 
            onValueChange={(value) => handleFilterChange('sortBy', value)}
          >
            <SelectTrigger data-testid="select-sort">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price Range
          </label>
          <div className="px-2 mb-4">
            <Slider
              value={priceRange}
              onValueChange={handlePriceChange}
              max={2000000}
              min={0}
              step={10000}
              className="w-full"
              data-testid="slider-price"
            />
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>₦{priceRange[0].toLocaleString()}</span>
            <span>₦{priceRange[1].toLocaleString()}+</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
