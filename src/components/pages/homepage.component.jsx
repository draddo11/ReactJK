import React from 'react';
// import {card} from '../card/card.component';
// import Drinkspage from '../pages/drinkspage.component';
import{ Header, Button,Container} from 'semantic-ui-react';
import { Link}  from 'react-router-dom';



const HomePage =(props)=> {
// console.table(props);

    return(
        <div >
     <Container>
        <Header as='h2' color='blue'>Welcome To Cats and Drinks Page</Header>
        <Link to ='/drinks'><Button  labelPosition='right' color='orange'>Click here for your beverage facts</Button></Link>
        <Link to ='./cats'><Button labelPosition='left' primary >Click here for Cat facts</Button></Link>
        <Button onClick={()=> props.history.push('/cats')}>Cats fact page </Button>
        <h1></h1>
     </Container>
        
        </div>
    )

}




export default HomePage;