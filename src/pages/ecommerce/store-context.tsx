import { useState, createContext, useContext, ReactNode } from "react";

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
    login: () => setUser("Vasu"),
    logout: () => setUser(""),
    addToCart: () => setCartCount((prev) => prev + 1),
  };
};

const StoreContext = createContext<StoreContextType | null>(null);

export const StoreContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StoreContext.Provider value={useStore()}>{children}</StoreContext.Provider>
  );
};

export const useLogin = () => useContext(StoreContext)!.login;
export const useLogout = () => useContext(StoreContext)!.logout;
export const useAddToCart = () => useContext(StoreContext)!.addToCart;
export const useUser = () => useContext(StoreContext)!.user;
export const useCartCount = () => useContext(StoreContext)!.cartCount;
