import React from 'react';
import { TextField, Grid, Icon } from '@material-ui/core';

const Search = (props) => {
  return (
    <Grid container spacing={8} alignItems="flex-end" justify="center">
      <Grid item>
        <Icon onClick={props.searchMoviesHandler}>search</Icon>
      </Grid>
      <Grid item>
        <TextField id="search"
          label="Search movie by title"
          type="search"
          onKeyPress={props.searchMoviesHandler}
          margin="normal" />
      </Grid>
    </Grid>
  );
}

export default Search;