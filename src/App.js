import React from 'react';
// import logo from './logo.svg';
import Drinks  from './components/drinks.component';
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
          
<Drinks/>
        {this.state.name}
            
        </header>
  
      </div>
    );
  }
  
}

export default App;
