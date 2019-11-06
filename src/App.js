import React from 'react';
import HomePage from './components/pages/homepage.component';
import Drinks  from './components/drinks/drinks.component';
import {Card} from '../src/components/card/card.component';
import Cats from './components/cats/cats.component';
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
        <header className="App-header">
       <HomePage> 
       
       
       
       </HomePage>
       <Drinks/>
        {this.state.name}
          <Card name= 'Juno'/>
          <Cats/>
        </header>
  
      </div>
    );
  }
  
}

export default App;
