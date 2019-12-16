import React from 'react';
import { Grid } from '@material-ui/core';
import GalleryMovie from './GalleryMovie';

const Favorites = (props) => {
  const subtitle = props.isFavoriteList ? '' : 'Favorites';
  return (
    <Grid container spacing={8}>
      <Grid item xs={12}>
        <h4>{props.movies.length > 0 ? subtitle : 'There a currently no favorites'}</h4>
      </Grid>
      <Grid container spacing={8}>
        {
          props.movies.map((movie, index) => {
            return <GalleryMovie movie={movie} index={index} key={movie.imdbID} favoriteAction={props.deleteFavorite} isFavorite={true} btnClass="secondary" icon="close"/>
          })
        }
      </Grid>
    </Grid>
  );
}

export default Favorites;