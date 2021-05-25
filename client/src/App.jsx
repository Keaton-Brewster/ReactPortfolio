import { useEffect, useState } from "react";
import { Container } from "rsuite";
import GlobalState from "./utils/GlobalState";
import WebFont from "webfontloader";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import Resume from "./Pages/Resume";

import useViewport from "./utils/useViewport";
import "rsuite/dist/styles/rsuite-dark.css";
import * as desktopStyle from "./css/desktop.css";
import * as tabletStyle from "./css/tablet.css";
import * as mobileStyle from "./css/mobile.css";

function App() {
  const [thisPage, setThisPage] = useState("home");

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Montserrat", "Source Code Pro"],
      },
    });
  }, []);

  function renderPage() {
    switch (thisPage) {
      case "home":
        return <Home />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      case "about":
        return <About />;
      default:
        return <Home />;
    }
  }

  const { width } = useViewport();

  useEffect(() => {
    let screenStyle =
      width > 1024 ? desktopStyle : width > 720 ? tabletStyle : mobileStyle;

    document.querySelector(":root").style = screenStyle;
  }, [width]);

  return (
    <GlobalState>
      <Container>
        <NavBar setThisPage={setThisPage} />
        {renderPage()}
        <Footer />
      </Container>
    </GlobalState>
  );
}

export default App;
