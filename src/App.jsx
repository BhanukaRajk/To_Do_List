import { useState } from "react"
import "./styles.css"

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [tasks, setTasks] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setTasks((currentTask) => {
      return [...currentTask,
        { id: crypto.randomUUID(), title: newItem, completed: false }]
    })
    setTasks((currentTask) => {
      return [...currentTask,
        { id: crypto.randomUUID(), title: newItem, completed: false }]
    })

    console.log(tasks)
  }

  return (
    // USE <> OR <div> TO USE THIS ALL AS AN ONE SET. IN HERE <> IS USED.
    // BECAUSE <h1> AND <form> ARE TWO SETS
    <>
      <h1 className="heading-one">Hi</h1>
      <form onSubmit={handleSubmit} className="Task-adding-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
        </div>
        <button className="btn">Add</button>
      </form>

      <h1 className="heading-two">Task List</h1>
      <ul className="task-list">
        <li>
          <label>
            <input type="checkbox" /> Item 01 
          </label>
          <button className="del-btn">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" /> Item 02 
          </label>
          <button className="del-btn">Delete</button>
        </li>
      </ul>
    </>
  )
}