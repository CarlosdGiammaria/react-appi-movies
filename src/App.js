import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import BoardVideo from './components/BoardVideo';
import Searcher from './components/Searcher';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${searchTerm}&apikey=f237aa3a`
      );
      setMovies(response.data.Search);
    };
    fetchData();
  }, [searchTerm]);

  const handleOnchange =(e)=>{
    setSearchTerm(e.target.value)
  }

  return (
    <div>
      <Searcher handleOnchange={handleOnchange}/>
      <BoardVideo movies={movies}/>
    </div>
  );
}

export default App;
