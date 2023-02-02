import './App.css';
import react, { useState, useEffect, Component } from 'react';
import './App.css';
import CanvasJSReact from "../src/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function App() {

  const [krakenData, setKrakenData] = useState([]);
  const [binanceData, setBinanceData] = useState([]);
  const exchanges = ['kraken','binance'];
  
const options = {
  animationEnabled: true,	
  theme: "dark1", 
  title:{
    text: "Exchange Rates"
  },
  axisY : {
    prefix: "$",
		title: "Price (in USD)"
  },
  axisX : {
    title : "Timeline",
    valueFormatString: "YYYY-MM-DD HH:mm:ss TT"
  },
  toolTip: {
    shared: true
  },
  
  data: [
  {
    xValueType: "dateTime",
    type: "spline",
    name: "Kraken",
    showInLegend: true,
    dataPoints: krakenData
  },
  {
    xValueType: "dateTime",
    type: "spline",
    name: "Binance",
    showInLegend: true,
    dataPoints: binanceData
  }]
}

useEffect(() => {
  setInterval(() =>{
    exchanges.forEach(exchange => {
      fetch("http://localhost:5000/getData",{
        method:'POST',
        headers : {
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin' : 'http://localhost:5000'
        },
        body: JSON.stringify({'exchange':exchange}),
      })
      .then(response => response.json())
      .then(myJSON => 
      {
        const array = [];

        for(var i in myJSON) {
          var myDate = new Date(myJSON[i]['x'])
          var dict = {'x':myDate,'y':myJSON[i]['y']}
          array.push(dict);
          }

        if(exchange === 'kraken'){ setKrakenData([...array]) }
        else if(exchange === 'binance'){ setBinanceData([...array]) }

      });
    });
  },10000);
});





  return (
    <div className="App">
      <div>
        
        <CanvasJSChart options = {options}/>
   
      </div>
    </div>
  );
}


export default App;