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
            <div>
            Cats Api
            {
                this.state.cats.map(
                    (cat,index) =>( <h2 key={index}> 
                        {cat.breed}, {cat.description}
                        </h2>)
                )
            }
            </div>

        )
    }

}



export default Cats;