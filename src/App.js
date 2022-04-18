import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import bg from './assets/Bann_Beng.jpeg'
import Item from './components/Item'

function App() {

  const [input, setInput] = useState('')
  const [todo, setTodo] = useState([])
  const [filter, setFilter] = useState(0)

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = () => {
    if(input !== '') {
      let newArr = [...todo]
      newArr.unshift({
        text: input,
        id: uuidv4(),
        done: false
      })
      setTodo(newArr)
      setInput('')
    }
  }

  document.addEventListener('keydown', (e) => {
    if(e.code === 'Enter') {
      handleSubmit()
    }
  })

  const handleDone = (id) => {
    let newArray = [...todo]
    let findIndex = newArray.findIndex(p => p.id === id)
    newArray[findIndex].done = !newArray[findIndex].done
    setTodo(newArray)
  }
  
  const handleDelete = (id) => {
    let newArr = [...todo]
    let filter = newArr.filter(p => p.id !== id)
    setTodo(filter)
  }

  const handleClass = (e, value) => {
    const btnArray = document.querySelectorAll('button')
    btnArray.forEach(el => {
      el.classList.remove('text-sky-400', 'font-medium')
    })
    e.preventDefault()
    e.target.classList.add('text-sky-400','font-medium')
    setFilter(value)
  }


  return (
    <div className='relative bg-slate-900 min-h-screen w-1/2'>
      <div className='absolute shadow-lg'>
        <img src={bg} className='h-56 object-cover w-full rounded'/>
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

          {filter === 0 &&
            todo.map((item, index) => 
              <Item
              key={item.id}
              id={item.id}
              text={item.text}
              done={item.done}
              func={handleDone}
              del={handleDelete}/>
              )
          }
          {filter === 1 &&
            todo.map((item, index) => 
            item.done &&
            <Item
            key={item.id}
            id={item.id}
            text={item.text}
            done={item.done}
            func={handleDone}
            del={handleDelete}/>
            )
          }

          {filter === 2 &&
          todo.map((item, index) => 
          !item.done &&
          <Item
          key={item.id}
          id={item.id}
          text={item.text}
          done={item.done}
          func={handleDone}
          del={handleDelete}/>
          )
          }

          <div className='relative flex justify-between space-x-4 text-xs text-slate-600 border-slate-800 p-4'>
            <p>{todo.length} {todo.length > 1 ? 'items' : 'item'} left</p>
            <p> Clear completed</p>
          </div>

         </div>

         <div className='bg-slate-900 flex justify-center rounded p-4 space-x-4 shadow-lg text-slate-600 font-medium text-sm'>
            <button className='font-medium text-sky-400' onClick={(e) => handleClass(e, 0)}>All</button>
            <button onClick={(e) => handleClass(e, 2)}>Active</button>
            <button onClick={(e) => handleClass(e, 1)}>Completed</button>
        </div>

      </div>
    </div>
  );
}

export default App;