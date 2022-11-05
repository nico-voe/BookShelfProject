import { getAll } from "../BooksAPI";
import { useEffect, useState } from "react";
import Book from "./Book";

const BookShelf = ({ shelfTitle, section }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAll();
        setBooks(res);
      } catch (err) {
        console.log("Error", err);
      }
    };
    fetchData();
  }, []);
  console.log("books", books);

  return (
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelfTitle}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books
                ?.filter((el) => el.shelf === section)
                .map((book) => (
                  <Book book={book} key={book.id} shelf={book.shelf} />
                ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookShelf;
