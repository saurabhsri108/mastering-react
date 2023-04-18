import { Inter } from "next/font/google";
import { ReactNode, createContext, useContext, useReducer } from "react";

type CounterState = number;

type CounterAction = {
  type: "add" | "subtract";
  payload: number;
};

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "add":
      return state + 1;
    case "subtract":
      return state - 1;
    default:
      return state;
  }
};

const inter = Inter({ subsets: ["latin"] });

// type CounterContextValue = [number, Dispatch<CounterAction>];

const CounterContext = createContext<any>(null);

const CounterContextProvider = ({ children }: { children: ReactNode }) => {
  console.log("CounterContextProvider Rendered");
  return (
    <CounterContext.Provider value={useReducer(reducer, 0)}>
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
      <SubtractOneButton />
    </div>
  );
};

const AddOneButton = () => {
  const [, dispatch] = useContext(CounterContext);
  console.log("AddOneButton Rendered");
  return (
    <div className="p-4 m-4 border border-gray-400">
      <button
        className="px-6 py-4 font-semibold bg-green-700 rounded-md text-green-50 hover:bg-green-800"
        onClick={() => dispatch({ type: "add" })}
      >
        Add One
      </button>
    </div>
  );
};

const SubtractOneButton = () => {
  const [, dispatch] = useContext(CounterContext);
  console.log("SubtractOneButton Rendered");
  return (
    <div className="p-4 m-4 border border-gray-400">
      <button
        className="px-6 py-4 font-semibold bg-red-700 rounded-md text-red-50 hover:bg-red-800"
        onClick={() => dispatch({ type: "subtract" })}
      >
        Subtract One
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
    </main>
  );
}
