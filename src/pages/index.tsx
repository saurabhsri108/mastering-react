import Links from "@/components/links";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} w-full`}>
      <h1 className="m-4 text-xl font-bold">
        Find the different implementations below
      </h1>
      <Links />
    </main>
  );
}
