import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './components/Main'

function App() {

  const [data, setData] = useState([]);
  const [chosenDate, setChosenDate] = useState("");


  const apiKey = "eA5sAhbADxoIlDM4gSKkgsfuhWvYOqTtPakQOG4T";
  const today = new Date()
  const todayDate = today.getFullYear()+'-'+(String(today.getMonth()+1).padStart(2,'0'))+'-'+today.getDate()
  const displayDate = today.toLocaleString('en-uk',{day:'numeric', month:'long', year:'numeric'})


  async function fetchData() { 
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${todayDate}`)
    const responseJson = await response.json();
    // console.log(responseJson)
    setData(responseJson);
  };

  async function fetchChosenDate() {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${chosenDate}`)
    const responseJson = await response.json();
    console.log(responseJson)
    setChosenDate(responseJson)
  }

  useEffect(() => {
     fetchData();
     fetchChosenDate()
  }, []);



  return (
    <div className="App">
      <Main data={data} date={todayDate} displayDate={displayDate} chosenDate={chosenDate} setChosenDate={setChosenDate} />
    </div>
  );
}

export default App;
