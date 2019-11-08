import React from 'react';
// import Nav from 'react-bootstrap/Nav';
 import LoginRedirect from '../pages/loginPage';

function LogIN(props) {
    return <button> {props.Name} </button>;
  }



function Login() {

    return (
      <div>
       <LogIN  Name="Welcome Back" />
      </div>
    );
  }
  
  export default Login;



