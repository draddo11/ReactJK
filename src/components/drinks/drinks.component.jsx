import React, { Component } from 'react'
import '../card/card.styles.scss'


class Drinks extends Component {
    constructor(){
        super();

        this.state={
            mixes:[]
        }
     
    }

    componentDidMount(){
        fetch(`https://api.punkapi.com/v2/beers`)
        .then(response => response.json() )
        .then( drinks => this.setState({mixes: drinks }));
        
    }
    
    render(){
        return(
            <div className='card'>
          
            {
                this.state.mixes.map(
                    (mix,index) => (<h1 key={index}>
                   Name : {mix.name}, Drink info: {mix.description}
                    </h1>))
                }
           
            </div>
           
        );
    }

}

export default Drinks;