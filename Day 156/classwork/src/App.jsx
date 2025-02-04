import { useState } from "react"
import AddedBooks from "./components/AddedBooks"
import BookLibrary from "./components/BookLibrary"

function App() {
  const [page, setPage] = useState(false);

  

  return (
    <div>
      <button onClick={() => setPage(!page)}>{page ? "Book Library" : "My Library"}</button>
      {page ? <AddedBooks /> : <BookLibrary />}
    </div>
     
    
  )
}

export default App
