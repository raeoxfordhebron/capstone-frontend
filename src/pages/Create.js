import { Form } from "react-router-dom";
import Dropdown from "../components/Dropdown";

const Create = (props) => {

    return <>
    <div>
        <h2>Add a Book or Author</h2>
        <Dropdown/>
        <Form action="/book/create" method="post">
            <input type="text" name="title" placeholder="Write Title Here"/>
            <input type="text" name="genre" placeholder="Write Genre Here"/>
            <input type="text" name="image" placeholder="Enter Image Here"/>
            <button>Submit</button>
        </Form>
    </div>
    </>
}

export default Create