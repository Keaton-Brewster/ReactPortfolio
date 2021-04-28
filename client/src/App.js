import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import './css/hover.css'
import './css/fonts.css'
import './css/main.css'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </Router>
    )
}

export default App;