import "./App.css";
import { useState } from "react";
import BookShelf from "./components/BookShelf";
import Header from "./components/Header";
import SearchPage from "./components/SearchPage";
import OpenSearch from "./components/OpenSearch";

function App() {
  const [showSearchPage, setShowSearchPage] = useState(false);

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchPage
          showSearchPage={showSearchPage}
          setShowSearchPage={setShowSearchPage}
        />
      ) : (
        <div className="list-books">
          <Header />
          <BookShelf />
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
