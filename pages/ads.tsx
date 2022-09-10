import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addCount, removeCount } from "../utils/services/reducers/reducers";
const ads:FC = () => {
  let count = useSelector((state: any) => state?.counter?.value);
  let dispatch = useDispatch()
  console.log(count);
  
  return (
    <div>
      
  </div>
    )
}

export default ads