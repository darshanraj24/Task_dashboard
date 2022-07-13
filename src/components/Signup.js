import { useState,useRef } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {

    let history=useHistory()
    // const [name, setname] = useState("")
    let uName=useRef("")
    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    const [gender, setgender] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(uName.current.value);
        let userName=(uName.current.value)
        var newUser = { userName, email, pass,gender }
        fetch(`http://localhost:3000/users`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser)})
                
                .then(()=>{
                    alert(`this user has been added the list`)
                    history.push("/login")
                })    
    }

    return (<div className="headding">
        <h1>Create your account</h1>
        <hr />
        <div className="createlogin">

            <form onSubmit={handleSubmit} >
                <input type="text" name="name" placeholder="Enter the name" required ref={uName}  />
                <input type="email" name="email" placeholder="Enter the email" value={email} onChange={(e) => { setemail(e.target.value); console.log(email); }} />
                <input type="password" name="pass" placeholder="Enter the password" value={pass} onChange={(e) => { setpass(e.target.value); console.log(pass); }}/>
                <fieldset>
                    <legend>Enter your dob</legend>
                    <input type="radio" value="male" name="gender" id="m" onClick={(e)=>{setgender(e.target.value)}}/>
                    <label htmlFor="m">Male</label>
                    <input type="radio" value="female" name="gender" id="f" onClick={(e)=>{setgender(e.target.value)}}/>
                    <label htmlFor="f">Female</label><br />
                    <input type="radio" value="others" name="gender" id="o" onClick={(e)=>{setgender(e.target.value)}} />
                    <label htmlFor="o">others</label>
                </fieldset>
                <input className="btn" type="submit" />
            </form>
        </div>
        <Link id="move1" to="/login">click here to login</Link>
    </div>);
}

export default Signup;