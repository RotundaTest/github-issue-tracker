import React from 'react';
import './App.css';
import axios from "axios";

function App() {

  //TODO: crear una organizacion y un repo publicos, y autoasignarme issues a mi y a nico-ledesma

  axios.get('https://api.github.com/orgs/RotundaTest/issues')
      .then(response => console.log(response.data))



  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
