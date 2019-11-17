import  React, {Component} from 'react';





class Cats extends Component {
    constructor(){
        super();

        this.state={
            cats:[]
        }
    }

    componentDidMount(){
        fetch(`https://api.thecatapi.com/v1/breeds`)
        .then(response => response.json())
        .then( cats => this.setState({cats: cats}));

        
    }

    render(){
        return(
            <div className='card'>
           <span> <em>Cats Api</em>
           <h2>Here are your cat facts starting from ->>>></h2>
           </span>
           
            {
                this.state.cats.map(
                    (cat,index) =>( <h3 key={index}> 
                      {cat.name}, {cat.weight.metric}, {cat.temprament}, {cat.breed}, {cat.description}
                        </h3>)
                )
            }
            </div>

        )
    }

}



export default Cats;