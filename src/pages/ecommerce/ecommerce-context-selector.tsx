import { Inter } from "next/font/google";
import {
  useAddToCart,
  useCartCount,
  useLogin,
  useLogout,
  useUser,
  StoreContextProvider,
} from "../../stores/store-context-selector";
import Links from "@/components/links";

const inter = Inter({ subsets: ["latin"] });

const LoginSection = () => {
  const login = useLogin();
  const logout = useLogout();
  return (
    <div className="flex items-center justify-start gap-2 p-4 m-4 border border-gray-400">
      <button
        className="px-6 py-4 font-semibold bg-green-700 rounded-md text-green-50 hover:bg-green-800"
        onClick={() => login()}
      >
        Login
      </button>
      <button
        className="px-6 py-4 font-semibold bg-red-700 rounded-md text-red-50 hover:bg-red-800"
        onClick={() => logout()}
      >
        Logout
      </button>
    </div>
  );
};

const UserSection = () => {
  const user = useUser();
  return <div className="p-4 m-4 border border-gray-400">User: {user}</div>;
};

const AddToCartSection = () => {
  const addToCart = useAddToCart();
  return (
    <div className="p-4 m-4 border border-gray-400">
      <button
        className="px-6 py-4 font-semibold bg-green-700 rounded-md text-green-50 hover:bg-green-800"
        onClick={() => addToCart()}
      >
        Add to cart
      </button>
    </div>
  );
};

const CartCountSection = () => {
  const cartCount = useCartCount();
  return (
    <div className="p-4 m-4 border border-gray-400">
      Cart Count: {cartCount}
    </div>
  );
};

const ContextSelectorCommerce = () => {
  return (
    <main className={`${inter.className} w-full`}>
      <h1 className="m-4 text-xl font-bold">Zustand Commerce</h1>
      <div className="m-4 border border-gray-400">
        <LoginSection />
        <UserSection />
        <AddToCartSection />
        <CartCountSection />
      </div>
      <Links />
    </main>
  );
};

export default function ZustandContextWrapper() {
  return (
    <StoreContextProvider>
      <ContextSelectorCommerce />
    </StoreContextProvider>
  );
}
