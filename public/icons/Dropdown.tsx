import React, { FC } from 'react'

const Dropdown:FC<{className: string }> = (props) => {
  return (
      <svg {...props} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 10.5L12 15.5L17 10.5H7Z" fill="#D0F7FF" />
      </svg>

  )
}

export default Dropdown