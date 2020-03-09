import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { SliderContext, PowerButtonContext } from "./Store";
import { useContext } from "react";

const PrettoSlider = withStyles({
  root: {
    color: "blue",
    height: 8,
    display: "flex",
    resize: "both",
    marginTop: "40px",
    minWidth: "120px"
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus,&:hover,&$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider);

const VolumeSlider = () => {
  const [slider, setSlider] = useContext(SliderContext);
  const [powerButton, setPowerButton] = useContext(PowerButtonContext);

  console.log(slider);
  return (
    <div>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={30}
        id="slider"
        disabled={!powerButton}
        onChange={(e, value) => setSlider(value)}
      />
    </div>
  );
};

export default VolumeSlider;
