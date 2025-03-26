import React from 'react'

const Servicecard = (props) => {
  return (
    <div className= ' rounded-xl hover:bg-blue-500 grid grid-row hover:scale-110 duration-300 items-center  p-5 w-130 items-center align-center  '  >
    <div className='rounded-lg bg-orange-300 h-60 items-center text-xl p-4' >
      <h1 className='font-bold  bg-red-400 rounded-lg p-4 items-center text-center ' > Title : {props.title} </h1>
      <p className='font-sm text-center p-4' > <span className='font-bold' >  Description </span>  : {props.description} </p>
    </div>
    </div>
  )
}

export default Servicecard
