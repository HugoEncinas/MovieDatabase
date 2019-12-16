import React from 'react';
import Gallery from '../containers/Gallery';
import Header from '../components/Header';

const Home = (props) => {
  return (
    <React.Fragment>
      <Header title="React Js Movie Gallery"/>
      <Gallery size={12}></Gallery>
    </React.Fragment>
    
  );
}

export default Home;