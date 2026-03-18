import { Product, Category, TrainingType } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Vega Performance Jacket',
    price: 129.00,
    originalPrice: 159.00,
    image: 'p2.jpg',
    category: 'Men',
    rating: 4.8,
    reviews: 124,
    isNew: true,
  },
  {
    id: '2',
    name: 'Elite Training Shorts',
    price: 45.00,
    image: 'p3.jpg',
    category: 'Men',
    rating: 4.5,
    reviews: 89,
    isBestSeller: false,
  },
  {
    id: '3',
    name: 'Pro Compression Pant',
    price: 65.00,
    image: 'p6.jpg',
    category: 'Men',
    rating: 4.9,
    reviews: 210,
    isNew: true,
  },
  {
    id: '4',
    name: 'Velocity Running Tee',
    price: 38.00,
    image: 'p5.jpg',
    category: 'Men',
    rating: 4.7,
    reviews: 56,
  },
  {
    id: '5',
    name: 'Velocity Running Short',
    price: 25.00,
    image: 'p7.jpg',
    category: 'Men',
    rating: 4.6,
    reviews: 42,
    isBestSeller: true,
  },
  {
    id: '6',
    name: 'HydraFlow Running Short',
    price: 32.00,
    image: 'p8.jpg',
    category: 'Men',
    rating: 4.8,
    reviews: 156,
    isBestSeller: true,
  },
];

export const CATEGORIES: Category[] = [
  {
    id: 'men',
    title: 'Men\'s Collection',
    image: 'p9.jpg',
    link: '/men',
    description: 'Engineered for strength and endurance.',
  },
  {
    id: 'women',
    title: 'Women\'s Collection',
    image: 'https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F5OMVLK07oxcrwfkozMlJ3h%2Fc7650a09e6f1093754ca8ccafd86ea3b%2FHeadless_Cards_-_25720468.jpeg&w=1664&q=95',
    link: '/women',
    description: 'Performance meets style in every stitch.',
  },
  {
    id: 'accessories',
    title: 'Accessories',
    image: 'https://tyka.premierhostings.com/backend/storage/banners/4w2HAA2FzN7Jg8uBhXkmhGTggpkbkWkvAI0wOqjW.webp',
    link: '/accessories',
    description: 'The gear that completes your training.',
  },
];

export const TRAINING_TYPES: TrainingType[] = [
  { id: '1', title: 'Running', image: 'run.jpg' },
  { id: '2', title: 'Lifting', image: 'lift.jpg' },
  { id: '3', title: 'HIIT', image: 'hiit.jpg' },
  { id: '4', title: 'Yoga', image: 'yoga.jpg' },
];

export const ATHLETES = [
  {
    id: '1',
    name: 'Marcus Thorne',
    discipline: 'Elite Sprinter',
    image: 'p10.jpg',
    quote: 'Vega gear gives me the 1% edge I need on the track.'
  },
  {
    id: '2',
    name: 'Elena Vance',
    discipline: 'Crossfit Champion',
    image: 'https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F22060BiT4WEqB1reTHaAV8%2F26529f8c69467d3563e99c7e2fe9abcb%2FHeadless_Cards_-_25661344__1_.jpeg&w=1664&q=95',
    quote: 'Durability is everything. Vega never lets me down.'
  },
  {
    id: '3',
    name: 'David Chen',
    discipline: 'Ultra Marathoner',
    image: 'p11.jpg',
    quote: 'The thermal regulation in the Pro series is unmatched.'
  }
];

export const TECH_FEATURES = [
  {
    id: '1',
    title: 'Carbon-Fiber Weave',
    description: 'Ultra-lightweight structural support that moves with your body.',
    icon: 'Cpu'
  },
  {
    id: '2',
    title: 'Thermal-Regulating Mesh',
    description: 'Advanced moisture-wicking technology for peak climate control.',
    icon: 'Zap'
  },
  {
    id: '3',
    title: 'Kinetic Compression',
    description: 'Targeted muscle support to reduce fatigue and accelerate recovery.',
    icon: 'Shield'
  }
];

export const COMMUNITY_POSTS = [
  { id: '1', image: 'c4.jpg', user: '@alex_trains' },
  { id: '2', image: 'c2.jpg', user: '@sarah_lifts' },
  { id: '3', image: 'c1.jpg', user: '@mike_runs' },
  { id: '4', image: 'c5.jpg', user: '@yoga_flow' },
  { id: '5', image: 'c3.jpg', user: '@power_pulse' },
];
