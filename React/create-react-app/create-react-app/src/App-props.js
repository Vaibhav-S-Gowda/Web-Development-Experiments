import React from "react";
// import Book from './components/Book';
import BookClass from './components/BookClass';

function App() {
    return (
        <div style={{border: "1px solid gray", margin: "10px", paddding: "10px", color: "orange"}}>
            <h1>Book Store</h1>
            {/*<BookClass*/}
            <BookClass title = "React Basics"
            author = "Dan Abramov"
            price = {499}/>
            <BookClass title = "Algorithms Analysis and Design"
            author = "Shanmukha Ishwar Bhat"
            price = {999}/>
            <BookClass title = "Data Communications and Network"
            author = "Kalpana "
            price = {699}/>
            <BookClass title = "Scalable Data Processing"
            author = "Niteesh Kumar"
            price = {899}/>
        </div>
    );
}

export default App;