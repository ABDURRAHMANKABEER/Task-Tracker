const Task = ({task}) => {

    const handleStatus = (e) => {
        // Handling the status change logic here
       const completed =  e.target.checked
       console.log(task.id, completed)
    }
    const handleDelete = () => {
        // Handling the delete logic here
        console.log(`Delete task with id: ${task.id}`);
    }

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-1 col-sm-1 col-1">
                        <input className="rounded-0" type="checkbox" aria-label="checkbox" onChange={handleStatus}></input>
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