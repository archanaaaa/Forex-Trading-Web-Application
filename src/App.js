import './App.css';
import react, { useState, useEffect, Component } from 'react';
import './App.css';
import CanvasJSReact from "../src/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function App() {

  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  
const options = {
  animationEnabled: true,	
  title:{
    text: "Exchange Rates"
  },
  axisY : {
    title: "Currency Value"
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
    name: "WazirX",
    showInLegend: true,
    dataPoints: data1
  },
  {
    xValueType: "dateTime",
    type: "spline",
    name: "coin",
    showInLegend: true,
    dataPoints: data2
  }]
}

  useEffect(() => {
    setInterval(() =>{
      fetch("http://localhost:5000/wazirxGetRate",{
        'methods':'GET',
        headers : {
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin' : 'http://localhost:5000'
        }
      })
      .then(res => res.json())
      .then(myData1 => {
        // data1 = myData1
        setData1([...data1,...myData1])
        console.log(data1)
      });
      
      fetch('http://localhost:5000/coinGetRate',{
        'methods':'GET',
        headers : {
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin' : 'http://localhost:5000'
        }
      })
      .then(res => res.json())
      .then(myData2 => {
        // data2 = myData2
        setData2([...data2,...myData2])
        console.log(data2)
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