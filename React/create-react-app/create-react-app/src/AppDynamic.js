import React from "react";
import BookTable from "./BookTable";

function App() {
    const books = [
        {
            isbn: "978-0-262-13472-9",
            title: "React Basics",
            author: "Dan Abramov",
            price: 499,
            published: new Date('04-04-2004'),
            publisherName: "Springer"
        },
        {
            isbn: "978-1-638564-345-9",
            title: "Javascript Essentials",
            author: "Brendan",
            price: 299,
            published: new Date('04-04-2004'),
            publisherName: "Springer"
        }
    ]
}