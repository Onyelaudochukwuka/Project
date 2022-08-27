import moment from "moment";
import Image, { StaticImageData } from "next/image";
import React, { FC } from 'react';

export interface PostCardProps {
  userName: string;
  timeOfPost: number;
  image: StaticImageData;
  details: string;
  
}

const PostCard: FC<PostCardProps> = ({userName, timeOfPost, image, details}) => {
  return (
    <div className="text-light">
      <div>
      <span className="block w-8 h-8 rounded-full"><Image src={image} className="rounded-full" layout="responsive" /></span>
        <span>
          <p>{userName}</p>
          <p>{moment(timeOfPost).fromNow()}</p>
      </span>
      </div>
    </div>
  );
};

export default PostCard;
