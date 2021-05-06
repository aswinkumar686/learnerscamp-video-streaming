import React from 'react';
import fire from './config/fire';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends React.Component {
  

  signUp() {
    
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Signed Up');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
        alert(err)
      })
  }

  login() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Logged In');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
        alert(err)
        
      })
  }

  render() {
    
    return (
      
      <div style={{ textAlign: 'center' }}>
        <div>
          <div>Email</div>
          <input id="email" placeholder="Enter Email.." type="text"/>
        </div>
        <div>
          <div>Password</div>
          <input id="password" placeholder="Enter Password.." type="password"/>
        </div>
        <button style={{margin: '10px'}} class= "btn btn-primary" onClick={this.login}>Login</button>
        <button style={{margin: '10px'}} class= "btn btn-primary" onClick={this.signUp}>Sign Up</button>
      </div>
    )
  }
}

export default Login;