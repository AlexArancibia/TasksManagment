import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id:'1',
        title:'Task1',
        description:'Task 1 Description',
        completed: false,
    },
    {
        id:'2',
        title:'Task2',
        description:'Task 2 Description',
        completed: false,
    }
]

export const taskSlice = createSlice({
    name:'task',
    initialState,
    reducers:{
        addTask: (state,action) => {
            state.push(action.payload)
        },
        deleteTask: (state,action) => {
            const taskFound = state.find(task => task.id === action.payload)
            if (taskFound){
                state.splice(state.indexOf(taskFound),1)
            }
        },
        editTask: (state, action) => {
            const {id, title, description} = action.payload;
            const foundTask = state.find(task => task.id === id)
            if (foundTask) {
                foundTask.title = title
                foundTask.description = description
            }
        }
    }
})

export default taskSlice.reducer
export const {addTask,deleteTask,editTask} = taskSlice.actions