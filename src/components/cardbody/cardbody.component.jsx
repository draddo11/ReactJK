import React from 'react';
import {Card,Icon,Image} from 'semantic-ui-react';


const CardBody =()=>(

  <div>

  <Card>
  <Image src='./cat.svg' wrapped ui={false} />
  <Card.Content>
    <Card.Header>Daniel</Card.Header>
    <Card.Meta>Joined in 2016</Card.Meta>
    <Card.Description>
      Daniel is a comedian living in Nashville.
    </Card.Description>
  </Card.Content>
  <Card.Content extra>
    <span>
      <Icon name='user' />
      10 Friends
    </span>
  </Card.Content>
  </Card>
  
  
  </div>

)
   

export default CardBody;