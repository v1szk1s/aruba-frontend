import * as React from "react";
import { styled } from "@mui/material/styles";

import hero from "../../img/hiro_icon.png";
import hero_black from "../../img/hero_black.png";

import hero2 from "../../img/hero2.png";
import hero2_black from "../../img/hero2_black.png";

import support from "../../img/support.png";

import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { useTheme } from "@mui/material/styles";

import {
  Typography,
  Step,
  StepLabel,
  Button,
  Stepper,
  Grid,
  Paper,
  Stack,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme, fullsized }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.primary,
  backgroundColor: theme.palette.background.default,
  backgroundImage: "none",
  height: fullsized ? "100vh" : "",
  borderRadius: "0px",
  boxShadow: "none",
}));

function Home() {
  const theme = useTheme();
  return (
    <>
      <Stack divider={<Divider orientation="horizontal" flexItem />}>
        <Item fullsized>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            height={"100%"}
          >
            <Grid item xs={6}>
              <Item>
                <Typography variant="h1" component="h1">
                  Deploy Easily!
                </Typography>
              </Item>
              <Item>
                <Typography variant="h4" component="h4">
                  <RocketLaunchOutlinedIcon fontSize="large" />
                  Limitless Possibilities
                </Typography>
              </Item>
              <Item>
                <Typography variant="h4" component="h4">
                  <LanguageIcon fontSize="large" /> Universal Compatibilites
                </Typography>
              </Item>
              <Item>
                <Typography variant="h4" component="h4">
                  <CloudDownloadIcon fontSize="large" /> Effortless Installation
                </Typography>
              </Item>
              <Item>
                <Button
                  variant="contained"
                  component={Link}
                  to="/register"
                  style={{ fontSize: "20px", marginTop: "120px" }}
                >
                  Register Now!
                </Button>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <img
                src={theme.palette.mode === "dark" ? hero : hero_black}
                width={"450px"}
              />
            </Grid>
          </Grid>
        </Item>
        <Item fullsized>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            height={"100%"}
          >
            <Grid container xs={12}>
              <Grid item xs={12}>
                <Item>
                  <Typography variant="h1" component="h1">
                    We have 45,000 apps to deploy!
                  </Typography>
                </Item>
              </Grid>

              <Grid container spacing={2}>
                <Grid container xs={6} justifyContent={"center"}>
                  <Grid item xs={8}>
                    <Item>
                      <Typography variant="h5" component="h5">
                        Rest easy knowing that every extension featured on
                        AruPlace undergoes a stringent vetting process. Our
                        commitment to security ensures that you can explore and
                        experiment without compromising the integrity of your
                        digital ecosystem.
                      </Typography>
                    </Item>
                    <Item>
                      <Button
                        variant="contained"
                        style={{ fontSize: "20px", marginTop: "120px" }}
                        onClick={() => {
                          if (localStorage.getItem("token")) {
                            window.location.href = "/marketplace";
                          } else {
                            window.location.href = "/login";
                          }
                        }}
                      >
                        Let's see the Apps
                      </Button>
                    </Item>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <img
                      src={theme.palette.mode === "dark" ? hero2 : hero2_black}
                      style={{ width: "250px" }}
                    />
                  </Item>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Item>

        <Item fullsized>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            height={"100%"}
          >
            <Grid item xs={7}>
              <Item>
                <Typography variant="h1" component="h1">
                  Need help?
                </Typography>
              </Item>
              <Item>
                <Typography variant="h4" component="h4">
                  Call our excellent customer support!
                </Typography>
              </Item>
              <Item>
                <Button
                  variant="contained"
                  style={{ fontSize: "20px", marginTop: "120px" }}
                  onClick={() => {
                    window.location.href = "/support";
                  }}
                >
                  Support
                </Button>
              </Item>
            </Grid>
            <Grid item xs={5}>
              <Item>
                <img
                  src={support}
                  alt="Description of the image"
                  style={{ width: "350px" }}
                />
              </Item>
            </Grid>
          </Grid>
        </Item>
      </Stack>
    </>
  );
}

export default Home;
