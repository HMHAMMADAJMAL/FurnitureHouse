// Mock product data for the furniture showroom app
const mockProducts = [
  {
    id: 1,
    name: "Modern Leather Sofa",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
    category: "Sofa Sets",
    rating: 4.5,
    reviews: 128,
    isNew: true,
    discount: 15,
    features: [
      "Premium leather upholstery",
      "Sturdy wooden frame",
      "High-density foam cushions",
      "Easy to clean and maintain"
    ]
  },
  {
    id: 2,
    name: "Queen Size Bed Frame",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c",
    category: "Beds",
    rating: 4.8,
    reviews: 256,
    isNew: false,
    discount: 0,
    features: [
      "Solid wood construction",
      "Modern design",
      "Available in multiple sizes"
    ]
  },
  {
    id: 3,
    name: "Classic Wooden Bed",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    category: "Beds",
    rating: 4.6,
    reviews: 180,
    isNew: true,
    discount: 10,
    features: [
      "Classic oak finish",
      "Durable slats",
      "Traditional headboard"
    ]
  },
  {
    id: 4,
    name: "Minimalist Platform Bed",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
    category: "Beds",
    rating: 4.7,
    reviews: 210,
    isNew: false,
    discount: 5,
    features: [
      "Low-profile design",
      "No box spring required",
      "Easy assembly"
    ]
  },
  {
    id: 5,
    name: "Luxury Upholstered Bed",
    price: 1099.99,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    category: "Beds",
    rating: 4.9,
    reviews: 320,
    isNew: true,
    discount: 20,
    features: [
      "Tufted headboard",
      "Soft fabric upholstery",
      "Sturdy frame"
    ]
  },
  {
    id: 6,
    name: "Rustic Pine Bed",
    price: 649.99,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    category: "Beds",
    rating: 4.4,
    reviews: 95,
    isNew: false,
    discount: 0,
    features: [
      "Natural pine wood",
      "Rustic finish",
      "Eco-friendly materials"
    ]
  },
  {
    id: 7,
    name: "Contemporary Storage Bed",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    category: "Beds",
    rating: 4.8,
    reviews: 210,
    isNew: true,
    discount: 12,
    features: [
      "Built-in storage drawers",
      "Modern look",
      "Space-saving design"
    ]
  },
  {
    id: 8,
    name: "Elegant Velvet Sofa",
    price: 1399.99,
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    category: "Sofa Sets",
    rating: 4.7,
    reviews: 142,
    isNew: true,
    discount: 10,
    features: [
      "Luxurious velvet fabric",
      "Solid wood legs",
      "Deep seating comfort",
      "Removable cushions"
    ]
  },
  {
    id: 9,
    name: "Contemporary Sectional Sofa",
    price: 1599.99,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657",
    category: "Sofa Sets",
    rating: 4.8,
    reviews: 198,
    isNew: false,
    discount: 12,
    features: [
      "Modular design",
      "Easy to rearrange",
      "Durable fabric upholstery",
      "Spacious seating"
    ]
  },
  {
    id: 10,
    name: "Classic Chesterfield Sofa",
    price: 1499.99,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
    category: "Sofa Sets",
    rating: 4.9,
    reviews: 220,
    isNew: true,
    discount: 18,
    features: [
      "Button-tufted backrest",
      "Rolled arms",
      "Premium leather",
      "Timeless design"
    ]
  },
  {
    id: 11,
    name: "Scandinavian Fabric Sofa",
    price: 1199.99,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    category: "Sofa Sets",
    rating: 4.6,
    reviews: 110,
    isNew: false,
    discount: 8,
    features: [
      "Minimalist style",
      "Light wood legs",
      "Soft fabric",
      "Compact size"
    ]
  },
  {
    id: 12,
    name: "Family Recliner Sofa",
    price: 1799.99,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    category: "Sofa Sets",
    rating: 4.7,
    reviews: 175,
    isNew: true,
    discount: 15,
    features: [
      "Reclining seats",
      "Cup holders",
      "Plush armrests",
      "Spacious for families"
    ]
  },
  {
    id: 13,
    name: "Urban L-Shaped Sofa",
    price: 1699.99,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    category: "Sofa Sets",
    rating: 4.5,
    reviews: 130,
    isNew: false,
    discount: 10,
    features: [
      "L-shaped for corners",
      "Removable covers",
      "Modern look",
      "Space-saving design"
    ]
  },
  {
    id: 14,
    name: "Luxury Curved Sofa",
    price: 1899.99,
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    category: "Sofa Sets",
    rating: 4.9,
    reviews: 210,
    isNew: true,
    discount: 20,
    features: [
      "Curved silhouette",
      "High-end velvet",
      "Statement piece",
      "Extra deep seats"
    ]
  },
  {
    id: 15,
    name: "Retro Mid-Century Sofa",
    price: 1099.99,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    category: "Sofa Sets",
    rating: 4.4,
    reviews: 90,
    isNew: false,
    discount: 5,
    features: [
      "Tapered legs",
      "Classic mid-century style",
      "Durable fabric",
      "Compact for apartments"
    ]
  },
  {
    id: 16,
    name: "Convertible Sleeper Sofa",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
    category: "Sofa Sets",
    rating: 4.6,
    reviews: 105,
    isNew: true,
    discount: 14,
    features: [
      "Easily converts to bed",
      "Hidden storage",
      "Perfect for guests",
      "Soft cushions"
    ]
  },
  {
    id: 17,
    name: "Petite Studio Sofa",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    category: "Sofa Sets",
    rating: 4.3,
    reviews: 80,
    isNew: false,
    discount: 7,
    features: [
      "Ideal for small spaces",
      "Lightweight",
      "Easy to move",
      "Simple design"
    ]
  },
  {
    id: 18,
    name: "Ergonomic Office Chair",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1519223400710-6da919e73c24",
    category: "Chairs",
    rating: 4.7,
    reviews: 120,
    isNew: true,
    discount: 10,
    features: [
      "Adjustable height",
      "Lumbar support",
      "Breathable mesh back",
      "Swivel base"
    ]
  },
  {
    id: 19,
    name: "Classic Wooden Dining Chair",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1503389152951-9c3d8b6e9c94",
    category: "Chairs",
    rating: 4.5,
    reviews: 85,
    isNew: false,
    discount: 5,
    features: [
      "Solid wood construction",
      "Comfortable seat",
      "Traditional design",
      "Durable finish"
    ]
  },
  {
    id: 20,
    name: "Modern Accent Chair",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    category: "Chairs",
    rating: 4.6,
    reviews: 98,
    isNew: true,
    discount: 8,
    features: [
      "Stylish fabric",
      "Metal legs",
      "Compact size",
      "Great for living rooms"
    ]
  },
  {
    id: 21,
    name: "Reclining Lounge Chair",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    category: "Chairs",
    rating: 4.8,
    reviews: 110,
    isNew: false,
    discount: 12,
    features: [
      "Reclining back",
      "Padded armrests",
      "Soft upholstery",
      "Perfect for relaxation"
    ]
  },
  {
    id: 22,
    name: "Minimalist Bar Stool",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    category: "Chairs",
    rating: 4.4,
    reviews: 60,
    isNew: true,
    discount: 6,
    features: [
      "Sleek design",
      "Metal frame",
      "Comfortable seat",
      "Space-saving"
    ]
  },
  // Tables & Dining
  {
    id: 23,
    name: "Modern Glass Dining Table",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    category: "Tables & Dining",
    rating: 4.7,
    reviews: 90,
    isNew: true,
    discount: 10,
    features: [
      "Tempered glass top",
      "Chrome legs",
      "Seats 6",
      "Easy to clean"
    ]
  },
  {
    id: 24,
    name: "Rustic Farmhouse Table",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
    category: "Tables & Dining",
    rating: 4.8,
    reviews: 120,
    isNew: false,
    discount: 15,
    features: [
      "Solid pine wood",
      "Distressed finish",
      "Seats 8",
      "Sturdy build"
    ]
  },
  {
    id: 25,
    name: "Compact Breakfast Table",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
    category: "Tables & Dining",
    rating: 4.5,
    reviews: 70,
    isNew: true,
    discount: 7,
    features: [
      "Space-saving design",
      "Round top",
      "Perfect for small kitchens",
      "Easy assembly"
    ]
  },
  {
    id: 26,
    name: "Extendable Dining Table",
    price: 1199.99,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    category: "Tables & Dining",
    rating: 4.9,
    reviews: 140,
    isNew: true,
    discount: 18,
    features: [
      "Extendable leaves",
      "Seats up to 10",
      "Modern look",
      "Durable surface"
    ]
  },
  {
    id: 27,
    name: "Classic Wooden Coffee Table",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1503389152951-9c3d8b6e9c94",
    category: "Tables & Dining",
    rating: 4.6,
    reviews: 80,
    isNew: false,
    discount: 5,
    features: [
      "Solid wood",
      "Lower shelf",
      "Classic design",
      "Easy to maintain"
    ]
  },
  // Wardrobes
  {
    id: 28,
    name: "Spacious Sliding Wardrobe",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    category: "Wardrobes",
    rating: 4.8,
    reviews: 110,
    isNew: true,
    discount: 15,
    features: [
      "Sliding doors",
      "Large storage",
      "Modern finish",
      "Mirror panels"
    ]
  },
  {
    id: 29,
    name: "Classic 3-Door Wardrobe",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    category: "Wardrobes",
    rating: 4.6,
    reviews: 90,
    isNew: false,
    discount: 10,
    features: [
      "Solid wood",
      "Spacious shelves",
      "Hanging rail",
      "Classic design"
    ]
  },
  {
    id: 30,
    name: "Minimalist White Wardrobe",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    category: "Wardrobes",
    rating: 4.5,
    reviews: 70,
    isNew: true,
    discount: 8,
    features: [
      "Matte white finish",
      "Soft-close doors",
      "Adjustable shelves",
      "Modern look"
    ]
  },
  {
    id: 31,
    name: "Compact Kids Wardrobe",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
    category: "Wardrobes",
    rating: 4.4,
    reviews: 60,
    isNew: false,
    discount: 6,
    features: [
      "Child-friendly design",
      "Bright colors",
      "Easy to open",
      "Safe materials"
    ]
  },
  {
    id: 32,
    name: "Luxury Mirrored Wardrobe",
    price: 1599.99,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
    category: "Wardrobes",
    rating: 4.9,
    reviews: 130,
    isNew: true,
    discount: 20,
    features: [
      "Full-length mirrors",
      "Soft-close drawers",
      "Elegant design",
      "Spacious interior"
    ]
  },
  // Home Decor
  {
    id: 33,
    name: "Modern Wall Art Set",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    category: "Home Decor",
    rating: 4.7,
    reviews: 80,
    isNew: true,
    discount: 10,
    features: [
      "Set of 3 pieces",
      "Abstract design",
      "Ready to hang",
      "Vibrant colors"
    ]
  },
  {
    id: 34,
    name: "Decorative Ceramic Vase",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    category: "Home Decor",
    rating: 4.5,
    reviews: 60,
    isNew: false,
    discount: 5,
    features: [
      "Handmade ceramic",
      "Glossy finish",
      "Unique shape",
      "Perfect for flowers"
    ]
  },
  {
    id: 35,
    name: "Luxury Throw Pillow",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    category: "Home Decor",
    rating: 4.6,
    reviews: 70,
    isNew: true,
    discount: 8,
    features: [
      "Soft velvet cover",
      "Removable insert",
      "Trendy patterns",
      "Machine washable"
    ]
  },
  {
    id: 36,
    name: "Minimalist Table Lamp",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    category: "Home Decor",
    rating: 4.8,
    reviews: 90,
    isNew: false,
    discount: 12,
    features: [
      "LED bulb included",
      "Matte finish",
      "Compact size",
      "Modern look"
    ]
  },
  {
    id: 37,
    name: "Decorative Wall Mirror",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    category: "Home Decor",
    rating: 4.9,
    reviews: 110,
    isNew: true,
    discount: 15,
    features: [
      "Round shape",
      "Beveled edges",
      "Easy to hang",
      "Elegant design"
    ]
  },
  // Lighting
  {
    id: 38,
    name: "Modern Pendant Light",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
    category: "Lighting",
    rating: 4.7,
    reviews: 100,
    isNew: true,
    discount: 10,
    features: [
      "Adjustable height",
      "LED compatible",
      "Sleek design",
      "Easy installation"
    ]
  },
  {
    id: 39,
    name: "Classic Table Lamp",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    category: "Lighting",
    rating: 4.5,
    reviews: 60,
    isNew: false,
    discount: 5,
    features: [
      "Fabric shade",
      "Warm light",
      "Sturdy base",
      "Classic style"
    ]
  },
  {
    id: 40,
    name: "Luxury Chandelier",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
    category: "Lighting",
    rating: 4.8,
    reviews: 90,
    isNew: true,
    discount: 15,
    features: [
      "Crystal accents",
      "Multiple bulbs",
      "Elegant design",
      "Dimmable"
    ]
  },
  {
    id: 41,
    name: "Industrial Floor Lamp",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1503389152951-9c3d8b6e9c94",
    category: "Lighting",
    rating: 4.6,
    reviews: 70,
    isNew: false,
    discount: 8,
    features: [
      "Metal frame",
      "Adjustable head",
      "Sturdy base",
      "Industrial style"
    ]
  },
  {
    id: 42,
    name: "Minimalist Wall Sconce",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    category: "Lighting",
    rating: 4.4,
    reviews: 60,
    isNew: true,
    discount: 6,
    features: [
      "Wall mount",
      "LED compatible",
      "Modern look",
      "Space-saving"
    ]
  },
  // Outdoor Furniture
  {
    id: 43,
    name: "Patio Lounge Set",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    category: "Outdoor Furniture",
    rating: 4.8,
    reviews: 110,
    isNew: true,
    discount: 15,
    features: [
      "Weather-resistant",
      "Cushioned seats",
      "Table included",
      "Easy to clean"
    ]
  },
  {
    id: 44,
    name: "Outdoor Dining Set",
    price: 1199.99,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
    category: "Outdoor Furniture",
    rating: 4.7,
    reviews: 90,
    isNew: false,
    discount: 10,
    features: [
      "Seats 6",
      "Umbrella hole",
      "Durable frame",
      "Modern design"
    ]
  },
  {
    id: 45,
    name: "Hanging Egg Chair",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    category: "Outdoor Furniture",
    rating: 4.6,
    reviews: 70,
    isNew: true,
    discount: 8,
    features: [
      "Swing design",
      "Cushioned seat",
      "Sturdy stand",
      "Great for patios"
    ]
  },
  {
    id: 46,
    name: "Garden Bench",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    category: "Outdoor Furniture",
    rating: 4.5,
    reviews: 60,
    isNew: false,
    discount: 5,
    features: [
      "Solid wood",
      "Weatherproof finish",
      "Classic style",
      "Seats 3"
    ]
  },
  {
    id: 47,
    name: "Outdoor Chaise Lounge",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
    category: "Outdoor Furniture",
    rating: 4.4,
    reviews: 50,
    isNew: true,
    discount: 6,
    features: [
      "Adjustable back",
      "Cushioned seat",
      "Lightweight frame",
      "Easy to move"
    ]
  }
];

export default mockProducts; 