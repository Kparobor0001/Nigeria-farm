export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  stock: number;
  rating: number;
  reviewCount: number;
  onSale: boolean;
  salePercentage: number;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface FilterOptions {
  category: string;
  sortBy: string;
  minPrice: number;
  maxPrice: number;
  searchQuery: string;
}
