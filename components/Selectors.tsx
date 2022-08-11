import React, { FC, PropsWithChildren } from 'react';
type Pages = {
    heading: string,
    value: string[]
}

const Selectors = ({ pages }:any) => {
    const newArr: Pages[] = [...pages];
  return (
      <div>
          {newArr.map(({ heading, value }:Pages, i:number) =>
              <div>
                  <span>{heading}</span>
                  
                  {value.map((option) => <option>{option}</option>)}
                </div>
          )}
        </div>
  )
}

export default Selectors