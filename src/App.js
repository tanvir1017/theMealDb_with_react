import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ContactUs from './components/ContactUs/ContactUs';
import Header from './components/Header/Header';
import NotFound from './components/Notfound/NotFound';
import TheMeals from './components/TheMels/TheMeals';

function App() {
  const [searchText, setSearchText] = useState('')
   const handler = e => {
        const search = e.target.value
        setSearchText(search)
    }
  return (
    <div className="App container">
      <Router>
        <Header handler={handler}></Header>
        <Switch>
          <Route exact path="/">
            <TheMeals searchText={searchText}></TheMeals>          
          </Route>
          <Route path="/home">
            <TheMeals searchText={searchText}></TheMeals>          
          </Route>
          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
