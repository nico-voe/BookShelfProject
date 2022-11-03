const OpenSearch = ({ showSearchPage, setShowSearchPage }) => {
  return (
    <div className="open-search">
      <a onClick={() => setShowSearchPage(!showSearchPage)}>Add a book</a>
    </div>
  );
};

export default OpenSearch;
