import { useSelector, useDispatch } from "react-redux"
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";


function TaskList() {
  const stateTasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()
  
  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }
  return (
    <div className="w-4/6">

      <header className="flex justify-between item-center py-4">
        <h1>Tasks {stateTasks.length} </h1>
        <Link to='/create-task' className="bg-indigo-600 px-2 py-1 rounded-md text-sm">
        Create Task
        </Link>
      </header>
    <div className="grid grid-cols-3 gap-4">
      {stateTasks.map((task) =>(
        <div key={task.id} className="bg-neutral-800 p-4 rounded-md ">
          <header className="flex justify-between">
            <h3 className="font-bold">{task.title}</h3>
            <div className="flex gap-x-2">
              <Link to={'/edit-task/'+task.id}
                className="bg-green-600 px-2 py-1 text-xs rounded-md self-center">Edit</Link>
              <button onClick={() => handleDelete(task.id)} 
                className="bg-red-500 px-2 py-1 text-xs rounded-md self-center">Delete</button>
            </div>
          </header>
          <p>{task.description}</p>          
        </div>
      ))}
    </div>
    </div>
  )
}

export default TaskList