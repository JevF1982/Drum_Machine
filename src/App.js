import React from "react";
import DrumPanel from "../src/components/DrumPanel";
import Store from "../src/components/Store";

class App extends React.Component {
  render() {
    return (
      <Store>
        <div id="drum-machine">
          <DrumPanel />
        </div>
      </Store>
    );
  }
}

export default App;
