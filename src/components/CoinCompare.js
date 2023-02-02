import axios from "axios";
import { useEffect, useState } from "react";
import { HistoricalChart } from "../config/api";
import { Line } from "react-chartjs-2";
import { CircularProgress, createTheme, makeStyles, ThemeProvider, } from "@material-ui/core";
import SelectButton from "./SelectButton";
import { chartDays } from "../config/data";
import { CryptoState } from "../CryptoContext";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const CoinCompare = ({ coin }) => {

  const [krakenData, setKrakenData] = useState([]);
  const [binanceData, setBinanceData] = useState([]);
  const exchanges = ['kraken','binance'];
  const { currency } = CryptoState();
  const [flag,setflag] = useState(false);
  const [days,setDays] = useState(1)

  const useStyles = makeStyles((theme) => ({
    container: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 25,
      padding: 40,
      [theme.breakpoints.down("md")]: {
        width: "100%",
        marginTop: 0,
        padding: 20,
        paddingTop: 0,
      },
    },
  }));

  const classes = useStyles();
  
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
          if(exchange === 'kraken'){ setKrakenData(myJSON.prices) }
          else if(exchange === 'binance'){ setBinanceData(myJSON.prices) }
          
        });
      });
    },10000);
  });

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.container}>
        
          <>
            <Line
              data={{
               
                labels: krakenData.map((coin) => {
                  let date = new Date(coin[0]);
                  console.log(coin[0])
                  console.log(date)
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                    console.log(time)
                    return time;
                  
                }),

                datasets: [
                  {
                    data: krakenData.map((coin) => coin[1]),
                    label: `Kraken Price in ${currency}`,
                    borderColor: "#ff1a1a",
                  },
                  {
                    data: binanceData.map((coin) => coin[1]),
                    label: `Binance Price in ${currency}`,
                    borderColor: "#ffd11a",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
            <div
              style={{
                display: "flex",
                marginTop: 20,
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              
            </div>
          </>
        
      </div>
    </ThemeProvider>
  );
};

export default CoinCompare;    