import react from 'react'
import './ToDoList.css'
const ToDoList =(props)=>{
 
    return <>
    <div className="todo_style">
        <p onClick={()=>{
            props.onSelect(props.id)
        }}>x</p>
    </div>
    <li>
    {props.text}
   </li>
   </>
}
export default ToDoList;