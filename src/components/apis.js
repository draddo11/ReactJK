 
           this.state={

            drinks:[{alomo:'herbs',
        id:'dhdhdj'},
            {coke : 'soda',
            id: 'sdcsdfsdf'
        }
    ]

    
                // drinks:[{"strCategory":"Ordinary Drink"},
                //  {"strCategory":"Cocktail"},
                //  {"strCategory":"Milk \/ Float \/ Shake"},
                //  {"strCategory":"Other\/Unknown"},{"strCategory":"Cocoa"},
                //  {"strCategory":"Shot"},{"strCategory":"Coffee \/ Tea"},
                //  {"strCategory":"Homemade Liqueur"},
                //  {"strCategory":"Punch \/ Party Drink"},
                //  {"strCategory":"Beer"},
                //  {"strCategory":"Soft Drink \/ Soda"}]     
        // 
    }
    console.log(this.state.drinks);
    
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/photos`)
      
        .then(response => response.json())
        .then (photos => this.setState ({photos:albums }));
           
    }
}

    render(){
        return (
         <div key={drinks.id}>
                   {this.state.drinks}  
          
            </div>
           
            
        )
    }
}