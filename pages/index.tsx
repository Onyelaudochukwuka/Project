import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Selectors } from "../components";
type Pages = {
  heading: string,
  value: string[]
}
const Arr: Pages[] = [
  {
    heading: "Automobile",
    value: ["Cars", "Bicycle", "Bus"]
  }
]
const Home: NextPage = () => {
  return (
    <div className="w-full mt-12 flex items-center justify-center h-full">
      <Selectors pages={Arr} />
    </div>
  );
};

export default Home;
