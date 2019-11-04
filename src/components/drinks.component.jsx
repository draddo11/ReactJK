import React, { Component } from 'react'



class Drinks extends Component {
    constructor(){
        super();

        this.state={
            mixes:[{name:'Fanta',
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
            <div>
            <span >
            
            {
                this.state.mixes.map(
                    (mix,index)=> <h1 key={index}>
                    {mix.name}, {mix.type}
                    </h1>
                    )

            }
            </span>
            </div>
           
        )
    }

}

export default Drinks;