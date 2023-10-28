import Stack from "@mui/material/Stack";
import * as React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import hiro from "../../img/hiro_icon.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
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
          <Grid container direction="row" justifyContent="space-around">
            <Grid item xs={6}>
              <Item>
                <h1>Deploy easily!</h1>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <img src={hiro} />
            </Grid>
          </Grid>
        </Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </>
  );
}

export default Home;
