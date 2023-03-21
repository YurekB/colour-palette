import { useState } from "react";
import "./App.css";
import IntroPage from "./pages/intro";
import LandingPage from "./pages/landing";

function App() {
  //Install react router and make the routes

  const [introComplete, setIntroComplete] = useState(false);

  return (
    <div className="App">
      {introComplete ? (
        <LandingPage />
      ) : (
        <IntroPage setIntroComplete={setIntroComplete} />
      )}
    </div>
  );
}

export default App;
