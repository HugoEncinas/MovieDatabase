import React, { Component } from 'react';
import Storage from 'key-storage';
import { Typography } from '@material-ui/core';
import Favorites from '../components/Favorites';

class FavoritesList extends Component{
  state = {
    movies: [],
    favorites: []
  }

  async componentDidMount() {
    let movies = JSON.parse(Storage.get('movies'));
    let favs = JSON.parse(Storage.get('favorites'));
    this.setState({
      movies,
      favorites: favs || []
    });
  }

  deleteFavoriteHandler = async (index) => {
    const copyFavs = [...this.state.favorites];
    let deletedFav = this.state.favorites[index];
    let save = true;
    copyFavs.splice(index, 1);
    Storage.set('favorites', JSON.stringify(copyFavs));
    for (let movie of this.state.movies) {
      if (movie.imdbID === deletedFav.imdbID) {
          save = false;
      }
    }
    if (save) {
      const newMovies = [...this.state.movies, deletedFav];
      this.setState({
        movies: newMovies,
      })
      Storage.set('movies', JSON.stringify(newMovies));
    }
    this.setState({
      favorites: copyFavs
    });
  }

  render() {
    const { favorites } = this.state;
    return(
    <div refs='gallery-container' className='container-fluid gallery-container'>
      <Typography variant="title" color="inherit" >
          Favorites
      </Typography>
      <Favorites movies={favorites} size={favorites.length} deleteFavorite={this.deleteFavoriteHandler} isFavoriteList="true"/>
    </div>
    )
  }
 }

 export default FavoritesList;