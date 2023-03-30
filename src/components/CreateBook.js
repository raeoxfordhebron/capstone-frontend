import { Form } from "react-router-dom"
import { CreateBookContainer, CreateInput, SubmitButton } from "../styled-components/CreateBook"

const CreateBook = (props) => {
    return <>
    <CreateBookContainer>
    <Form action="/book/create" method="post">
    <CreateInput type="text" name="title" placeholder="Write Title Here"/>
    <CreateInput type="text" name="genre" placeholder="Write Genre Here" className="create-input"/>
    <CreateInput type="text" name="image" placeholder="Enter Image Here" className="create-input"/>
    <SubmitButton>Submit</SubmitButton>
    </Form>
    </CreateBookContainer>
</>
}

export default CreateBook