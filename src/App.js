import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MoviesList from './components/MoviesList';
import MovieListHeading from './components/MovieListHeading';
import SearchBar from './components/SearchBar';
import AddFavourite from './components/AddFavourite';
import RemoveFavourite from './components/RemoveFavourite';
import Popup from './components/Popup';

const App=() => {
  const[movies, setMovies] =useState([]);
  const[SearchVal, setSearchVal] = useState('');
  const[Fav, setFav] = useState([]);
  
  const getMovieRequest = async (SearchVal) =>{
    //`` => template string 
    const url =  `http://www.omdbapi.com/?s=${SearchVal}&apikey=ccbce539`
    const response= await fetch(url);
    /*convert http to json -> like on postman*/
    const responseJson = await response.json();
    //setMovies(responseJson.Search);
    //only setMovies when you get a search val
    if(responseJson.Search){
      setMovies(responseJson.Search);
    }
  };
  /*trigger getmovie request everytime the search val changes*/
  /*useEffect always gets called on the first render */
  useEffect(() => {
		getMovieRequest(SearchVal);
	}, [SearchVal]);

  useEffect(() => {
    const movieFav = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);
    if (movieFav){setFav(movieFav);}
  },[]);
  const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};
  const AddFavMovie = (movie) =>{
    //added the movies to existtings fav array
    const newFav= [...Fav,movie];
    //updates the list with newfav
    setFav(newFav);
    saveToLocalStorage(newFav);

  }
  const RemoveFavMovie = (movie) =>{
    const newFav= Fav.filter(
      (Fav)=> Fav.imdbID =! movie.imdbID
      );
      setFav(newFav);
    //updates the list with newfav
    setFav(newFav);
    saveToLocalStorage(newFav);
  }

  /* call the component and pass the movies list to it */
  //heading passed as prop to MovieListHeading
  //mt- margin top
  //mb- margin bottom
  return( 
  <div className='container-fluid movie-app'>
    
		<div className='row d-flex align-items-center mt-4 mb-4'>
				
        <MovieListHeading heading='Movies' />
				<SearchBar 
        SearchVal={SearchVal} 
        setSearchVal={setSearchVal} />
			</div>
      <div className='row'>
        <MoviesList movies={movies} 
        //showDetails= {Popup}
        handleFavClick = {AddFavMovie}
        FavComponent= {AddFavourite}
        />
			</div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
				
        <MovieListHeading heading='Favourites' />
				
			</div>
      <div className='row'>
        <MoviesList movies={Fav} 
        handleFavClick = {RemoveFavMovie}
        FavComponent= {RemoveFavourite}
        />
			</div>
		</div>
  );
}

export default App;
