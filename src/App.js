import React from 'react';
import './App.css';
import Row from './Row'
import request from './requests';
import Banner from './Banner';
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row title="Netflix Originals" isLargeRow={true} fetchurl={request.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchurl={request.fetchTrending}/>
      <Row title="Top Rated" fetchurl={request.fetchTopRated}/>
      <Row title="Action Movies" fetchurl={request.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchurl={request.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchurl={request.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchurl={request.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchurl={request.fetchDocumentaries}/>
    </div>
  );
}

export default App;
