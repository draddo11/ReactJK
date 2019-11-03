import React, { Component } from 'react'



class Drinks extends Component {
    constructor(){
        super();

        this.state={
            mixes:[{name:'alomo',
                type:'herbs',
        id:'dhdhdj'},
            { name: 'coke',
                type : 'soda',
            id: 'sdcsdfsdf'
        }
    ]
        }
    
    
    }
    
    render(){
        return(
            <h1 key={this.state.mixes.id}>
            {this.state.mixes.map(mix => <h1>{mix.name}</h1>)

            }
            </h1>
        )
    }

}

export default Drinks;