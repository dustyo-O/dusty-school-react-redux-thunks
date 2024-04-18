export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: 'Apple' | 'Samsung' | 'OPPO' | 'Huawei' | 'Microsoft Surface' | 'Infinix' | 'HP Pavilion' | 'Impression of Acqua Di Gio' | 'Royal_Mirage' | 'Fog Scent Xpressio' | 'Al Munakh' | 'Lord - Al-Rehab' | "L'Oreal Paris" | 'Hemani Tea' | 'Dermive' | 'ROREC White Rice' | 'Fair & Clear' | 'Saaf & Khaas' | 'Bake Parlor Big' | 'Baking Food Items' | 'fauji' | 'Dry Rose' | 'Boho Decor' | 'Flying Wooden' | 'LED Lights' | 'luxury palace' | 'Golden' | 'Furniture Bed Set' | 'Ratttan Outdoor' | 'Kitchen Shelf' | 'Multi Purpose' | 'AmnaMart' | 'Professional Wear' | 'Soft Cotton' | 'Top Sweater' | 'RED MICKY MOUSE..' | 'Digital Printed' | 'Ghazi Fabric' | 'IELGY' | 'IELGY fashion' | 'Synthetic Leather' | 'Sandals Flip Flops' | 'Maasai Sandals' | 'Arrivals Genuine' | 'Vintage Apparel' | 'FREE FIRE' | 'The Warehouse' | 'Sneakers' | 'Rubber' | 'Naviforce' | 'SKMEI 9117' | 'Strap Skeleton' | 'Stainless' | 'Eastern Watches' | 'Luxury Digital' | 'Watch Pearls' | 'Bracelet' | 'LouisWill' | 'Copenhagen Luxe' | 'Steal Frame' | 'Darojay' | 'Fashion Jewellery' | 'Cuff Butterfly' | 'Designer Sun Glasses' | 'mastar watch' | 'Car Aux' | 'W1209 DC12V' | 'TC Reusable' | 'Neon LED Light' | 'METRO 70cc Motorcycle - MR70' | 'BRAVE BULL' | 'shock absorber' | 'JIEPOLLY' | 'Xiangle' | 'lightingbrilliance' | 'Ifei Home' | 'DADAWU' | 'YIOSI';
  category: 'smartphones' | 'laptops' | 'fragrances' | 'skincare' | 'groceries' | 'home-decoration' | 'furniture' | 'tops' | 'womens-dresses' | 'womens-shoes' | 'mens-shirts' | 'mens-shoes' | 'mens-watches' | 'womens-watches' | 'womens-bags' | 'womens-jewellery' | 'sunglasses' | 'automotive' | 'motorcycle' | 'lighting';
  thumbnail: string;
  images: string[];
};

export type StateOfProduct = {
  deleting?: boolean;
};

export type ProductWithState = Product & StateOfProduct;

export type CreateProductPayload = Pick<Product, 'title' | 'description'>;
