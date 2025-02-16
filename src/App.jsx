import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import HomePage from "./pages/home/HomePage";
import EventPage from "./pages/Events/EventPage";
import EventShowPage from "./pages/EventDisplay/EventShowPage";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <HomePage /> */}
      <EventShowPage />
      {/* <EventPage /> */}
    </>
  );
}

export default App;
