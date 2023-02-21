import React from 'react'

const Button = (props) => {
    return (
        <button className='bg-[#F89F0F] text-white font-sans font-semibold py-2 px-6 rounded  hover:shadow-lg 
    duration-500'>
            {props.children}
        </button>
    )
}

export default Button