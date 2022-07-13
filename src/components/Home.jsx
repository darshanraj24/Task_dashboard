import { useRef } from "react";
import { Link, useHistory } from "react-router-dom";

const Home = () => {

    let history=useHistory()
    let uName = useRef("")
    let uTaskName = useRef("")
    let uTaskDetails = useRef("")
    let uStartDate = useRef("")
    let uEndDate = useRef("")

    const handleSubmit = (e) => {
        e.preventDefault()
        let currentDate = new Date()
        let startDate = new Date(uStartDate.current.value)
        let endDate = new Date(uEndDate.current.value)
        let status = ""

        if (currentDate < startDate) {
            status = "pending"
        } else if (currentDate >= startDate && currentDate <= endDate) {
            status = "ongoing"
        } else {
            status = "completed" 
           
        }

        const newTask = {
            userName: uName.current.value,
            taskName: uTaskName.current.value,
            taskDetails: uTaskDetails.current.value,
            startDate: uStartDate.current.value,
            endDate: uEndDate.current.value,
            status
        }


        fetch("http://localhost:4000/tasks",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newTask)
            })
            .then(() => {
                alert(`task added successfully`)
                history.push('/tasklist')

            })

    }

    return (<div >
        <div className="listforms">
            <h1>Add a task</h1>
            <div className="lists">
                <form onSubmit={handleSubmit}>

                    <label>Name :</label>
                    <input type="text" required ref={uName} />
                    <label>Task Name :</label>
                    <input type="text" ref={uTaskName} />
                    <label>Task Details: </label>
                    <textarea name="" id="" cols="30" rows="3" ref={uTaskDetails}></textarea>
                    <label>Start date : </label>
                    <input type="date" ref={uStartDate} />
                    <label>end date : </label>
                    <input type="date" ref={uEndDate} />

                    <input type="submit" value="Addtask" />

                </form>
               <Link to="/tasklist"> <button className="btntsk">take me to task list</button></Link>
            </div>
            <Link id="homelink" to="/">Home</Link>
        </div>
    </div>);
}

export default Home;