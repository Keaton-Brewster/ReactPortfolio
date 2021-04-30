import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalState from './utils/GlobalState';
import WebFont from 'webfontloader';
import NavBar from './components/NavBar';
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Portfolio from './Pages/Portfolio';
import About from './Pages/About';
import 'rsuite/dist/styles/rsuite-dark.css';
import './css/index.css'

function App() {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Montserrat']
            }
        })
    }, [])

    return (
        <Router>
            <GlobalState>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact patch="/about" component={About} />
                </Switch>
            </GlobalState>
        </Router>
    )
}

export default App;