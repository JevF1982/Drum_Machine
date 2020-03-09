import React from "react";
import DrumPanel from "../src/components/DrumPanel";
import Header from "../src/components/Header";
import Store from "../src/components/Store";

class App extends React.Component {
  render() {
    return (
      <Store>
        <div id="drum-machine">
          <Header />
          <DrumPanel />
        </div>
      </Store>
    );
  }
}

export default App;
