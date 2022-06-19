import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState([])

  const apiKey = "eA5sAhbADxoIlDM4gSKkgsfuhWvYOqTtPakQOG4T";
  const today = new Date()
  const todayDate = today.getFullYear()+'-'+(String(today.getMonth()+1).padStart(2,'0'))+'-'+today.getDate()
  const displayDate = today.toLocaleString('en-uk',{day:'numeric', month:'long', year:'numeric'})
  let requestedDate = todayDate


  async function fetchData() { 
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${requestedDate}`)
    const responseJson = await response.json();
    console.log(responseJson)
    setData(responseJson);
  };

  useEffect(() => {
     fetchData()
  }, []);






  return (
    <div className="App">
    </div>
  );
}

export default App;
