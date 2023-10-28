import Stack from "@mui/material/Stack";
import * as React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import hiro from "../../img/hiro_icon.png";
import hero2 from "../../img/hero2.png";
import support from "../../img/support.png";

import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#1A2027",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Home() {
  return (
    <>
      <Stack spacing={2}>
        <Item>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid item xs={6}>
              <Item>
                <h1>Deploy easily!</h1>
              </Item>
              <Item>
                <RocketLaunchOutlinedIcon /> Limitless Possibilities
              </Item>
              <Item>
                <LanguageIcon /> Universal Compatibilites
              </Item>
              <Item>
                <CloudDownloadIcon /> Effortless Installation
              </Item>
              <Item>
                <Button variant="contained">Register Now!</Button>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <img src={hiro} />
            </Grid>
          </Grid>
        </Item>
        <Item>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid container xs={12}>
              <Grid item xs={12}>
                <Item>
                  <h1>We have 45,000 apps to deploy!</h1>
                </Item>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Item>
                    <p>
                      Rest easy knowing that every extension featured on
                      AruPlace
                      <br></br>
                      undergoes a stringent vetting process. Our commitment to
                      security ensures that you can explore and experiment
                      without compromising the integrity of your digital
                      ecosystem.
                    </p>
                  </Item>
                  <Item>
                    <Button variant="contained">Register Now!</Button>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <img src={hero2} />
                  </Item>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Item>
        <Item>
          <h2>The Process</h2>
        </Item>
        <Item>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid item xs={6}>
              <Item>
                <h1>Need help?</h1>
              </Item>
              <Item>
                <h3>Call our excellent customer support!</h3>
              </Item>
              <Item>
                <Button variant="contained">Support</Button>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <img src={support} alt="Description of the image" />
              </Item>
            </Grid>
          </Grid>
        </Item>
      </Stack>
    </>
  );
}

export default Home;
