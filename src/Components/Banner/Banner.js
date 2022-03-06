import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Carousel from './Carousel';

const useStyles = makeStyles(()=>({
  banner:{
    backgroundImage : "url(./banner1.jpg)",
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
  },
  bannerContent:{
    display:'flex',
    flexDirection:'column',
    height:400,
    paddingTop:25,
    justifyContent:"space-around"
  },
  tagLine: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}));



const Banner = () => {

  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
          <div className={classes.tagLine}>
            <Typography
              variant='h2'
              style={{
                fontWeight:'bold',
                marginbottom:15,
                fontFamily:'Montserrat',
              }}
            >
              TryNance
            </Typography>
            <Typography
              variant='subtitle2'
              style={{
                color:'darkgray',
                textTransform:'capitalize',
                fontFamily:'Montserrat',
              }}
            >
              Be our family at trynance
            </Typography>
          </div>
          <Carousel/>
      </Container>
    </div>
  )
}

export default Banner
