import React from "react";
import { ScreenContext, PowerButtonContext, BankContext } from "./Store";
import { useContext } from "react";

const screenStyle = {
  backgroundColor: "black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100px",
  color: "green",
  height: "30px",
  margin: "30px",
  borderRadius: "10px",
  boxShadow: "5px 5px 5px -5px rgba(0,0,0,0.75)"
};

const Screen = () => {
  const [screen] = useContext(ScreenContext);
  const [powerButton] = useContext(PowerButtonContext);
  const [bank] = useContext(BankContext);
  return (
    <div>
      <div style={screenStyle} id="display">
        {powerButton ? screen : " "}
      </div>
    </div>
  );
};

export default Screen;
