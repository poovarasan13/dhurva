import { useEffect, useState } from "react";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "./assets/fonts/dmserif.css";
import star from "./assets/images/dhruvastar.png"; // Import the image
// import "../../assets/fonts/dmsans.css";
import "./assets/fonts/dmsans.css";
import AppNavigation from "./router/AppNavigation";
import MaskedCursor from "./components/page-components/MaskedCursor";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    Aos.init();
  });
  useEffect(() => {
    // Show the rotating image for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="center-container">
          <a href="https://vitejs.dev" target="_blank">
            <img src={star} className="logo rotating" alt="Star logo" />
          </a>
        </div>
      ) : (
        <>
          <MaskedCursor />
          <AppNavigation />
        </>
      )}
    </>
  );
}

export default App;
