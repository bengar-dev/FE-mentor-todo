import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import bg from './assets/bg-desktop-dark.jpg'
import Item from './components/Item'

function App() {

  const [input, setInput] = useState('')
  const [todo, setTodo] = useState([])

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = () => {
    console.log(input)
    if(input !== '') {
      let newArr = [...todo]
      newArr.unshift(input)
      setTodo(newArr)
      setInput('')
    } else {
      console.log('erreur')
    }
  }

  document.addEventListener('keydown', (e) => {
    if(e.code === 'Enter') {
      handleSubmit()
    }
  })

  return (
    <div className='relative bg-slate-900 min-h-screen w-full'>
      <div className='absolute shadow-lg'>
        <img src={bg} className='h-56 object-cover w-full'/>
      </div>
      <div className='relative flex flex-col space-y-10 relative ml-auto mr-auto top-20 w-9/12 '>
        <div className='bg-slate-900 flex items-center rounded p-4 space-x-4'>
          <div className='p-2 h-6 w-6 border border-slate-800 rounded-full'></div>
          <input 
          onChange={(e) => handleInput(e)}
          value={input}
          type='text' className='text-sm w-full bg-transparent text-slate-400 outline-none' placeholder='Create a new todo...'/>
        </div>

        <div className='relative w-full bg-slate-900 p-2 rounded flex flex-col text-slate-400 text-sm shadow-xl'>

          {todo.map(item => 
          <Item 
          key={uuidv4()}
          text={item}/>)}

          <div className='relative flex justify-between space-x-4 text-xs text-slate-600 border-slate-800 p-4'>
            <p>{todo.length} {todo.length > 1 ? 'items' : 'item'} left</p>
            <p> Clear completed</p>
          </div>

         </div>

         <div className='bg-slate-900 flex justify-center rounded p-4 space-x-4 shadow-lg text-slate-600 font-medium text-sm'>
            <button className='text-sky-400 font-medium'>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>

      </div>
    </div>
  );
}

export default App;