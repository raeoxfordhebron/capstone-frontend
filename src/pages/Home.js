import { Form } from "react-router-dom"
import "./Home.css"

const Home = (props) => {
    return <>
    <h1 className="title">Sign Up</h1>
    <div className="sign-up-container">
        <Form className="card">
            <label>
                Email: <input type="text" name="email"/>
            </label>
            <label>
                Password: <input type="password" name="password"/>
            </label>
            <button className="button">Submit</button>
        </Form>
    </div>
        <h1 className="title">Log In</h1>
        <div className="log-in-container">
        <Form className="card">
            <label>
                Email: <input className="user-input" type="text" name="email" required/>
            </label>
            <label>
                Password: <input className="user-input" type="password" name="password" required/>
            </label>
            <button className="button">Submit</button>
        </Form>
        </div>
    </>
}

export default Home