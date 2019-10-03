import React, {Component} from 'react';
import Welcome from './components/welcome';
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import Home from './components/Home'
class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          
          <Switch>
            <Route path='/Home' component={Home}/>
            <Route exact path ='/' component={Welcome}/>
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
 
}

export default App;
