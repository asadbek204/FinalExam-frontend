import React, {useState} from 'react';
import BtnNewStories from "../../components/buttons/btnNewStories/BtnNewStories";


const newStories = <BtnNewStories style={{backgroundColor: 'red', width: '100vw', height: '90vh'}}/>
const defaultPage = <div style={{width: '100vw', height: '90vh', marginTop: 'auto', backgroundColor: 'green'}}></div>

type HomeProperties = {
  style: React.CSSProperties,
}

function Home({style}: HomeProperties) {
  const [page, setPage] = useState(defaultPage)
  return (
    <>
      <div id='home' style={style}></div>
      <button style={{position: 'absolute', top: '5vh', left: '0'}} onClick={() => {setPage(newStories)}}>Stories</button>
      {page}
    </>
  );
}

export default Home;