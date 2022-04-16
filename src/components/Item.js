import React from 'react'
import cross from '../assets/icon-cross.svg'

export default function Item(props) {
  return (
    <div className='relative flex space-x-4 border-b border-slate-800 p-4'>
    <div className='h-6 w-6 border border-slate-800 rounded-full'></div>
    <p>{props.text}</p>
    <button className='absolute right-6'><img src={cross} /></button>
  </div>
  )
}
