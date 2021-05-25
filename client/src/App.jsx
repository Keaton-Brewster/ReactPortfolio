import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalState from "./utils/GlobalState";
import WebFont from "webfontloader";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import ParticlesBG from "./components/ParticleBackground";
import useViewport from "./utils/useViewport";
import "rsuite/dist/styles/rsuite-dark.css";
import * as desktopStyle from "./css/desktop.css";
import * as tabletStyle from "./css/tablet.css";
import * as mobileStyle from "./css/mobile.css";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Montserrat", "Source Code Pro"],
      },
    });
  }, []);

  const { width } = useViewport();

  useEffect(() => {
    let screenStyle =
      width > 1024 ? desktopStyle : width > 720 ? tabletStyle : mobileStyle;

    document.querySelector(":root").style = screenStyle;
  }, [width]);

  return (
    <Router>
      <GlobalState>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
          <Route exact patch="/about" component={About} />
        </Switch>
        <ParticlesBG />
      </GlobalState>
    </Router>
  );
}

export default App;
