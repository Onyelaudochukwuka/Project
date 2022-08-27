import Router, { useRouter } from 'next/router';
import type { NextPage } from "next";
import image from "../public/images.jpg";
import { useEffect, useState } from "react";
import { PostCardProps } from "../components/PostCard";
const Slug: NextPage = () => {
  const params = useRouter();
  const { slug } = params.query;
  const [slugAds, setSlugAds] = useState();
  console.log(image)
  const Data: { [k: string]: PostCardProps[] } = {
    
    Escort: [{
      userName: "string",
      timeOfPost: 2647384747,
      image: image,
      details: "i am a detail",
    }, {
      userName: "string",
      timeOfPost: 2647384747,
      image: image,
      details: "i am a detail",
    }, {
      userName: "string",
      timeOfPost: 2647384747,
      image: image,
      details: "i am a detail",
    }, {
      userName: "string",
      timeOfPost: 2647384747,
      image: image,
      details: "i am a detail",
      }],
    Bicycle: [{
      userName: "string",
      timeOfPost: 2647384747,
      image: image,
      details: "i am a detail",
    }, {
      userName: "string",
      timeOfPost: 2647384747,
      image: image,
      details: "i am a detail",
    }, {
      userName: "string",
      timeOfPost: 2647384747,
      image: image,
      details: "i am a detail",
    }, {
      userName: "string",
      timeOfPost: 2647384747,
      image: image,
      details: "i am a detail",
    }]
  }
  useEffect(() => {
    let data:string = typeof slug === "string" ? slug : "data";
    if (!!Data[data]) {
      setSlugAds(Data[slug])
    }
    console.log(slugAds)
  }, [])
  return (
    <>
      {slug}
    </>
  )
}

export default Slug