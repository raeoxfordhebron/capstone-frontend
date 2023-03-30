import { Form } from "react-router-dom"
import { CreateAuthorContainer, CreateInput, SubmitButton } from "../styled-components/CreateAuthor"

const CreateAuthor = (props) => {
    return <>
    <CreateAuthorContainer>
    <Form action="/author/create" method="post">
    <CreateInput type="text" name="name" placeholder="Write Name Here"/>
    <CreateInput type="text" name="image" placeholder="Enter Image Here"/>
    <SubmitButton>Submit</SubmitButton>
    </Form>
    </CreateAuthorContainer>
</>
}

export default CreateAuthor