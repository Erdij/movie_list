import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import axios from "axios";
// require("dotenv").config();
console.log(process.env.REACT_APP_API_KEY);
class App extends React.Component {
  state = {
    movies: [
      // {
      //   name: "The Matrix 3",
      //   rating: "8.1",
      //   overview:
      //     "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
      //   imageURL:
      //     "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
      //   id: 7,
      // },
      // {
      //   name: "The Matrix Reloaded",
      //   rating: "6.9",
      //   imageURL:
      //     "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jBegA6V243J6HUnpcOILsRvBnGb.jpg",
      //   overview:
      //     "Six months after the events depicted in The Matrix, Neo has proved to be a good omen for the free humans, as more and more humans are being freed from the matrix and brought to Zion, the one and only stronghold of the Resistance. Neo himself has discovered his superpowers including super speed, ability to see the codes of the things inside the matrix and a certain degree of pre-cognition.",
      //   id: 8,
      // },
      // {
      //   name: "Saw 3D",
      //   rating: "7.5",
      //   overview:
      //     "SAW legacy, a group of Jigsaw survivors gathers to seek the support of self-help guru and fellow survivor Bobby Dagen, a man whose own dark secrets unleash a new wave of terror.",
      //   imageURL:
      //     "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qHCZ6LjtmqWDfXXN28TlIC9OppK.jpg",
      //   id: 11,
      // },
    ],
    searchQuery: "",
  };

  // async componentDidMount() {
  //   const baseURL = "http://localhost:3002/movies";
  //   const response = await fetch(baseURL);
  //   console.log(response); //http response döndü ama biz json formatında istiyoruz.
  //   const data = await response.json(); //json formatına dönüştürdük.
  //   console.log(data);
  //   this.setState({ movies: data });
  // }

  async componentDidMount() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/list/8223918?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    ); // tek seferde datayı json formatında almış olduk.
    console.log(response.data.results); //apiden önce
    console.log(response.data.items); //listteki apiyi çektikten sonra güncelledik.**
    // this.setState({ movies: response.data.results });
    this.setState({ movies: response.data.items }); //**

    // console.log(response);
    // this.setState({ movies: response.data });
  }

  // deleteMovie = (movie) => {
  //   const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
  //   // this.setState({
  //   //   movies: newMovieList,      //önceki state verisi boş ise kullanmak mantıklı
  //   // });
  //   this.setState((state) => ({
  //     movies: newMovieList, // var olan state i güncellemek için
  //   }));
  // };

  // for Fetch Api **
  // deleteMovie = async (movie) => {
  //   const baseURL = `http://localhost:3002/movies/${movie.id}`;
  //   await fetch(baseURL, {
  //     method: "DELETE",
  //   });

  //   const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
  //   this.setState((state) => ({
  //     movies: newMovieList, // var olan state i güncellemek için
  //   }));
  // };

  // for AXIOS API **

  deleteMovie = async (movie) => {
    const baseURL = `https://api.themoviedb.org/3/movie/550?api_key=043e90872a1f8f7d2c22eed3b194f15d/${movie.id}`;
    await fetch(baseURL, {
      method: "DELETE",
    });

    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState((state) => ({
      movies: newMovieList, // var olan state i güncellemek için
    }));
  };

  searchMovie = (event) => {
    // console.log(event.target.value);
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    let filteredMovies = this.state.movies.filter((movie) => {
      return movie.title.toLowerCase().indexOf(this.state.searchQuery) !== -1;
    });
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SearchBar searchMovieProp={this.searchMovie} />
          </div>
        </div>
        <MovieList movies={filteredMovies} deleteMovieProp={this.deleteMovie} />
      </div>
    );
  }
}
export default App;
