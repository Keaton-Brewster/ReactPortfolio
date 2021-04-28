import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from 'webfontloader';
import NavBar from './components/NavBar';
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Portfolio from './Pages/Portfolio';
import 'rsuite/dist/styles/rsuite-dark.css';
import './index.css'
import './hover.css'

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
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </Router>
    )
}

export default App;