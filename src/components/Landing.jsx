import { Link } from "react-router-dom";



const Landing = () => {
    return (
        
            <div className="landing">
                <Link to="/login"><button id="btn1">Login to your Account</button></Link>
                <h3 >Don't have an account ?</h3>
                <Link to="/signup"><button id="btn1">Create New Account</button></Link>
                <Link to="/home">Add task</Link>
            </div>
            
    );
}

export default Landing;