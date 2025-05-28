import { Container } from "react-bootstrap";
import TaskList from "./TaskList";

const Filter = () => {

    return (
        <>
           <Container>
                <div className="btn-group" role="group" aria-label="filter buttons">
                    <button type="button" className="btn btn-success">All</button>
                    <button type="button" className="btn btn-success">Completed</button>
                    <button type="button" className="btn btn-success">Pending</button>
                </div>
                <TaskList />
            </Container> 
        </>
    );
}
 
export default Filter;