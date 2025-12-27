
import { Product } from './types';

export const NAV_LINKS = [
  { label: 'Início', href: '#hero' },
  { label: 'Destaque', href: '#destaque' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Newsletter', href: '#newsletter' },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Air Max Pulse',
    brand: 'Nike',
    description: 'Design futurista com amortecimento de ponta para o asfalto.',
    price: 899.90,
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
    category: 'Casual',
    isNew: true,
    tags: ['Nike', 'AirMax', 'Casual']
  },
  {
    id: '2',
    name: 'Yeezy Boost 350',
    brand: 'Adidas',
    description: 'O ícone do streetwear global na sua melhor forma.',
    price: 1290.00,
    originalPrice: 1500.00,
    imageUrl: 'https://images.unsplash.com/photo-1584735175315-9d58202f83c4?auto=format&fit=crop&q=80&w=800',
    category: 'Estilo de Vida',
    isSale: true,
    isBestSeller: true,
    tags: ['Adidas', 'Yeezy', 'Premium']
  },
  {
    id: '3',
    name: 'New Balance 550',
    brand: 'New Balance',
    description: 'Estética retro que domina as ruas de NY e Londres.',
    price: 749.00,
    imageUrl: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800',
    category: 'Retro',
    isNew: true,
    tags: ['New Balance', 'Retro']
  },
  {
    id: '4',
    name: 'RS-X Reinvent',
    brand: 'Puma',
    description: 'Cores vibrantes e silhueta ousada para quem não tem medo de brilhar.',
    price: 599.90,
    imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800',
    category: 'Moderno',
    tags: ['Puma', 'RS-X']
  },
  {
    id: '5',
    name: 'Old Skool Pro',
    brand: 'Vans',
    description: 'O clássico indestrutível para qualquer rolê urbano.',
    price: 349.00,
    imageUrl: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800',
    category: 'Skate',
    tags: ['Vans', 'Clássico']
  },
  {
    id: '6',
    name: 'Club C 85',
    brand: 'Reebok',
    description: 'Minimalismo sofisticado para o dia a dia premium.',
    price: 459.00,
    imageUrl: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800',
    category: 'Minimalista',
    tags: ['Reebok', 'Limpo']
  }
];
