import { Inter } from "next/font/google";
import { Dispatch, SetStateAction, memo, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Container = memo(
  ({ setCounter }: { setCounter: Dispatch<SetStateAction<number>> }) => {
    console.log("Component Rendered");
    return (
      <div className="p-4 m-4 border border-gray-400">
        <AddOneButton setCounter={setCounter} />
      </div>
    );
  }
);

Container.displayName = "Container";

const AddOneButton = ({
  setCounter,
}: {
  setCounter: Dispatch<SetStateAction<number>>;
}) => {
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

const Counter = memo(({ counter }: { counter: number }) => {
  console.log("Counter Rendered");
  return (
    <div className="p-4 m-4 border border-gray-400">Counter: {counter}</div>
  );
});
Counter.displayName = "Counter";

export default function CounterUseState() {
  const [counter, setCounter] = useState<number>(0);
  console.log("CounterUseState Rendered");
  return (
    <main className={`${inter.className} w-full`}>
      <h1 className="m-4 text-xl font-bold">Counter Use State</h1>
      <div className="m-4 border border-gray-400">
        <Container setCounter={setCounter} />
        <Counter counter={counter} />
      </div>
    </main>
  );
}
