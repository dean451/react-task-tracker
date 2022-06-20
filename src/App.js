import { useState } from 'react'

import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'appointment',
      day: 'feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'birthday',
      day: 'feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'haircut',
      day: 'feb 5th at 2:30pm',
      reminder: true,
    },
  ])

  // delete task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'please add a task to track'}
    </div>

  );
}

export default App;
