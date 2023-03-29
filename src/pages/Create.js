import { Form } from "react-router-dom";

const Create = (props) => {
    return <>
    <div>
        <h2>Create a Book</h2>
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