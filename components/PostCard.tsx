import moment from "moment";
import Image, { StaticImageData } from "next/image";
import React, { FC, useState } from 'react';
import Disturb from "../public/icons/Disturb";
import Share from "../public/icons/Share";

export interface PostCardProps {
  userName: string;
  timeOfPost: number;
  image: StaticImageData;
  details: string;
  
}

const PostCard: FC<PostCardProps> = ({ userName, timeOfPost, image, details }) => {
  const [state, setState] = useState(false);
  return (
    <div className="text-light w-full relative bg-medium p-6 rounded-xl shadow-lg shadow-light/10 -ml-10">
      <div className="flex items-center justify-between">
      <div className="flex items-center gap-6">
        <span className="block w-8 h-8 rounded-full">
          <Image src={image} className="rounded-full" layout="responsive" />
        </span>
        <span>
          <p>{userName}</p>
          <p>{moment(timeOfPost).fromNow()}</p>
      </span>
        </div>
        <div>
          <div
            onClick={() => setState(prev => !prev)} className={`relative w-2 h-2 rounded-full after:w-2 after:h-2 after:right-3 after:absolute after:rounded-full before:w-2 before:h-2 before:rounded-full before:bg-light before:right-6 before:absolute bg-light after:bg-light`}></div>       
            <div className={`absolute mt-4 right-0 bg-light text-dark py-4 rounded-xl ${!state ? `scale-y-0` : `scale-y-100`} transition-transform origin-center z-10`}>
            <p className="px-8 py-2 cursor-pointer flex gap-2 items-center"><Disturb/> Not Interested</p>
            <p className="border-t-4 px-8 py-2 cursor-pointer flex gap-2 items-center"><Share /> Share</p>
            </div>

        </div>

      </div>
      <p className="pl-6 w-fit  mx-auto font-semibold">{details}</p>
    </div>
  );
};

export default PostCard;
