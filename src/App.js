import React, { useState } from "react";
import Auth from "./assets/Auth/Auth";
import Guest from "./assets/Guest/Guest";

function App() {
  const [Login, SetLogin] = useState(true);

  return <div className="App">{Login ? <Auth /> : <Guest />}</div>;
}

export default App;
