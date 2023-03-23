import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App"
import { authorShowLoader, bookShowLoader, indexLoader } from "./loaders";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Author from "./pages/Author"
import Index from "./pages/Index"

const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element={<App/>}>
        <Route path="" element={<Home/>}/>
        <Route path="book/:id" element={<Book/>}loader={bookShowLoader}/>
        <Route path="book/create"/>
        <Route path="book/update/:id"/>
        <Route path="book/delete/:id"/>
        <Route path="author/:id" element={<Author/>} loader={authorShowLoader}/>
        <Route path="author/create"/>
        <Route path="author/update/:id"/>
        <Route path="author/delete/:id"/>
        <Route path="index" element={<Index/>} loader={indexLoader}/>
    </Route>
    </>
))

export default router