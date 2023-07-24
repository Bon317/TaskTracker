import React from 'react'
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'
import { useState } from 'react'
function App() {

  const [showAddTask, setShowAddTask] = useState (false)

  const [tasks,setTasks] = useState ([{
    id: 1,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 2:00',
    reminder: true,
},
{
    id: 2,
    text: 'Meeting',
    day: 'Feb 6th at 2:00',
    reminder: true,
},
{
    id: 3,
    text: 'Shopping',
    day: 'Feb 5th at 2:00',
    reminder: false,
}
])

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])

}

//delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// toggle reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) =>
     task.id === id ? {...task, reminder:
    !task.reminder } : task
    )
  )
}
  return (
    <div className="Container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
      <Tasks tasks = {tasks} onDelete=
      {deleteTask}  onToggle={toggleReminder}/>
      ) : (
        'No tasks to show'
      )}
    </div>
  )
}



export default App;
