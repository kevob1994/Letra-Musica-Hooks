import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import Form from './components/Form';
import Info from './components/Info';
import Song from './components/Song';

function App() {
  const [ artist, setArtist ] =useState("")
  const [ letter, setLetter ] =useState([])
  const [ info, setInfo ] =useState([])
  // const [ flag, setFlag ] =useState(false)
  const consultAPILetter = async search => {
    const { artist, song } = search
    const url = `https://api.lyrics.ovh/v1/${artist}/${song}`
    
    const result = await axios(url)

    setLetter(result.data.lyrics)

    // setFlag(true)
    setArtist(artist)
  }

  const consultAPIInfo = async () => {
    if(artist){
      const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      const result = await axios(url);
      setInfo(result.data.artists[0])

    }
  }

  useEffect(() => {
    consultAPIInfo();
  }, [artist])
  // useEffect(() => {
  //   // consultAPIInfo();
    
  //   if(flag == true){

  //     console.log("entro")
  //   }
  //   setFlag(false)
  // }, [flag])

  return (
    <Fragment>
      <Form 
        consultAPILetter={consultAPILetter}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info
              info={info}
            />
          </div>
          <div className="col-md-6">
            <Song 
              letter={letter}
            />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App;