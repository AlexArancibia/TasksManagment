import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask , editTask} from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

function TaskForm() {
  
  const [task, setTask] = useState({
    title: '',
    description: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector(state => state.tasks)
  const handleChange = (e) => {
    setTask({...task,[e.target.name]:e.target.value});
    console.log(task);
  }

  const handleSubmit = (e) =>{

    e.preventDefault()
    if(params.id){
      dispatch(editTask(task))
    } else{
    dispatch(addTask({
      ...task,
      id: uuid(),
    }))}
    navigate('/')
  }

  useEffect(() => {
    if (params.id){
      setTask(tasks.find((task) => task.id === params.id))              
    }
  } , [params.id,tasks])
  

  return (
    <>
      <form onSubmit={handleSubmit}
        className="bg-zinc-800 max-w-sm p-4">
        <label htmlFor="title" className="block text-xs font-bold mb-2">Task:</label>
        <input 
          name="title" 
          type='text' 
          value={task.title} 
          placeholder="title" 
          onChange={handleChange}
          className="w-full p-2 rounded-md bg-zinc-600 mb-2"></input>
        <label htmlFor="description" className="block text-xs font-bold mb-2">Task:</label>
        <textarea 
        name="description" 
        value={task.description} 
        placeholder="description" 
        onChange={handleChange}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"></textarea>
        <button className="bg-indigo-600 px-4 py-1 rounded-md font-bold ">Save</button>
      </form>
    </>
  )
}

export default TaskForm