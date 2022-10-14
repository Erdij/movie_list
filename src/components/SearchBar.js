import React from "react";

class SearchBar extends React.Component {
  handleFromSubmit = (event) => {
    event.preventDefault(); //varsayılan davranışı durdurduk.Çünkü enter deyince refresh ediyordu sayfa.
  };

  render() {
    return (
      <form onSubmit={this.handleFromSubmit}>
        <div className="form-row mb-5">
          <div className="col-12">
            <input
              onChange={this.props.searchMovieProp}
              type="text"
              className="form-control"
              placeholder="Search a movie"
              // value={this.state.searchQuery} // controlled components
            />
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
