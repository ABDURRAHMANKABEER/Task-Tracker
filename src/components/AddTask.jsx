const AddTask = () => {

    return ( 
        <>
            <form>
                <input type="text" placeholder="Enter task here" required/>
                <button className="btn btn-success ms-2">Add Task</button>
            </form>
        </>
     );
}
 
export default AddTask;