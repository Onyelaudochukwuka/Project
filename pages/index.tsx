import type { NextPage } from "next";
import Head from "next/head";
import { Selectors } from "../components";
import { Book, Dropdown, Adult, Car } from "../public/index";
type Pages = {
  heading: string,
  value: string[],
  icon: any
}
const Arr: Pages[] = [
  {
    heading: "Adult",
    value: ["Escort", "Body rub", "Massage"],
    icon: <Adult/>
    
  },
  {
    heading: "Automobile",
    value: ["Cars", "Bicycle", "Bus", "Vans", "Motorcycles", ],
    icon:<Car/>
  }, {
    heading: "Books",
    value: ["Novels", "Biography", "Children books"],
    icon:<Book/>
  },
  {
    heading: "Automobile",
    value: ["Cars", "Bicycle", "Bus"],
    icon:""
  },
  {
    heading: "Automobile",
    value: ["Cars", "Bicycle", "Bus"],
    icon:""
  },
  {
    heading: "Automobile",
    value: ["Cars", "Bicycle", "Bus"],
    icon:""
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
