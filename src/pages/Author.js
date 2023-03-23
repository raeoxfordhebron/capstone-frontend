import { useLoaderData } from "react-router-dom"

const Author = (props) => {
    const author = useLoaderData()
    return (<>
        <h1>{author.name}</h1>
        <img src={author.image} alt={author.name}/>
        </>
    )
}

export default Author