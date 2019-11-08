import React from 'react';
// import Nav from 'react-bootstrap/Nav';


//The Parent Componentrenders the .....
function SignUp(props) {
    return <button> {props.Name} </button>;
  }




//Child components data
function Signin() {
    return (
      <div>
       <SignUp Name="Need An Account?" />
      </div>
    );
  }
  

  //equalling to a funcitonal component 
  export default Signin;



