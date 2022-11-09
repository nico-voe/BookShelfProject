import { useEffect, useState } from "react";
import Book from "./Book";

const BookShelf = ({ shelfTitle, section, handleChange, books }) => {
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
                  <Book
                    handleChange={handleChange}
                    book={book}
                    key={book.id}
                    shelf={book.shelf}
                  />
                ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookShelf;
