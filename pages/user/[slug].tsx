import React, { useState, useRef } from "react";
import Image from "next/image";
import pic from "../../public/images.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { OtherUser } from "../../components";

const user = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const data = [
        {
            id: 1,
            img: require("../../public/section1.jpg"),
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fugiattemporibus atque cupiditate",
        },
        {
            id: 2,
            img: require("../../public/section1.jpg"),
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fugiattemporibus atque cupiditate",
        },
        {
            id: 3,
            img: require("../../public/section1.jpg"),
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fugiattemporibus atque cupiditate",
        },
        {
            id: 4,
            img: require("../../public/section1.jpg"),
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fugiattemporibus atque cupiditate",
        },

    ];

    return (
        <div className="mx-auto px-10 lg:mx-[7rem] my-20 w-full ">
            <div className="flex gap-4  text-light items-center">
                <span className="block h-12 w-12 rounded-full">
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
                    className="w-1/4 h-auto mx-auto"
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
            <div className="border-b-2 border-light pt-16 mb-4">
                <p className="text-light">Related post</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-around gap-12">
                {data.map(({ id, ...items }) => (<OtherUser {...items} key={id} />))}
            </div>


        </div>

    );
};


user.getInitialProps = async ({ query }: any) => {
    const { slug } = query;
    return { slug };
}
export default user;
