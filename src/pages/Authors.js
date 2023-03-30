import { Link, useLoaderData } from 'react-router-dom'
import { AuthorContainer, AuthorBox, Author } from '../styled-components/Authors'

const Authors = (props) => {
    const authors = useLoaderData()
    return <>
    <AuthorContainer>
    {authors.map((author) => {
        return <Author key={author.id}>
            <Link to={`/author/${author.id}`}>
                <h1>{author.name}</h1>
            </Link>
            <img src={author.image} alt={author.name}/>
        </Author>
        
    })}
    </AuthorContainer>
    </>
}

export default Authors