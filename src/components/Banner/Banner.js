import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: "url(./banner8.webp)",
    // height:'80vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  bannerContent: {
    height: 700,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              color:"#99ddff",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Crypt-O-Flow
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "#e6e6ff",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Know the best market prices of your favourite Crypto Currencies
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;