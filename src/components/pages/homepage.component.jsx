import React,{Component} from 'react';
import {card} from '../card/card.component';
import Drinkspage from '../pages/drinkspage.component';
import {Route , Link}  from 'react-router-dom';



class HomePage extends Component {

render(){
    return(
        <div className='card'>
        <Link to ='/drinks'><button>To Drinks page</button></Link>
        <h1>HomePage component  add <em>{'/drinks'} </em> to the url  for drinks facts and <em>{'/cats'}</em>  to the url for cat facts</h1>
        
        
        </div>
    )
}
}




export default HomePage;