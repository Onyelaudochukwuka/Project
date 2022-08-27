import  { useRouter } from 'next/router';
import type { NextPage } from "next";
import image from "../public/images.jpg";
import { useEffect, useId, useState } from "react";
import PostCard, { PostCardProps } from "../components/PostCard";
const Slug: NextPage = () => {
  const params = useRouter();
  const { slug } = params.query;
  const [slugAds, setSlugAds] = useState<PostCardProps[]>();
  const Id = useId();
  const Data: { [k: string]: PostCardProps[] } = {
    Escort: [{
      userName: "string",
      timeOfPost: 1661623241597,
      image: image,
      details: "i am a detail",
    }, {
      userName: "string",
      timeOfPost: 1661623241597,
      image: image,
      details: "i am a detail",
    }, {
      userName: "string",
      timeOfPost: 1661623241597,
      image: image,
      details: "i am a detail",
    }, {
      userName: "string",
      timeOfPost: 1661623241597,
      image: image,
      details: "i am a detail",
      }],
    Bicycle: [{
      userName: "string",
      timeOfPost: 1661623241597,
      image: image,
      details: "i am a detail",
    }, {
      userName: "string",
      timeOfPost: 1661616426099,
      image: image,
      details: "i am a detail",
    }, {
      userName: "string",
      timeOfPost: 1661616426099,
      image: image,
      details: "i am a detail",
    }, {
      userName: "string",
      timeOfPost: 1661616426099,
      image: image,
      details: "i am a detail",
    }]
  }
  console.log(Date.now())

  useEffect(() => {
    let data: string = typeof slug === "string" ? slug : "data";
    console.log(data)
    if (!!Data[data]) {
      setSlugAds(Data[data])
    }
  }, [slug])

  return (
    <div>
      {
        !!slugAds ? slugAds.map((val, i) => <PostCard key={Id + i} {...val} />)
          :
          <p>No ads Available on this session</p>
      }
    </div>
  )
}

export default Slug