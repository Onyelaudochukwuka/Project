import React, { FC, useId, useRef } from 'react'
import { Cancel } from "../public/icons"
import { useDispatch, useSelector } from 'react-redux';
import { selectCountry } from "../utils/services/reducers/countrySlice";

const Modal: FC<{ close: () => void, display: boolean }> = ({ close, display }) => {
    const state = useRef(null) ;
  const dispatch = useDispatch(); 
  const Id = useId();
  
  return (
      <section className={`absolute flex flex-1 justify-center items-center bg-gray-100/50 inset-0 z-20 ${display ? `scale-100`: `scale-0`} origin-center transition-transform duration-700`}>
          <div className="bg-neutral z-50 w-3/4 h-3/4 rounded-lg shadow-lg shadow-medium/30 flex flex-col justify-center gap-12 items-center relative">
              <Cancel onClick={()=> close()} className="w-6 h-6 absolute top-6 right-6 cursor-pointer"/>
          <select ref={state} className="py-3 px-6 outline-none  ring-2 ring-light text-light font-semibold bg-transparent rounded-md">
          <option value={""}>select a state</option>
          {["ottawa", "toronto", "quebec"].map((val, i) => <option key={Id + i} value={val}>{val}</option>)}
              </select>    
              <button onClick={() => {
                  close();
                  dispatch(selectCountry({ state: !!state.current ? state.current : "" }));
              }} className="px-8 py-3 bg-light text-neutral font-bold rounded-full">Continue</button>
          </div>
      </section>
  )
}

export default Modal