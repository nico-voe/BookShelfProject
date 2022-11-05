import { update } from "../BooksAPI";

const Book = ({ book }) => {
  const handleChange = (e) => {
    e.preventDefault();
    console.log("e", e.target.value);
    update(book, e.target.value);
  };
  console.log("hi");
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
            <select onChange={(e) => handleChange(e)}>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="wantToRead">Want to Read</option>
              <option value="currentlyReading">Currently Reading</option>
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
