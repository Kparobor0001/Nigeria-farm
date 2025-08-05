export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;              // Changed from number to string
  originalPrice?: string | null;  // Changed from number to string
  category: string;
  image: string;
  stock: number;
  rating: string;             // Changed from number to string
  reviewCount: number;
  onSale: boolean;
  salePercentage: number;
  createdAt?: string;         // Added optional field
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
