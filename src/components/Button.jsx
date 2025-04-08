import React from 'react'

const Button = ({style}) => {
  return (
    <button className={`py-4 px-6 font-poppins bg-blue-gradient text-[18px]
     font-medium text-primary outline-none ${style} rounded-[10px]`}>
      Get Started
    </button>
  )
}

export default Button