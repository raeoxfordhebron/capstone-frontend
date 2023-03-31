import { Form } from "react-router-dom"

const Home = (props) => {
    return <>
    <div>
        <h1>Sign Up</h1>
        <Form>
            <label>
                Email: <input type="text" name="email"/>
            </label>
            <label>
                Password: <input type="password" name="password"/>
            </label>
            <button>Submit</button>
        </Form>
    </div>
        <div>
        <h1>Log In</h1>
        <Form>
            <label>
                Email: <input type="text" name="email" required/>
            </label>
            <label>
                Password: <input type="password" name="password" required/>
            </label>
            <button>Submit</button>
        </Form>
    </div>
    </>
}

export default Home