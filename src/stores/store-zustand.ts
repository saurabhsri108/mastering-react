import { create } from "zustand";

type StoreState = {
  user: string;
  cartCount: number;
  login: Function;
  logout: Function;
  addToCart: Function;
};

const useStore = create<StoreState>((set) => ({
  user: "",
  cartCount: 0,
  login: () =>
    set(() => ({
      user: "Vasu",
    })),
  logout: () =>
    set(() => ({
      user: "",
    })),
  addToCart: () =>
    set((state) => ({
      cartCount: state.cartCount + 1,
    })),
}));

export const useLogin = () => useStore((state) => state.login);
export const useLogout = () => useStore((state) => state.logout);
export const useAddToCart = () => useStore((state) => state.addToCart);
export const useUser = () => useStore((state) => state.user);
export const useCartCount = () => useStore((state) => state.cartCount);
