
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import AboutUs from './AboutUs';
import Integration from './Integration';
import Pricing from './Pricing';
import Blog from './Blog';

import { Switch,Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route  exact path="/" component={Home} />
        <Route  exact path="/aboutus" component={AboutUs} />
        <Route  exact path="/integration" component={Integration} />
        <Route  exact path="/pricing" component={Pricing} />
        <Route  exact path="/blog" component={Blog} />
        <Redirect to="/"/>
      </Switch>
      
    </div>
  );
}

export default App;
