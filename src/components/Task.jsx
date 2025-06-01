import { useDispatch } from "react-redux"

const Task = ({task}) => {

    const dispatch = useDispatch();

    const handleStatus = () => {
        // Handling the status change logic here
       
       dispatch({type: 'UPDATE TASK', taskId: task.id});
    }
    const handleDelete = () => {

        // Handling the delete logic here
        dispatch({type: 'DELETE TASK', taskId: task.id});
    };

    return (
        <>
            <div className="container mt-3 text-start">
                <div className="row">
                    <div className="col-md-1 col-sm-1 col-1">
                        <input className="rounded-0" type="checkbox" aria-label="checkbox" checked={task.completed} onChange={handleStatus}></input>
                    </div>
                    <div className="col-md-10 col-sm-10 col-10">
                        {task.text}
                    </div>
                    <div className="col-md-1 col-sm-1 col-1 text-end">
                        <i className="bi bi-trash" onClick={handleDelete}></i>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Task;