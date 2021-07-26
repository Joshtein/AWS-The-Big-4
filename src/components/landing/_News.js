import React from 'react';
import Title from './Title';
import { useState, useEffect } from 'react';
import { getNews } from '../../AWSDependencies/api';
import moment from 'moment';
import { purple } from '@material-ui/core/colors';
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, makeStyles, Typography } from '@material-ui/core';
import { Fragment } from 'react';

const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '4px'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
    },
  },
    
  newswrapper: {
    overflowY: "scroll",
    maxHeight: "60vh",
  },

  cardAction: {
    display: "flex",
    justifyContent: "space-between",
  },

  purple: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
  },
}))

export default function News() {
  const [newsletter, setNewsletter] = useState([]);
  // 0 = first load
  // 1 = success
  // 2 = failed
  // 3 = empty array
  const [loading, setLoading] = useState(0);

  const classes = useStyles();

  useEffect(() => {
    getNews()
      .then(data => {
        setNewsletter(data);
        if (data.length > 0) {
          setLoading(1)
        } else {
          setLoading(3)
        }
      })
      .catch(() => {
        setLoading(2)
      })
  }, []);
  
  return (
    <Fragment>
      <Title>Indonesia University Newsletter</Title>
      {loading == 0 ? <p>Loading...</p> : null}

      {
        loading == 1 
        ? <Box classes={{root: classes.newswrapper}} p={1}>
            {newsletter.map((news, index) => (
              <Box mb={1} key={index}>
                <Card>
                  <CardHeader
                    avatar={<Avatar variant="square" classes={{root: classes.purple}}>{(news.univName).substring(0, 2)}</Avatar>}
                    title={news.newsTitle}
                    subheader={moment(news.createdAt).format(`DD MMM YYYY`)}
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary">{news.newsContent}</Typography>
                  </CardContent>
                  <CardActions classes={{root: classes.cardAction}}>
                    <Box pl={1}>
                      <Typography variant="caption" color="textSecondary">University: {news.univName}</Typography>
                    </Box>
                    <Button variant="secondary" href={news.newsLink}>READ MORE</Button>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </Box>
        : null
      }
      
      {[2, 3].indexOf(loading) != -1 ? "No university news yet.." : null}
    </Fragment>
  );
}
