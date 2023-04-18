import { useState, ReactNode, useCallback } from "react";
import { createContext, useContextSelector } from "use-context-selector";

type StoreContextType = {
  user: string;
  cartCount: number;
  login: () => void;
  logout: () => void;
  addToCart: () => void;
};

const useStore = (): StoreContextType => {
  const [user, setUser] = useState("");
  const [cartCount, setCartCount] = useState(0);

  return {
    user,
    cartCount,
    login: useCallback(() => setUser("Vasu"), []),
    logout: useCallback(() => setUser(""), []),
    addToCart: useCallback(() => setCartCount((prev) => prev + 1), []),
  };
};

const StoreContext = createContext<StoreContextType | null>(null);

export const StoreContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StoreContext.Provider value={useStore()}>{children}</StoreContext.Provider>
  );
};

export const useLogin = () =>
  useContextSelector(StoreContext, (state) => state!.login);
export const useLogout = () =>
  useContextSelector(StoreContext, (state) => state!.logout);
export const useAddToCart = () =>
  useContextSelector(StoreContext, (state) => state!.addToCart);
export const useUser = () =>
  useContextSelector(StoreContext, (state) => state!.user);
export const useCartCount = () =>
  useContextSelector(StoreContext, (state) => state!.cartCount);
