import React from 'react';
import Navi from '../mainFiles/navbar';
import IntroTitle from '../mainFiles/introTitle';
import Drum from './dums';
import Row from 'react-bootstrap/Row';

export default class IntroPage extends React.Component {
    render(){
        return(
            <div>
            <div className='NavArea'>
          <Navi/>
      </div>
      <div className='container'>
          <IntroTitle/>
      </div>
     <Row>
     <Drum/>
     </Row>
      
         </div>
        )
    }
}