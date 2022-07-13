import useFetch from "./components/useFetch";
import { Link } from "react-router-dom";
const Tasklist = () => {
    let { data: tasks, pending, error } = useFetch("http://localhost:4000/tasks")

    let handleDelete=(id)=>{
        fetch("http://localhost:4000/tasks/" +id ,{method:"DELETE"})
        
    }

    return (
        <div className="task-list">
            <h1>List of all the task</h1>
            <hr />
            {error && <h1>{error}</h1>}
            {pending && <h1>Loading....</h1>}
            {tasks &&
            <div className="inner">
                <table border="2px" >
                    <thead>
                        <tr >
                            <th>sl no</th>
                            <th>Name</th>
                            <th>TaskName</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((task, i) => (
                                <tr >
                                    <td>{i + 1}</td>
                                    <td>{task.userName}</td>
                                    <td>{task.taskName}</td>
                                    <td>{task.startDate}</td>
                                    <td>{task.endDate}</td>
                                    <td>{task.status}</td>
                    
                                    {(task.status==="completed")&& <td><button onClick={()=>handleDelete(task.id)}>delete</button></td>}
                                    {(task.status!=="completed")&& <td> <Link to={`/edittask${task.id}`}><button >edit</button></Link></td>}
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <Link to="/home">
                    <button className="btntsk">Click to add a new task</button>
                </Link>
            </div>
                
            }
        </div>
    );
}

export default Tasklist;