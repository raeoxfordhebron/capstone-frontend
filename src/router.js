import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App"
import { authorShowLoader, bookShowLoader, indexLoader } from "./loaders";
import Home from "./pages/Home";
import Book from "./components/Book";
import Author from "./components/Author"
import Index from "./pages/Index"
import Show from "./pages/Show"

const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element={<App/>}>
        <Route path="" element={<Home/>}/>
        <Route path="book/:id" element={<Book/>} loader={bookShowLoader}/>
        <Route path="book/create"/>
        <Route path="book/update/:id"/>
        <Route path="book/delete/:id"/>
        <Route path="author/:id" element={<Author/>} loader={authorShowLoader}/>
        <Route path="author/create"/>
        <Route path="author/update/:id"/>
        <Route path="author/delete/:id"/>
        <Route path="index" element={<Index/>} loader={indexLoader}/>
        <Route path="show" element={<Show/>} loader={bookShowLoader}/>
    </Route>
    </>
))

export default router