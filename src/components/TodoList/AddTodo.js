import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../ReduxModule/Features/Todo/TodoSlice'

function AddTodo() {
    const[input,setInput] = useState()
    const dispatch = useDispatch()

    const addNewTodo=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
    }
  return (
    <div>AddTodo
        <form onSubmit={addNewTodo}>
            <input type='text' value={input} onChange={e=>setInput(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddTodo