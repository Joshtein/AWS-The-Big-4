import React from 'react';
import { Box, Card, CardMedia, CardContent, makeStyles, Typography, Grid, Hidden } from '@material-ui/core';
import ITBImage from "../../assets/ITB.png";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        height: 220
    },
    media: {
        paddingTop: '100%', // 16:9
    },
    itb_image: {
        width: "100%",
        height: "100%",
        backgroundImage: `url(${ITBImage})`,
        backgroundSize: "cover",
    },
    itb: {
        height: '31vh'
    },
    itb_about: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
    }
}))

export default function About() {
  const classes = useStyles();
//   const route = ((status === false) ? "/login" : "/recommendation");
  return (
    <Grid container spacing={3} className={classes.itb}>
        <Hidden smDown>
            <Grid item md={4} className={classes.itb_image}/>
        </Hidden>
        <Grid item xs={8} d={8} lg={8} className={classes.itb_about}>
            <Typography variant="body2" color="textPrimary" component="p" align='left'>
                Institut Teknologi Bandung (ITB) merupakan sekolah tinggi teknik pertama di Indonesia yang didirikan pada tanggal 2 Maret 1959 
                di Jawa Barat yang mengemban misi pengabdian ilmu pengetahuan dan teknologi untuk memajukan Indonesia.
            </Typography>
        </Grid>
    </Grid>
  )
}

