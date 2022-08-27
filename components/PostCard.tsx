import { StaticImageData } from "next/image";
import React, { FC } from 'react';

export interface PostCardProps {
  userName: string;
  timeOfPost: number;
  image: StaticImageData;
  details: string;
  
}

const PostCard: FC<PostCardProps> = ({userName, timeOfPost, image, details}) => {
  return (
    <div>

    </div>
  );
};

export default PostCard;
