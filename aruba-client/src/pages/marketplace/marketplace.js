import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { Link } from 'react-router-dom';



const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const defaultTheme = createTheme();

export default function Album() {
  const [app, setApp] = React.useState([]);
  
  React.useEffect(() => {
    axios.get('http://localhost:8080/marketplace', { headers: { 'authToken': localStorage.getItem('token') } })
      .then((response) => {
        console.log(response.data);
        setApp(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  , []);



  return (
    <ThemeProvider theme={defaultTheme}>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              AruPlace Marketplace
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {app.map((app) => (
              <Grid item key={app._id} xs={12} sm={6} md={4}>
                {/*Generate card here*/}
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1}} style={{paddingBottom: 0}}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {app.name}
                    </Typography>
                    <Typography>
                      {app.description}
                    </Typography>
                    <Typography style={{ marginTop: '30px' }}>
                      {app.price} HUF
                    </Typography>
                  </CardContent>
                  <CardActions style={{ display: 'flex', justifyContent: 'center'}}>
                    <Button size="large" component={Link} to={`/checkout/${app._id}`}>Telepítés</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      
    </ThemeProvider>
  );
}