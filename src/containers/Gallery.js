import React, { useState, useEffect } from 'react';
import Storage from 'key-storage';
import { Grid, Button } from '@material-ui/core';
import GalleryMovie from '../components/GalleryMovie';
import GalleryService from '../services/GalleryService';
import Favorites from '../components/Favorites';
import Search from '../components/Search';

const Gallery = () => {
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    let moviesStorage = JSON.parse(Storage.get('movies'));
    let favs = JSON.parse(Storage.get('favorites'));
    if (moviesStorage) {
      setMovies(moviesStorage);
    }
    if (favs) {
      setFavorites(favs);
    }
  }, []);

  useEffect(() => {
    async function searchMovie() {
      const movieFromSearch = await GalleryService.getMovies(searchValue);
      if(movieFromSearch.Title) {
        setMovies([...movies, movieFromSearch]);
      }
    }
    if (searchValue) {
      searchMovie();
    }
  }, [searchValue]);

  useEffect(() => {
    Storage.set('movies', JSON.stringify(movies));
  }, [movies]);
  
  const addFavoriteHandler = async (index) => {
    const newFav = movies[index];
    if (!favorites.find(movie => movie.imdbID === newFav.imdbID)) {
      const newFavLS = JSON.stringify([...favorites, newFav]);
      const newMovies = movies.filter(movie => movie.imdbID !== newFav.imdbID);
      const newMoviesLS = JSON.stringify(newMovies);
      Storage.set('favorites', newFavLS);
      Storage.set('movies', newMoviesLS);
      setFavorites([...favorites, newFav]);
      setMovies(newMovies);
    }
  }

  const deleteFavoriteHandler = async (index) => {
    const copyFavs = [...favorites];
    let deletedFav = favorites[index];
    let save = true;
    copyFavs.splice(index, 1);
    Storage.set('favorites', JSON.stringify(copyFavs));
    for (let movie of movies) {
      if (movie.imdbID === deletedFav.imdbID) {
          save = false;
      }
    }
    if (save) {
      const newMovies = [...movies, deletedFav];
      setMovies(newMovies);
      Storage.set('movies', JSON.stringify(newMovies));
    }

    setFavorites(copyFavs);
  }

   const searchMoviesHandler = (event) => {
    if (event.type === 'click' || event.charCode === 13) {
        let search = document.querySelector('#search');
        let searchWord = search.value.toLowerCase();
        search.value = '';
        setSearchValue(searchWord);
    }
  }

  const clearData = () => {
    Storage.remove('movies');
    Storage.remove('favorites');
    setMovies([]);
    setFavorites([]);
  }

    return(
    <div refs='gallery-container' className='container-fluid gallery-container'>
      <Favorites movies={favorites} size={3} deleteFavorite={deleteFavoriteHandler}/>
      <Search searchMoviesHandler={searchMoviesHandler}/>
      <Button size="small" onClick={() => clearData()} variant="contained" color={'secondary'}>
        Clear Data
      </Button>
      <Grid container spacing={16}>
        {
          movies.map((movie, index) => {
          return <GalleryMovie movie={movie} index={index} key={movie.imdbID} favoriteAction={addFavoriteHandler} btnClass="primary" icon="star"/>
          })
        }
        {
          movies.length === 0 && 
            <p>No movies</p>
        }
      </Grid>
    </div>
    )
 }

 export default Gallery;