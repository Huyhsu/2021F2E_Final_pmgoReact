import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Poke from './pages/Poke';
import PokeBag from './pages/PokeBag';
import Feed from './pages/Feed'
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
                </Switch>
            </BrowserRouter>
        </StoreProvider>
    );
}

export default App;
