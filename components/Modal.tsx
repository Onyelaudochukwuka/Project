import React, { FC, useRef } from 'react'
import { Cancel } from "../public/icons"
import { useDispatch, useSelector } from 'react-redux';
import { selectCountry } from "../utils/services/reducers/countrySlice";

const Modal: FC<{ close: () => void }> = ({ close }) => {
    const state = useRef(null) ;
  const dispatch = useDispatch();
  
  return (
      <section className="absolute flex flex-1 justify-center items-center bg-gray-100/50 inset-0 z-20">
          <div className="bg-white w-3/4 h-3/4 rounded-lg shadow-lg flex flex-col justify-center gap-12 items-center relative">
              <Cancel onClick={()=> close()} className="w-6 h-6 absolute top-6 right-6 cursor-pointer"/>
          <select ref={state} className="p-6 outline-2 bg-medium text-white">
            <option value={""}>select a state</option>
            <option value={"Otawwa"}>Otawwa</option>
              </select>    
        <button onClick={() => dispatch(selectCountry({ state: !!state.current ? state.current : ""}))} className="px-8 py-3 bg-medium text-white font-bold rounded-full">Continue</button>
          </div>
      </section>
  )
}

export default Modal