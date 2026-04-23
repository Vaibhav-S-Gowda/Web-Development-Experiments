import React from "react";
import BookRow from "./BookRow";

function BookTable({ books }) {
    const bookRows = books.map(book => (
        <BookRow key={book.isbn} book={book}/>
    ));

    return (
        <table border="1">
            <thead>
                <tr>
                    <th>ISBN</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Price</th>
                    <th>Published</th>
                </tr>
            </thead>

            <tbody>
                {bookRows}
            </tbody>
        </table>
    );
}

export default BookTable;