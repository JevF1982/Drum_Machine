import React from "react";

const Header = () => {
  const headerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    width: "100%",

    marginTop: "10px",
    height: "30px"
  };

  const logoStyle = {
    width: "90px",
    marginTop: "60px"
  };

  return (
    <div>
      <div style={headerStyle}>
        <img style={logoStyle} src="./img/logo2.png" alt="logo" />
      </div>
    </div>
  );
};

export default Header;
