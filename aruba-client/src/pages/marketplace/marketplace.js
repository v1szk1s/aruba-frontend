import * as React from "react";


import {
  Container,
  styled,
  Typography,
  Box,
  Stack,
  Grid,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  Button,
} from "@mui/material/";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const StyledStack = styled(Stack)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.primary,
  backgroundColor: theme.palette.background.default,
  borderRadius: "0px",
  minHeight: "100vh",
  boxShadow: "none",
}));

export default function Album() {
  const [app, setApp] = React.useState([]);
  const navigate = useNavigate();
  
  React.useEffect(() => {
    axios
      .get("http://localhost:8080/api/marketplace", {
        headers: { authToken: localStorage.getItem("token") },
      })
      .then((response) => {
        console.log(response.data);
        setApp(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

      if (!localStorage.getItem("token")) {
        navigate("/login");
      }
  }, []);

  return (
    <StyledStack>
      <Box
        sx={{
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
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don&apos;t simply skip over it entirely.
          </Typography>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md" mx={0}>
        {/* End hero unit */}
        <Grid container spacing={4} mx={0}>
          {app.map((app) => (
            <Grid item key={app._id} xs={12} sm={6} md={4}>
              {/*Generate card here*/}
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  image={require(`../../img/${app.image}`)}

                />
                <CardContent sx={{ flexGrow: 1 }} style={{ paddingBottom: 0 }}>
                  <Typography gutterBottom variant="h5" component="h1">
                    {app.name}
                  </Typography>
                  <Typography>{app.description}</Typography>
                  <Typography style={{ marginTop: "30px" }}>
                    ${app.price}
                  </Typography>
                </CardContent>
                <CardActions
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
                    size="large"
                    component={Link}
                    to={`/checkout/${app._id}`}
                  >
                    Telepítés
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledStack>
  );
}
