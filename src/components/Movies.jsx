import React from "react";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Pagination from "./Pagination";

function Movies() {
  const [pageNo, setPageNo] = useState(1);
  const [movies, setMovies] = useState([]);

  const first = ()=>{
        setPageNo(1)
}
const last = ()=>{
      setPageNo(20)
}
const prev = ()=>{
  if(pageNo>1){
      setPageNo(pageNo-1)
  }
}

  const next = ()=>{
    if (pageNo<20){
        setPageNo(pageNo+1)
    }
  }

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=b62a4c58b90b3d9eb5413bbbd7c9a90f&page=${pageNo}`).then(function (res) {
        setMovies(res.data.results);
      });
  }, [pageNo]);
  return (
    <>
      <div className="m-auto">
        <div className="p-4 text-xl w-screen font-bold text-center">
          Treading Movies
        </div>

        <div className="flex md:gap-10 flex-wrap gap-3 justify-center ">
          {movies.map((movieObj) => {
            return (
              <MovieCard
                poster_path={movieObj.poster_path}
                original_title={movieObj.original_title}
              />
            );
          })}
        </div>

        <Pagination pageNo={pageNo} prev={prev} next={next} first={first} last={last}/>
      </div>
    </>
  );
}

export default Movies;

//
