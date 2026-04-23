import React from "react";

function BookRow({ book }) {
    return (
        <tr>
            <td>{book.isbn}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.price}</td>
            <td>{book.published.toDateString()}</td>
        </tr>
    );
}
export default BookRow;