import { useState } from "react"
import "/src/style.css"



const BookLibrary = () => {
    const [books, setBooks] = useState([]);
    const [addedBooks, setAddedBooks] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const bookName = e.target.book.value;

        // api link
        const api = `https://www.googleapis.com/books/v1/volumes?q=${bookName}`;

        try {
            const data = await (await fetch(api)).json();

            const extractedBooks = data.items.map((item) => ({
              title: item.volumeInfo.title || "No title available",
              subtitle: item.volumeInfo.subtitle || "No subtitle available",
              authors: item.volumeInfo.authors || ["No authors available"],
              publishedDate: item.volumeInfo.publishedDate || "No published date available",
              publisher: item.volumeInfo.publisher || "No publisher available",
              thumbnail: item.volumeInfo.imageLinks?.thumbnail || "No thumbnail available"
            }));

            setBooks(extractedBooks);
            
            console.log(books)

        } catch(error){
            console.error(error)
        }

    }

    const handleClick = (book) => {
        const storeBook = JSON.parse(localStorage.getItem("addedBooks")) || [];

        const isBook = storeBook.find((i) => i.title === book.title);

        if (isBook){
            alert("Book is already added")
            return;
        }

        const updatedBooks = [...storeBook,book];
        localStorage.setItem("addedBooks",JSON.stringify(updatedBooks))
        setAddedBooks(updatedBooks)
        
    }
    

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="book" placeholder="Type book name here: " />
          <button>Submit</button>
        </form>

        <div className="books-container">
          {books.map((book, item) => (
            <div key={item} className="book-card">
              {book.thumbnail !== "No thumbnail available" ? (
                <img src={book.thumbnail} alt="Book cover" />
              ) : (
                <div className="no-image">No image available</div>
              )}
              <div className="book-info">
                <p>
                  <b>Title:</b> {book.title}
                </p>
                <p>
                  <b>Author:</b> {book.authors.join(", ")}
                </p>
                <p>
                  <b>Date:</b> {book.publishedDate}
                </p>
                <p>
                  <b>Publisher:</b> {book.publisher}
                </p>
              </div>
                {(JSON.parse(localStorage.getItem("addedBooks")) || []).findIndex((x) => (x.title === book.title)) !== -1 ? <button>Already added</button> : <button onClick={() => handleClick(book)}>Add</button>}
            </div>
          ))}
        </div>
      </div>
    );
}



 
export default BookLibrary