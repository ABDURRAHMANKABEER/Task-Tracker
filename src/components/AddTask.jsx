const AddTask = () => {

    return ( 
        <>
            <form className="d-flex justify-content-center my-5">
                <input type="text" className="px-2 py-1 border border-success rounded" placeholder="Enter task here" required/>
                <button className="btn btn-success ms-1">Add Task</button>
            </form>
        </>
     );
}
 
export default AddTask;