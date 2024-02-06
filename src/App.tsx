import React, {useState} from 'react';
import './App.css';
import Home from "./pages/home/Home";
import Videos from "./pages/videos/Videos";

const videosPage: React.JSX.Element = <Videos style={{width: '100vw', height: '100vh', backgroundColor: 'black'}}/>
const homePage: React.JSX.Element = <Home style={{backgroundColor: 'blue', width: '100vw', height: '100vh'}}/>

function App(): React.JSX.Element {
  const [page, setPage] = useState(homePage)
  const open = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPage(prev => {
      let target = e.target as HTMLButtonElement
      target.innerText = ''
      return (page === videosPage) ? homePage : videosPage
    })
  }
  
  return (
    <div className="App">
      {page}
      <button style={{position: 'absolute', top: '0', left: '0'}} onClick={open}>{(page === videosPage) ? "openHomePage": "openVideosPage"}</button>
    </div>
  );
}

export default App;
