import Router, { useRouter } from 'next/router';
import type { NextPage } from "next";
import image from "../public/images.jpg";
import { useEffect, useState } from "react";
import PostCard, { PostCardProps } from "../components/PostCard";
const Slug: NextPage = () => {
  const params = useRouter();
  const { slug } = params.query;
  const [slugAds, setSlugAds] = useState<PostCardProps[]>();
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
    let data: string = typeof slug === "string" ? slug : "data";
    console.log(data);
    if (!!Data[data]) {
      setSlugAds(Data[data])
      console.log(slugAds)
    }
  }, [])
  console.log(slugAds)

  return (
    <div>
      {
        !!slugAds ? slugAds.map((val) => <PostCard {...val} />)
          :
          <p>No ads Available on this session</p>
      }
    </div>
  )
}

export default Slug