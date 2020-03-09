import React, { useContext } from "react";
import { BankContext, ScreenContext } from "./Store";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const Bank = () => {
  const [bank, setBank] = useContext(BankContext);
  const [screen, setScreen] = useContext(ScreenContext);

  const changeBank = () => {
    setBank(!bank);
    if (!bank) {
      setScreen("DrumKit");
    } else {
      setScreen("PianoKit");
    }
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Switch
            onClick={changeBank}
            value="checkedF"
            color="default"
            inputProps={{ "aria-label": "checkbox with default color" }}
          />
        }
        label="Select Soundbank"
      />
    </div>
  );
};

export default Bank;
