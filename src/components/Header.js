import { AppBar, Container, MenuItem, Select, Toolbar, Typography, } from "@material-ui/core";
import { createTheme, makeStyles, ThemeProvider, } from "@material-ui/core/styles";
import { useNavigate  } from "react-router-dom";
import { CryptoState } from "../CryptoContext";


  const useStyles = makeStyles((theme) => ({
    title: {
      flex: 1,
      color: "#80d4ff",
      fontFamily: 'Macondo',
      cursor: "pointer",
    },
  }));
  
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  
  function Header() {
    const classes = useStyles();

    const { currency, setCurrency } = CryptoState();
    
    const navigate = useNavigate();
  
    return (
      <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
          <Container>
            <Toolbar>
              <Typography
                onClick={() => navigate('/')}
                variant="h5"
                className={classes.title}
              >
                Crypto Currency Analysis
              </Typography>
              
              <Select
                variant="outlined"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currency}
                style={{ width: 100, height: 40, marginLeft: 15 }}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
              </Select>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    );
  }
  
  export default Header;