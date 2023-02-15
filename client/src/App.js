import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'

function App() {

const {boulders, setBoulders} = useState([])
useEffect(() => {
  axios.get("/boulders")
    .then(res => console.log(res))
},[])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
