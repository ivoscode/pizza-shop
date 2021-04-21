import Head from "next/head";
import Cart from "../components/Cart/cart";
import Hero from "../components/hero";
import AvailableMeals from "../components/Meals/availableMeals";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Cart />
        <Hero />
        <AvailableMeals />
      </main>
    </div>
  );
}
