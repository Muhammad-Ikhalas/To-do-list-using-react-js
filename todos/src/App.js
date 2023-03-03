
import './App.css';
import ToDoList from './ToDoList';
import {useState} from 'react'

function App() {
  const [item , setItem] = useState('')
  const [items, saveItems]= useState([])
  const itemEvent=(event)=>{
   setItem(event.target.value)
  }
  const saveItemListner=()=>{
   saveItems((olditems)=>{
    return [...olditems,item]
   })
   setItem("")
  }
  const DeleteItems=(id)=>{
    console.log('deleted')
    saveItems((olditems)=>{
      return olditems.filter((arrayElement, index)=>{
        return index !==id
      })
    })
}

  return (
    < >
      <div className='main_div'>
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="add an item" value={(item)} onChange={itemEvent} />
          <button onClick={saveItemListner}>+</button>
          <ol>
            {/* <li>
             {item}
            </li> */}
           { items.map((itemval,index)=> {
          return <ToDoList 
          id={index} 
          key={index} 
          text={itemval}
          onSelect={DeleteItems}/> //return is must with out it you can not render it in your ToDoList component
            })}
          </ol>
        </div>

      </div>
    </>
  );
}

export default App;
