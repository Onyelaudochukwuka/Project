import React from "react";
import Image from "next/image";
import pic from "../public/images.png";
import pic1 from "../public/section1.jpg";
import pic2 from "../public/secttion2.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectFlip, Navigation, Pagination, Scrollbar, A11y } from "swiper";

const UserData = () => {
  return (
    <>
    <div className="m-auto px-10 my-20  w-full lg:w-[50%]">
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
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
     
    >
      <SwiperSlide>
        <Image src={pic1} alt=""/>
      </SwiperSlide>
       <SwiperSlide>
        <Image src={pic2} alt=""/>
      </SwiperSlide>
       <SwiperSlide>
        <Image src={pic1} alt=""/>
      </SwiperSlide>
       <SwiperSlide>
        <Image src={pic2} alt=""/>
      </SwiperSlide>
      
      ...
    </Swiper>
      </div>
     
       
      <div>
        <p className="text-light pt-4">
          😍😍HELLO I AM A SEXY HOT AND BEAUTIFUL GIRL WRITE ME 100% GUARANTEED
          SERVICE💑💑 BBJ💦💦💦😋😋 KISS😘😘 MASSAGE AND GFE 😍😍😍💆♂💆♂
          👉👌😋😋💦💦💦if you are stressed or very tired come love and relax
          with me 🤤🥰 🍑
        </p>
      </div>
    </div>
    </>
  );
};

export default UserData;
