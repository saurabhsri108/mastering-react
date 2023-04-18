import Link from "next/link";
import { memo } from "react";

export default memo(function Links() {
  return (
    <div className="flex flex-col items-start justify-start gap-2 m-4">
      <div className="flex flex-col items-start justify-start gap-2 px-6 py-4 border border-gray-600">
        <Link
          className="font-bold text-purple-700"
          href="/counter/counterusestate"
        >
          1. Counter by useState
        </Link>
        <Link
          className="font-bold text-green-700"
          href="/counter/counterctxusestate"
        >
          2. Counter by context useState
        </Link>
        <Link className="font-bold text-red-700" href="/counter/counterreducer">
          3. Counter by useReducer
        </Link>
      </div>
      <div className="flex flex-col items-start justify-start gap-2 px-6 py-4 border border-gray-600">
        <Link
          className="font-bold text-green-700"
          href="/ecommerce/ecommerce-context"
        >
          4. Ecommerce by Context
        </Link>
        <Link
          className="font-bold text-red-700"
          href="/ecommerce/ecommerce-context-selector"
        >
          5. Ecommerce by use-context-selector
        </Link>
        <Link
          className="font-bold text-purple-700"
          href="/ecommerce/ecommerce-zustand"
        >
          6. Ecommerce by Zustand
        </Link>
      </div>
    </div>
  );
});
