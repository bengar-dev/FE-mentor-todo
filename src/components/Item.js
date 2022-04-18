import React from 'react'
import cross from '../assets/icon-cross.svg'

export default function Item(props) {

  const handFunc = (id) => {
    props.func(id)
  }

  const handDel = (id) => {
    props.del(id)
  }

  return (
    <div className='relative flex space-x-4 border-b border-slate-800 p-4'>
   {!props.done ? <div onClick={(e) => e.preventDefault(handFunc(props.id))} className='transition-all duration-200 h-6 w-6 border border-slate-800 hover:bg-slate-800 rounded-full cursor-pointer'></div> : <div  onClick={(e) => e.preventDefault(handFunc(props.id))} className='h-6 w-6 border border-slate-800 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full cursor-pointer'></div>}
    {!props.done ? <p>{props.text}</p> : <p className='line-through'>{props.text}</p>}
    <button 
    onClick={(e) => e.preventDefault(handDel(props.id))}
    className='absolute right-6'><img src={cross} /></button>
  </div>
  )
}
