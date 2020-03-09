import React from "react";
import DrumPads from "../components/DrumPads";
import VolumeSlider from "../components/VolumeSlider";
import PowerButton from "../components/PowerButton";
import Screen from "../components/Screen";
import Bank from "../components/Bank";
import Grid from "@material-ui/core/Grid";

const panelStyling = {
  display: "flex",
  backgroundColor: "grey",
  color: "white",
  width: "70%",
  minHeight: "400px",
  borderRadius: "10px",
  boxShadow: "1px 1px 5px black"
};

const mainContainer = {
  display: "flex",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center"
};

const DrumPanel = () => {
  return (
    <div style={mainContainer}>
      <Grid style={panelStyling} container spacing={12}>
        <Grid
          container
          item={true}
          xs={12}
          md={6}
          justify="center"
          alignItems="center"
        >
          <DrumPads />
        </Grid>
        <Grid
          container
          item={true}
          xs={12}
          md={6}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <VolumeSlider />
          <Screen />
          <Bank />
          <PowerButton />
        </Grid>
      </Grid>
    </div>
  );
};

export default DrumPanel;
