import Links from "@/components/links";
import { Inter } from "next/font/google";
import {
  ReactNode,
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  useContext,
} from "react";

const inter = Inter({ subsets: ["latin"] });

type CounterContextValue = [number, Dispatch<SetStateAction<number>>];

const CounterContext = createContext<CounterContextValue | null>(null);

const CounterContextProvider = ({ children }: { children: ReactNode }) => {
  console.log("CounterContextProvider Rendered");
  return (
    <CounterContext.Provider value={useState(0)}>
      {children}
    </CounterContext.Provider>
  );
};

const useCounterContext = () => {
  console.log("useCounterContext Rendered");
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error(
      "useCounterContext must be used within a CounterContextProvider"
    );
  }
  return context;
};

const Container = () => {
  console.log("Component Rendered");
  return (
    <div className="p-4 m-4 border border-gray-400">
      <AddOneButton />
    </div>
  );
};

const AddOneButton = () => {
  const [, setCounter] = useCounterContext();
  console.log("AddOneButton Rendered");
  return (
    <div className="p-4 m-4 border border-gray-400">
      <button
        className="px-6 py-4 font-semibold bg-purple-700 rounded-md text-purple-50 hover:bg-purple-800"
        onClick={() => setCounter((prev) => prev + 1)}
      >
        Add One
      </button>
    </div>
  );
};

const Counter = () => {
  const [counter] = useCounterContext();
  console.log("Counter Rendered");
  return (
    <div className="p-4 m-4 border border-gray-400">Counter: {counter}</div>
  );
};

export default function CounterUseState() {
  console.log("CounterUseState Rendered");
  return (
    <main className={`${inter.className} w-full`}>
      <h1 className="m-4 text-xl font-bold">Counter Use State</h1>
      <CounterContextProvider>
        <div className="m-4 border border-gray-400">
          <Container />
          <Counter />
        </div>
      </CounterContextProvider>
      <Links />
    </main>
  );
}
