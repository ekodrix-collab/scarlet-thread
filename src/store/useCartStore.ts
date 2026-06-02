import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CartItem {
  id: string; // Unique ID for the cart line item (since same product can have different personalizations)
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  personalization?: {
    name?: string;
    customText?: string;
    fontStyle?: string;
    fontColor?: string;
    photoUrl?: string | null;
  };
}

interface CartState {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'id'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item) => {
        const id = Math.random().toString(36).substring(2, 9)
        set((state) => ({ items: [...state.items, { ...item, id }] }))
      },
      
      removeItem: (id) => {
        set((state) => ({ items: state.items.filter((item) => item.id !== id) }))
      },
      
      updateQuantity: (id, quantity) => {
        set((state) => ({
          items: state.items.map((item) => 
            item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
          )
        }))
      },
      
      clearCart: () => set({ items: [] }),
      
      getTotal: () => {
        return get().items.reduce((total, item) => total + (item.price * item.quantity), 0)
      }
    }),
    {
      name: 'scarlet-thread-cart',
    }
  )
)
