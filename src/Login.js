import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
let history=useHistory()
    
    let [userval, setUser] = useState("")
    let [userPassword, setUserPassword] = useState("")
    const handleLogin = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/users`)
            .then((res) => { return res.json() })
            .then((data) => {
                let [user] = data.filter((user) => (user.name === userval || user.email == userval));  // user.uname will be checking every element in json file, by filter when return value is true it will store in new array(user)
                
                if (user != undefined && user.pass === userPassword) {
                    alert(`login success`)
                    history.push('/home')
                } else if (user != undefined && user.pass !== userPassword) {
                    alert(`wrong password please enter valid password`)
                }
                else {
                    alert(`user not found`)
                }
            })

    }

    return (
        <div className="headding">
            <h1>Login to your account</h1>
            <hr />
            <div className="createlogin">

                <form onSubmit={handleLogin}>
                    <input type="text" name="email" placeholder="Enter the email or name" required value={userval} onChange={(e) => { setUser(e.target.value) }} />
                    <input type="password" name="pass" placeholder="Enter the password" value={userPassword} onChange={(e) => { setUserPassword(e.target.value) }} />
                    <input className="btn" type="submit" value="Login" />
                </form>
            </div>
            <Link id="move" to="/signup">click here to signup</Link>
            
            
        </div>
    );
}

export default Login;