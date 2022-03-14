import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import myData1 from './venv/data1.json'
import myData2 from './venv/data2.json'
import {Line} from 'react-chartjs-2';
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

function tick() {

  for (var i = 0; i < myData1.length; i++)
  {
    var obj = myData1[i];
    for (var key in obj)
    {
      if(key == 'price')
      {
        var value = obj[key];
        priceData1.push(value)
      }
    }
  }

  for (var i = 0; i < myData2.length; i++)
  {
    var obj = myData2[i];
    for (var key in obj)
    {
      if(key == 'price')
      {
        var value = obj[key];
        priceData2.push(value)
      }
    }
  }

  // let timestamp = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(myData.at);
  timeStampData.push(new Date().toLocaleTimeString())

  let element = (
    <div>
      <h2>Line Chart</h2>
      <Line data={data} />
      {/* {priceData.map(name => (  
          <li>  
            {name}  
          </li>  
        ))}   */}
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {setInterval(tick, 2000)}
      </header>
    </div>
  );
}

export default App;


// for (var i = 0; i < myData1.length; i++)
//       {
//         var obj = myData1[i];
//         for (var key in obj)
//         {
//           if(key === 'price')
//           {
//             var value = obj[key];
//             priceData1.push(value)
//           }
//           if(key === 'time')
//           {
//             var value = obj[key];
//             timeStampData.push(value)
//           }
//         }
//       }
    