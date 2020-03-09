import React, { useContext } from "react";
import { PowerButtonContext } from "./Store";
import IconButton from "@material-ui/core/IconButton";
import PowerSettingsNewRoundedIcon from "@material-ui/icons/PowerSettingsNewRounded";

const PowerButton = () => {
  const [powerButton, setPowerButton] = useContext(PowerButtonContext);

  return (
    <div>
      <IconButton
        aria-label="power"
        onClick={() => setPowerButton(!powerButton)}
      >
        <PowerSettingsNewRoundedIcon
          color={powerButton ? "primary" : "secondary"}
        />
      </IconButton>
    </div>
  );
};

export default PowerButton;
