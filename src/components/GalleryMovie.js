import React, { Component } from 'react';
import { Card, Grid, Button, Icon } from '@material-ui/core';

class GalleryMovie extends Component{
  render() {
    const props = this.props;
    const { Poster, Title, Year, imdbRating, Director, Genre, Plot  } = this.props.movie;
    return (
      <Grid item xs={4} sm={props.isFavorite? 4 : 3} md={props.isFavorite? 4 : 2}>
        <Card className='card'>
            <a className='download' target="_blank" rel="noopener noreferrer" href={Poster}>
              <i className='fa fa-download'></i>
            </a>
            <img className="card-img-top" src={Poster} alt="img"/>
            <div className="movie-info">
              <h2 className="title">
                {Title}
              </h2>
              <div className="description">
                <p>{`Year: ${Year}`}</p>
                <p>{`IMDB Rating: ${imdbRating}`}</p>
                <p>{`Director: ${Director}`}</p>
                <p>{`Genre: ${Genre}`}</p>
                <p>{`Plot: ${Plot}`}</p>
              </div>
              <Button size="small" onClick={() => props.favoriteAction(props.index)} variant="contained" color={props.btnClass}>
                <Icon>{props.icon}</Icon>
              </Button>
            </div>
            
        </Card>
      </Grid>
    )
  }
 }

 export default GalleryMovie;