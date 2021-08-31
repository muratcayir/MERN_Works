import "./login.scss"
import { Link } from "react-router-dom"
export default function Login() {
    return (
        <div className="login">
           <span className="login-title">Login</span>
           <form  className="login-form">
               <label >Email</label>
               <input type="text" className="login-input"placeholder="Enter your email..."/>   
               <label >Password</label>
               <input type="password" className="login-input"placeholder="Enter your password..."/>
               <button className="login-button">Login</button>   
            </form>  
            <button className="register-button"><Link to="/register">Register</Link></button>   
        </div>
    )
}
