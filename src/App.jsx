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
import StudentCard from "./components/page-components/StudentCard";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    Aos.init();
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="center-container">
            <img src={star} className="logo rotating" alt="Star logo" />
        </div>
      ) : (
        <>
          <AppNavigation />
        </>
      )}
    </>
  );
}

export default App;
