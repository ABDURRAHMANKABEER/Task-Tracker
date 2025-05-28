import { useSelector } from "react-redux";
import Task from "./Task";

const TaskList = () => {

 const tasks = useSelector(state => state);
    console.log(tasks);
    
    return (
        <>
            <div className="row justify-content-center text-center">
                <div className="col-md-6 col-sm-8 col-10">
                    { tasks && tasks.map(task => (
                    <div key={task.id}>
                        <Task task={task}/>
                    </div>
                ))}
                </div>
            </div>
        </>
    );
}
 
export default TaskList;