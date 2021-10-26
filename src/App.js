import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/inventory/Inventory';
import Notfound from './components/Notfound/Notfound';
import Placeorder from './components/Placeorder/Placeorder';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Authprovider from './components/Context/Authprovider';
import Privateroute from './components/Privateroute/Privateroute';
import Shipping from './components/Shipping/Shipping';

function App() {
  return (
    <div>
      <Authprovider>

        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path='/shop'>
              <Shop></Shop>
            </Route>
            <Route exact path='/'>
              <Shop></Shop>
            </Route>
            <Route path='/review'>
              <OrderReview></OrderReview>
            </Route>
            <Route path='/inventory'>
              <Inventory></Inventory>
            </Route>
            <Privateroute path='/placeorder'>
              <Placeorder></Placeorder>
            </Privateroute>
            <Privateroute path='/shipping'>
              <Shipping></Shipping>
            </Privateroute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <Notfound></Notfound>
            </Route>
          </Switch>
        </BrowserRouter>
      </Authprovider>
    </div>
  );
}

export default App;
