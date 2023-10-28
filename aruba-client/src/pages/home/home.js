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

import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import PropTypes from "prop-types";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme, isFullsized }) => ({
  backgroundColor: "#1A2027",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: isFullsized ? "100vh" : "",
  borderRadius: "0px",
  boxShadow: "none",
}));

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#784af4",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

function Home() {
  return (
    <>
      <Stack divider={<Divider orientation="horizontal" flexItem />}>
        <Item isFullsized>
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
                  style={{ fontSize: "25px", marginTop: "120px" }}
                >
                  Register Now!
                </Button>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <img src={hiro} width={"600px"} />
            </Grid>
          </Grid>
        </Item>
        <Item isFullsized>
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
                        style={{ fontSize: "25px", marginTop: "120px" }}
                      >
                        Let's see the Apps
                      </Button>
                    </Item>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <img src={hero2} style={{ width: "300px" }} />
                  </Item>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Item>
        <Item isFullsized>
          <h2>The Process</h2>
          <Stack sx={{ width: "100%" }} spacing={4}>
            <Stepper
              alternativeLabel
              activeStep={1}
              connector={<ColorlibConnector />}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Stack>
        </Item>
        <Item isFullsized>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            height={"100%"}
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
