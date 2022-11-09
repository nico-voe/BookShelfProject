import { useState } from "react";

const Book = ({ book, handleChange, shelf }) => {
  console.log(book.title, shelf);
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                book.imageLinks && book.imageLinks.thumbnail
              })`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              value={shelf ? shelf : "none"}
              onChange={(e) => {
                handleChange(e, book);
              }}
            >
              <option disabled>Move to...</option>
              {/* <option value="currentlyReading" selected disabled hidden>
                Currently Reading
              </option> */}
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </li>
  );
};

export default Book;
