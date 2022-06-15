// we need useState and useEffect hooks
import React,{useState,useEffect} from 'react'

// icons from react icons kit
// main Icon component
import { Icon } from 'react-icons-kit'

// icons themselves
import {plus} from 'react-icons-kit/feather/plus'
import {edit2} from 'react-icons-kit/feather/edit2'
import {trash} from 'react-icons-kit/feather/trash'
import userEvent from '@testing-library/user-event'

// get todos from local storage
const getTodosFromLS = () => {
  const data = localStorage.getItem('Todos');
  if(data){
    return JSON.parse(data)
  }
  else {
    return []
  }
}

export const Form = () => {

  // todo value state
  const [todoValue, setTodoValue] =useState('');

  // todos array of objects
  const [todos, setTodos] =useState(getTodosFromLS());
  // console.log(todos);

  // form submit event
  const handleSubmit = (e) => {
    e.preventDefault();

    // creating a ID for every todo
    const date = new Date();
    const time = date.getTime();

    // creating a todo object
    let todoObject = {
      ID: time,
      TodoValue: todoValue,
      completed: false
    }

    // updating todos states
    setTodos([...todos, todoObject]);
    // clearing input field
    setTodoValue('');
  }

  // saving data to local storage
  useEffect(() =>{
    localStorage.setItem('Todos', JSON.stringify(todos));          
  }, [todos]) // useEffect will run whenever our todos state changes

    return (
        <>
          {/* form component */}
          <h3>Weekly FE coding assignment tracker</h3>
            <div className="form">
              <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="input-and-button">
                  <input type='text' placeholder="Add an Assignment" onChange={(e) => setTodoValue(e.target.value)} value={todoValue}
                  required/>
                  <div className='button'>
                    <button type="submit">
                      <Icon icon={plus} size={20}/>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          {/* end of form component */}
        </>
    )
}