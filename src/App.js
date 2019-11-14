import React from 'react';
import HomePage from './components/pages/homepage.component';
import DrinksPage  from './components/pages/drinkspage.component';
import {Card} from '../src/components/card/card.component';
import { Route, Switch} from "react-router-dom";
import CatsPage from './components/pages/catspage.component';
import './App.css';






class App extends React.Component {
  constructor(){
    super();

    this.state={
      name:'nana'
    }
  }


 


  render(){
    return (
      <div className="App">
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/cats' component={CatsPage}/>
        <Route path='/drinks' component ={DrinksPage}/>
        </Switch>
    

      
    
      </div>
    );
  }
  
}

export default App;
