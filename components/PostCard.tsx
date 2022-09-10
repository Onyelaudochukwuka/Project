import moment from "moment";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
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
    <div className="text-neutral  cursor-pointer w-full relative ring-medium ring-2 p-6 shadow-lg shadow-light/10 -ml-10">
      <div className="flex items-center justify-between">
      <div className="flex items-center gap-6">
              <Link href={`user/${userName}`}>
        <span className="block w-8 h-8 rounded-full">
          <Image src={image} className="rounded-full" layout="responsive" />
        </span>
          </Link>
                <Link href={`user/${userName}`}>
        <span className="flex items-center gap-2">
              <p>{userName}</p>
              <p>˚</p>
          <p className="text-xs">{moment(timeOfPost).fromNow()}</p>
      </span>
              </Link>
        </div>
        <div>
            <div
              tabIndex={5}
            onClick={() => setState(prev => !prev)} className={`relative w-1.5 h-1.5 rounded-full after:w-1.5 after:h-1.5 after:right-3 after:absolute after:rounded-full before:w-1.5 before:h-1.5 before:rounded-full before:bg-neutral before:right-6 before:absolute bg-neutral after:bg-neutral cursor-pointer after:cursor-pointer before:cursor-pointer`}></div>       
            <div className={`absolute mt-4 right-0 text-light bg-neutral text-dark py-4 rounded-xl ${!state ? `scale-y-0` : `scale-y-100`} transition-transform origin-center z-10`}>
            <p className="px-8 py-2 cursor-pointer flex gap-2 items-center"><Disturb/> Not Interested</p>
            <p className="border-t-4 px-8 py-2 cursor-pointer flex gap-2 items-center"><Share /> Share</p>
            </div>

        </div>

      </div>
      <Link href={`user/${userName}`}>
      <p className="w-fit ml-6">{details}</p>
        </Link>
    </div>
  );
};

export default PostCard;
