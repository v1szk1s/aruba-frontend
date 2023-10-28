import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useParams } from 'react-router-dom'; 
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';



const product = {
    name: 'app',
    desc: 'Deploy',
    price: '$9.99' }


export default function Review() {
  const {id} = useParams();
  const [app, setApp] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:8080/app/${id}`, { headers: { authToken: localStorage.getItem('token')} })
    .then(res => {
      setApp(res.data);
      product.name = res.data.name;
      product.desc = res.data.version;
      product.price = res.data.price;

    })
    .catch(err => {
      console.log(err);
    })
  }, [id]);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2" fontSize={18}><b>${product.price}</b></Typography>
          </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
      
      
        </ListItem>
      </List>
      
    </React.Fragment>
  );
}