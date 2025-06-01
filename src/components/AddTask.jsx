import { use, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddTask = () => {

    const dispatch = useDispatch();
    const [task, setTask] = useState('');
    const tasks = useSelector(state => state.tasks);

    const handleAddTask = (e)=> {

        e.preventDefault();

        const id = tasks.length;

         const newTask = {
            id,
            text: task,
            completed: false
        };

        dispatch({type: 'ADD NEW TASK', task: newTask});
    };

    return ( 
        <>
            <form className="d-flex justify-content-center my-5" onSubmit={handleAddTask}>
                <input type="text" className="px-2 py-1 border border-success rounded" placeholder="Enter task here" value={task} onChange={e => setTask(e.target.value)} required/>
                <button className="btn btn-success ms-1">Add Task</button>
            </form>
        </>
     );
}
 
export default AddTask;