import "./Search.css";

function Search() {
  return (
    <div className="Search">
      <form>
        <input
          type="search"
          label="Search for an artist"
          placeholder="Search for an artist"
          className="Search-bar"
        ></input>
        <input type="submit" value="Search" className="Search-button"></input>
      </form>
    </div>
  );
}

export default Search;
