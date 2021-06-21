import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Poke from './pages/Poke';
import PokeBag from './pages/PokeBag';
import Feed from './pages/Feed'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile';
import PlaceOrder from './pages/PlaceOrder';
import { StoreProvider } from './store';

function App() {
    return (
        <StoreProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ Home }/>
                    <Route exact path="/pokes/:pageName" component={ Home } />
                    <Route path="/pokebag" component={ PokeBag } />
                    <Route path="/poke/:pokeId" component={ Poke } />
                    <Route path="/admin/feed-pokes" component={ Feed } />
                    <Route path="/login" component={ Login } />
                    <Route path="/register" component={ Register } />
                    <Route path="/profile" component={ Profile } />
                    <Route path="/placeorder" component={ PlaceOrder } />
                </Switch>
            </BrowserRouter>
        </StoreProvider>
    );
}

export default App;
