import BookTable from "./components/BookTable";

function App() {
    const books = [
        {
            isbn: "978-0-262-13472-9",
            title: "React Basics",
            author: "Dan Abramov",
            price: 499,
            published: new Date('2004-04-04'),
            publisherName: "Springer"
        },
        {
            isbn: "978-1-638564-345-9",
            title: "Javascript Essentials",
            author: "Brendan",
            price: 299,
            published: new Date('2004-04-04'),
            publisherName: "Springer"
        }
    ];

    return (
        <div className="App">
            <header className="App-header">
            <h1>Book Store</h1>
            </header>
            <BookTable books={books} />
        </div>
    );
}

export default App;