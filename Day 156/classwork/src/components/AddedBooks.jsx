const AddedBooks = () => {

    const books = JSON.parse(localStorage.getItem("addedBooks")) || [];

    return (
      <div>
        <h1>My Library</h1>
        {books.map((item,index) => (
          <div key={index}>
            <img src={item.thumbnail} alt="" />
            <p>
              <b>Title:</b> {item.title}
            </p>
            <p>
              <b>Author:</b> {item.authors.join(", ")}
            </p>
            <p>
              <b>Date:</b> {item.publishedDate}
            </p>
            <p>
              <b>Publisher:</b> {item.publisher} <hr />
            </p>
          </div>
        ))}
      </div>
    );
}

export default AddedBooks;