import Banner from "@/Components/Banner";
import MostAdd from "@/Components/MostAdd";
import Products from "@/Components/Products/Products";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <MostAdd></MostAdd>
      <Products></Products>
    </div>
  );
}
