import { db } from "./db";
import { products } from "@shared/schema";

const sampleProducts = [
  {
    name: "Rice - 50kg bag",
    description: "Premium quality Nigerian rice from Kebbi State. Perfect for family meals and special occasions. Locally grown and processed.",
    price: "115000",
    originalPrice: "130000",
    category: "grains",
    image: "/api/placeholder/400/300",
    stock: 50,
    rating: "4.8",
    reviewCount: 125,
    onSale: true,
    salePercentage: 12
  },
  {
    name: "Fresh Yam Tubers - 5kg",
    description: "Fresh yam tubers from Oyo State. Perfect for pounding yam, boiling, or frying. High quality and freshly harvested.",
    price: "8500",
    originalPrice: "10000", 
    category: "tubers",
    image: "/api/placeholder/400/300",
    stock: 30,
    rating: "4.6",
    reviewCount: 87,
    onSale: true,
    salePercentage: 15
  },
  {
    name: "Fresh Cassava - 10kg",
    description: "Fresh cassava roots perfect for making fufu, garri, or cassava flour. Sourced directly from local farmers.",
    price: "5000",
    category: "tubers", 
    image: "/api/placeholder/400/300",
    stock: 25,
    rating: "4.5",
    reviewCount: 62,
    onSale: false,
    salePercentage: 0
  },
  {
    name: "Live Catfish - 2kg",
    description: "Fresh live catfish from our partner fish farms. Perfect for pepper soup, stew, or grilling. Delivered alive and fresh.",
    price: "12000",
    originalPrice: "14000",
    category: "protein",
    image: "/api/placeholder/400/300", 
    stock: 15,
    rating: "4.9",
    reviewCount: 156,
    onSale: true,
    salePercentage: 14
  },
  {
    name: "Dried Pepper Mix - 1kg",
    description: "Premium blend of dried peppers including scotch bonnet, cayenne, and bell peppers. Perfect for Nigerian soups and stews.",
    price: "3500",
    category: "spices",
    image: "/api/placeholder/400/300",
    stock: 100,
    rating: "4.7", 
    reviewCount: 203,
    onSale: false,
    salePercentage: 0
  },
  {
    name: "Palm Oil - 4 liters",
    description: "Pure red palm oil from fresh palm fruits. Perfect for cooking Nigerian dishes. Unrefined and natural.",
    price: "8000",
    originalPrice: "9000",
    category: "oils", 
    image: "/api/placeholder/400/300",
    stock: 40,
    rating: "4.8",
    reviewCount: 178,
    onSale: true,
    salePercentage: 11
  },
  {
    name: "Sweet Plantain - 12 pieces",
    description: "Ripe sweet plantains perfect for dodo (fried plantain) or plantain porridge. Naturally sweet and fresh.",
    price: "2500",
    category: "fruits",
    image: "/api/placeholder/400/300",
    stock: 60,
    rating: "4.4",
    reviewCount: 94,
    onSale: false,
    salePercentage: 0
  },
  {
    name: "Goat Meat - 3kg",
    description: "Fresh goat meat from free-range goats. Perfect for pepper soup, stew, or suya. Cut into convenient portions.",
    price: "25000",
    originalPrice: "28000",
    category: "protein",
    image: "/api/placeholder/400/300", 
    stock: 8,
    rating: "4.9",
    reviewCount: 89,
    onSale: true,
    salePercentage: 11
  }
];

export async function seedDatabase() {
  try {
    console.log("Seeding database with sample products...");
    
    for (const product of sampleProducts) {
      await db.insert(products).values(product).onConflictDoNothing();
    }
    
    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

// Run seeding
seedDatabase().then(() => process.exit(0));