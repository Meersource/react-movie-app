import {Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Trending from './Pages/Trending/Trending';
import Search from './Pages/Search/Search';
import { Container } from '@material-ui/core';

function App() {
  return (
    <>
      
        <Header />
        <div className="app">
          <Container>
          <Switch>
            <Route exact path='/' component={Trending}/>
            <Route exact path='/movies' component={Movies}/>
            <Route exact path='/series' component={Series}/>
            <Route exact path='/search' component={Search}/>
          </Switch>
          </Container>
        </div>
    
      <SimpleBottomNavigation />
    </>




  );
}

export default App;
