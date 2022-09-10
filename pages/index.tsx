import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Modal, Selectors } from "../components";
import { Book, Dropdown, Adult, Car } from "../public/index";
import { useSelector } from 'react-redux';

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
  const country = useSelector((state:any) => state.country.state);
  const [display, setDisplay] = useState<boolean>(true);
  const isPopUp = () => {
    setDisplay(!display);
  }
  return (
    <div className="w-full mt-12 flex flex-col items-center justify-center h-full">
      <Selectors pages={Arr} />
            <Modal close={isPopUp} display={display} />

    </div>
  );
};

export default Home;
