// import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Edit = () => {
    let history=useHistory()
    const {id}=useParams()
    let { data: task } = useFetch("http://localhost:4000/tasks/" + id)
    
    
   let [userName, setuserName]= useState(task.userName)
   let [taskName, settaskName]= useState(task.taskName)
   let [taskDetails, settaskDetails]= useState(task.taskDetails)
   let [startDate, setstartDate]= useState(task.startDate)
   let [endDate, setendDate]= useState(task.endDate)
   let [status, setstatus]= useState(task.status)


    const handleEdit=(e)=>{
            e.preventDefault()
            let currentDate = new Date()
            let startDate = new Date()
            let endDate = new Date()
            let status = ""
    
            if (currentDate < startDate) {
                status = "pending"
            } else if (currentDate >= startDate && currentDate <= endDate) {
                status = "ongoing"
            } else {
                status = "completed" 
               
            }
    
            const newTask = {userName,taskName,taskDetails,startDate,endDate,status }
    
            fetch("http://localhost:4000/tasks/"+id,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newTask)
                })
                .then(() => {
                    alert(`task added successfully`)
                    history.push('/tasklist')
                })
    }


    return (
        <div className="listforms">
            <h1>Edit task</h1>
            <hr />
          { task && <div className="lists">
                <form onSubmit={handleEdit}>

                    <label>Name :</label>
                    <input type="text" required defaultvalue={task.userName} onChange={(e)=>{setuserName(e.target.value)}} />
                    <label>Task Name :</label>
                    <input type="text"  defaultvalue={task.taskName} onChange={(e)=>{settaskName(e.target.value)}}/>
                    <label>Task Details: </label>
                    <textarea name="" id="" cols="30" rows="3" defaultvalue={task.taskDetails} onChange={(e)=>{settaskDetails(e.target.value)}} ></textarea>
                    <label>Start date : </label>
                    <input type="date" defaultvalue={task.startDate} onChange={(e)=>{setstartDate(e.target.value)}}/>
                    <label>end date : </label>
                    <input type="date" defaultvalue={task.endDate} onChange={(e)=>{setendDate(e.target.value)}}/>

                    <input type="submit" value="Edit Task" />

                </form>
               <Link to="/tasklist"> <button className="btntsk" >take me to task list</button></Link>
            </div>}
            
        
    </div>);
}

export default Edit;