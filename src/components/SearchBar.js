import React from "react";

class SearchBar extends React.Component {
  state = {
    searchQuery: "",
  };
  render() {
    return (
      <form>
        <div className="form-row mb-5">
          <div className="col-12">
            <input
              onChange={(event) =>
                this.setState({ searchQuery: event.target.value })
              }
              type="text"
              className="form-control"
              placeholder="Search a movie"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
