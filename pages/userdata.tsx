import React, { useState, useRef } from "react";
import Image from "next/image";
import pic from "../public/images.png";
import pic1 from "../public/section1.jpg";
import pic2 from "../public/secttion2.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import OtherUser from "../components/OtherUser";

const UserData = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const data = [
    {
      img: require("../public/section1.jpg"),
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fugiattemporibus atque cupiditate",
    },
    {
      img: require("../public/section1.jpg"),
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fugiattemporibus atque cupiditate",
    },
    {
      img: require("../public/section1.jpg"),
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fugiattemporibus atque cupiditate",
    },
    {
      img: require("../public/section1.jpg"),
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fugiattemporibus atque cupiditate",
    },
    
  ];

  return (
    <div className="mx-auto px-10 lg:mx-[7rem] my-20 w-full ">
      <div className="flex gap-4 text-light items-center">
        <span className="block w-10 h-10 rounded-full">
          <Image src={pic} className="rounded-full" layout="responsive" />
        </span>
        <span>
          <p>Marvin McKinney</p>
          <p>(316) 555-0116</p>
        </span>
      </div>
      <div>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="w-56 mx-auto"
        >
          <SwiperSlide className="swiperSlide h-full">
            <img src={"/section1.jpg"} />
          </SwiperSlide>
          <SwiperSlide className="swiperSlide h-full">
            <img src={"/section2.jpg"} />
          </SwiperSlide>
          <SwiperSlide className="swiperSlide h-full">
            <img src={"/section1.jpg"} />
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <p className="text-light pt-4 w-3/4 mx-auto">
          {/* 😍😍HELLO I AM A SEXY HOT AND BEAUTIFUL GIRL WRITE ME 100% GUARANTEED
          SERVICE💑💑 BBJ💦💦💦😋😋 KISS😘😘 MASSAGE AND GFE 😍😍😍💆♂💆♂
          👉👌😋😋💦💦💦if you are stressed or very tired come love and relax
          with me 🤤🥰 🍑 */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fugiat
          temporibus atque cupiditate, suscipit laboriosam et aliquam molestias
          nisi ullam magni sapiente minus sequi, illum eius. Sunt at sit omnis.
        </p>
      </div>
      <div className="grid md:grid-cols-3  lg:grid-cols-4 gap-4 ">
          {data.map((items) => (
            <OtherUser {...items} />
          ))}
        </div>
     
    </div>

  );
};

export default UserData;
