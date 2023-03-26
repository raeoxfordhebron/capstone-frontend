import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App"
import { authorShowLoader, bookShowLoader, indexLoader } from "./loaders";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Author from "./pages/Author"
import Index from "./pages/Index"
import { createBookAction, deleteBookAction, updateBookAction } from "./actions";
import Authors from "./pages/Authors";

const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element={<App/>}>
        <Route path="" element={<Home/>}/>
        <Route path="book/:id" element={<Book/>}loader={bookShowLoader}/>
        <Route path="book/create" action={createBookAction}/>
        <Route path="book/update/:id" action={updateBookAction}/>
        <Route path="book/delete/:id"action={deleteBookAction}/>
        <Route path="author/:id" element={<Author/>} loader={authorShowLoader}/>
        <Route path="author/create"/>
        <Route path="author/update/:id"/>
        <Route path="author/delete/:id"/>
        <Route path="index" element={<Index/>} loader={indexLoader}/>
        <Route path="authors" element={<Authors/>}/>
    </Route>
    </>
))

export default router