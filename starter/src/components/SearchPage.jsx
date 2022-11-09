import { search } from "../BooksAPI";
import { useState, useEffect } from "react";
import Book from "./Book";

const SearchPage = ({
  showSearchPage,
  setShowSearchPage,
  handleChange,
  books,
}) => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    try {
      const query = e.target.value;
      const getResults = await search(query, 10);
      if (getResults.length) {
        setSearchResults(getResults);
      } else {
        setSearchResults(null);
      }

      console.log("searchResults", searchResults);
      console.log("search(query, 10)", search(query, 10));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a
          className="close-search"
          onClick={() => setShowSearchPage(!showSearchPage)}
        >
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            onChange={handleSearch}
            type="text"
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchResults ? (
            searchResults.map((book) => (
              <Book
                handleChange={handleChange}
                book={book}
                key={book.id}
                shelf={book.shelf}
              />
            ))
          ) : (
            <p>There are no books matching your search</p>
          )}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
