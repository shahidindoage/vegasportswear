export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface Category {
  id: string;
  title: string;
  image: string;
  link: string;
  description?: string;
}

export interface TrainingType {
  id: string;
  title: string;
  image: string;
}
