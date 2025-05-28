import { Container } from "react-bootstrap";
import AddTask from "./AddTask";
import Filter from "./Filter";

const Home = () => {

    return (
        <>
            <Container className="justify-content-center text-center text-success mt-5">
                <h1 className='display-3'>Task Tracker</h1>
                <AddTask />
                <Filter />
            </Container>
        </>
    );
}
 
export default Home;