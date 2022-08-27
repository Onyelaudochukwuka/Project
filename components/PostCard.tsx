import { StaticImageData } from "next/image";
import React, { FC } from 'react';

interface PostCardProps {
  userName: string;
  timeOfPost: number;
  image: string;
  details: string;
  
}

const PostCard: FC<PostCardProps> = ({userName, timeOfPost, image, details}) => {
  return (
    <div>

    </div>
  );
};

export default PostCard;
