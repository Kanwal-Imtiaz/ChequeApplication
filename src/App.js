import React from 'react';
import './App.css';
import InputForm from './components/InputForm';
import ChequeBox from './components/ChequeBox';
import Navigation from './components/Navigation';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 700
      }
    }
  }
}

class App extends React.Component{
  constructor(){
    super();
    this.state ={
      payee: '',
      amount: '',
      date:'',
      amountInWords: '',
      route: 'form',
    }
  }

  displayCheque =(payee, amount, date, amountInWords) =>{
    console.log("Button Click");
    this.setState({payee, amount, date, amountInWords}, () => {
    console.log(this.state);
  });
  }

  onRouteChange = (route) => {

    this.setState({route: route});
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
              params={particlesOptions}
          />
       { this.state.route === 'form'
          ? <InputForm onDisplayCheque={this.displayCheque} onRouteChange={this.onRouteChange}/>
          : <div>
            <Navigation onRouteChange={this.onRouteChange} />
            <ChequeBox payee={this.state.payee} amount={this.state.amount} amountInWords ={
            this.state.amountInWords} date ={this.state.date} onRouteChange={this.onRouteChange} />
          </div>
       }
      </div>
    );
  }
}

export default App;
