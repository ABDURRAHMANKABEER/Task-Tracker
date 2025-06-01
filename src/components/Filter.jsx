import { Container } from "react-bootstrap";
import TaskList from "./TaskList";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Filter = () => {

    const tasksList = useSelector(state => state.tasks);
    const [filtered, setFiltered] = useState(tasksList);
    const [filter, setFilter] = useState('All');

    const handleFilter = (filter)=> {
        if(filter === 'All') {
            setFiltered(tasksList);
        } else if(filter === 'Completed') {
            setFiltered(tasksList.filter(task => task.completed === true));
        } else {
            setFiltered(tasksList.filter(task => task.completed === false));
        }
    }

    useEffect(() => {
    handleFilter(filter);
    }, [tasksList]);

    return (
        <>
           <Container>
                <div className="btn-group" role="group" aria-label="filter buttons">
                    <button type="button" className={`btn btn-success ${filter === "All" ? "active" : ""}`} onClick={()=> {
                        handleFilter('All');
                    }} >All</button>
                    <button type="button" className={`btn btn-success ${filter === "Completed" ? "active" : ""}`} onClick={()=> {
                        handleFilter('Completed');
                        setFilter('Completed');
                    }}>Completed</button>
                    <button type="button" className={`btn btn-success ${filter === "Pending" ? "active" : ""}`} onClick={()=> {
                        handleFilter('Pending');
                        setFilter('Pending');
                    }}>Pending</button>
                </div>
                <TaskList tasks={filtered}/>
            </Container> 
        </>
    );
}
 
export default Filter;