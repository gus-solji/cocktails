import React from 'react';
import './App.scss';
import NavBarMenu from './components/navbar-menu/navbar-menu.component';
import { BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import VideosPage from './pages/VideosPage';
import CocktailDetailPage from './pages/CocktailDetailPage';
import NewsPage from './pages/NewsPage';



function App() {
  return (
    
    
      <Router>
        <NavBarMenu></NavBarMenu>
          <Switch>
            <Route path="/cocktails" exact={true} component={SearchPage} />
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/news" exact={true} component={NewsPage}/>
            <Route path="/videos" exact={true} component={VideosPage}/>
            <Route path="/cocktail/:cocktailId" exact={true} component={CocktailDetailPage} />
          </Switch>      
      </Router>
      
    
  );
}

export default App;
