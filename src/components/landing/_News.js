import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { useState, useEffect } from 'react';
import { getNews } from '../../AWSDependencies/api';
import moment from 'moment';

export default function News() {
  const [newsletter, setNewsletter] = useState([]);
  
  // 0 = first load
  // 1 = success
  // 2 = failed
  // 3 = empty array
  const [loading, setLoading] = useState(0);

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
    <React.Fragment>
      <Title>Indonesia University Newsletter</Title>
      {loading == 0 ? <p>Loading...</p> : null}

      {
        loading == 1 
        ? <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Content</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {newsletter.map((news, index) => (
                <TableRow key={index}>
                  <TableCell>{moment(news.createdAt).format(`DD MMM YYYY`)}</TableCell>
                  <TableCell>{news.newsContent}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        : null
      }
      
      {[2, 3].indexOf(loading) != -1 ? "No university news yet.." : null}
    </React.Fragment>
  );
}
