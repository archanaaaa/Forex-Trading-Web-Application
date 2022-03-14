import './App.css';
import react, { useState, useEffect, Component } from 'react';
import { Line } from 'react-chartjs-2';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Chart from 'chart.js/auto'

let priceData1 = []
let priceData2 = []
let timeStampData = []

let data = {
  labels: timeStampData,
  datasets: [
    {
      label: 'Wazirx',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: priceData1
    },
    {
      label: 'Giottus',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(54,162,235,0.4)',
      borderColor: 'rgba(54,162,235,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(54,162,235,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(54,162,235,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: priceData2
    },

  ]
};

function App() {
  useEffect(() => {
    fetch("/wazirx/getRate",{
      'methods':'GET',
      headers : {
        'Content-Type':'application/json'
      }
    })
    .then(res => res.json())
    .then(myData1 => {
      console.log(myData1)
    });
    
    fetch('/giottus/getRate')
    .then(res => res.json())
    .then(myData2 => {
      console.log(myData2)
    });

  });

    // fetch("/wazirx")
    // .then(res => res.text()) 
    // .then(text => console.log(text)) 
    // });

  return (
    <div className="App">
      <div>
        <h2>Line Chart</h2>
        <Line data={data} />
      </div>
    </div>
  );
}


export default App;