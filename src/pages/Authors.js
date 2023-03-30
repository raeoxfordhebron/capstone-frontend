import { Link, useLoaderData } from 'react-router-dom'
import { AuthorContainer, Title, Author, Name, Pic, PicContainer } from '../styled-components/Authors'
import './Authors.css'

const Authors = (props) => {
    const authors = useLoaderData()
    return <>
    <Title>Authors</Title>
    <AuthorContainer>
    {authors.map((author) => {
        return <div>
        <Author key={author.id}>
            <Link to={`/author/${author.id}`} className="link">
                <Name>{author.name}</Name>
            </Link>
            <PicContainer>
            <Pic src={author.image} alt={author.name}/>
            </PicContainer>
        </Author>
        </div>
    })}
    </AuthorContainer>
    </>
}

export default Authors