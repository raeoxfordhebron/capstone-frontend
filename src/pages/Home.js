import { Form } from "react-router-dom"
import "./Home.css"
import { useState } from "react";
import axios from "axios";

const url = "https://capstone-backend-072l.onrender.com/"

const Home = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [register, setRegister] = useState("")

    function onEmailChange(e){
        setEmail(e.target.value)
    }

    function onPasswordChange(e){
        setPassword(e.target.value)
    }

    return <>
    <h1 className="title">Sign Up</h1>
    <div className="sign-up-container">
        <Form className="card">
            <label>
                Email: <input type="text" name="email" value={email} onChange={onEmailChange}/>
            </label>
            <label>
                Password: <input type="password" name="password" value={password} onChange={onPasswordChange}/>
            </label>
            <button className="button">Submit</button>
        </Form>
    </div>
        <h1 className="title">Log In</h1>
        <div className="log-in-container">
        <div className="card">
        <Form action="/register" method="post">
            <label>
                Email: <input type="text" name="email" required/>
            </label>
            <label>
                Password: <input type="password" name="password" required/>
            </label>
            <button className="button">Submit</button>
        </Form>
        </div>
    </div>
    </>
}

export default Home