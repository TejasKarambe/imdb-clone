import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState } from "react";

function App() {

  let [watchlist, setWatchList] = useState([])

  
  let handleAddtowatchlist = (movieObj)=>{
    let newWatchList = [...watchlist, movieObj]
    setWatchList[newWatchList]
    console.log(newWatchList)
  }
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route path="/" element={<><Banner /><Movies /></>}/>



          <Route path="/Watchlist" element={<Watchlist />}/>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
