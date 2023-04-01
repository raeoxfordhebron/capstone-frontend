import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App"
import { authorShowLoader, bookShowLoader, bookIndexLoader, authorIndexLoader } from "./loaders";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Author from "./pages/Author"
import Index from "./pages/Index"
import { createAuthorAction, createBookAction, deleteBookAction, updateBookAction } from "./actions";
import Authors from "./pages/Authors";
import Create from "./pages/Create";

const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element={<App/>}>
        <Route path="" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="book/:id" element={<Book/>}loader={bookShowLoader}/>
        <Route path="book/create" action={createBookAction}/>
        <Route path="book/update/:id" action={updateBookAction}/>
        <Route path="book/delete/:id"action={deleteBookAction}/>
        <Route path="author/:id" element={<Author/>} loader={authorShowLoader}/>
        <Route path="author/create" action={createAuthorAction}/>
        <Route path="author/update/:id"/>
        <Route path="author/delete/:id"/>
        <Route path="index" element={<Index/>} loader={bookIndexLoader}/>
        <Route path="authors" element={<Authors/>} loader={authorIndexLoader}/>
    </Route>
    </>
))

export default router