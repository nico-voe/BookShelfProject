import "./App.css";
import { useState, useEffect } from "react";
import BookShelf from "./components/BookShelf";
import Header from "./components/Header";
import SearchPage from "./components/SearchPage";
import OpenSearch from "./components/OpenSearch";
import { update, getAll } from "./BooksAPI";

function App() {
  const [showSearchPage, setShowSearchPage] = useState(false);

  const [books, setBooks] = useState([]);
  const [render, setRender] = useState(null);

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
  }, [render]);
  console.log("books", books);

  const handleChange = (e, book) => {
    update(book, e.target.value).then((data) => {
      setRender(!render);
      console.log("render", render);
    });
  };

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchPage
          showSearchPage={showSearchPage}
          setShowSearchPage={setShowSearchPage}
          handleChange={handleChange}
          books={books}
        />
      ) : (
        <div className="list-books">
          <Header />

          <BookShelf
            books={books}
            handleChange={handleChange}
            shelfTitle="Currently Reading"
            section="currentlyReading"
          />

          <BookShelf
            books={books}
            handleChange={handleChange}
            shelfTitle="Want to Read"
            section="wantToRead"
          />

          <BookShelf
            books={books}
            handleChange={handleChange}
            shelfTitle="Read"
            section="read"
          />
          <OpenSearch
            showSearchPage={showSearchPage}
            setShowSearchPage={setShowSearchPage}
          />
        </div>
      )}
    </div>
  );
}

export default App;
