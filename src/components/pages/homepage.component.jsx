import React,{Component} from 'react';
import {card} from '../card/card.component';





class HomePage extends Component {

render(){
    return(
        <div className='card'>
        <h1>HomePage component  add <em>{'/drinks'} </em> for drinks facts and <em>{'/cats'}</em> for cat facts</h1>
        
        
        </div>
    )
}
}




export default HomePage;