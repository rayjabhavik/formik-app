
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { library } from "@fortawesome/fontawesome-svg-core";


import First from "./components/First";
import OldFirst from "./components/OldFirst";

function App() {
  return (
    <div className="App">
      <OldFirst />
    </div>
  );
}

export default App;
