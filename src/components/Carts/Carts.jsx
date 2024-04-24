import React from 'react'

export const Carts = ({ img,name,specie }) => {
  return (
    <>
    <div className='w-60 h-60 bg-slate-700 flex flex-col justify-around items-center rounded'>
        <img src={img} alt='' className='w-1/2'/>
        <div className='flex flex-col '>
            <p>{name}</p>
            <p>{specie}</p>
        </div>
    </div>
    </>
  )
}
