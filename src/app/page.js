import AllProductsPage from "@/Components/AllProducts";
import Banner from "@/Components/Banner";
import Price_Decrement from "@/Components/Decrement";
import Price_Increment from "@/Components/Increment";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Price_Increment></Price_Increment>
      <Price_Decrement></Price_Decrement>
      <AllProductsPage></AllProductsPage>
    </div>
  );
}
