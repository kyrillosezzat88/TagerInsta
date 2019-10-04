import React, {Component} from 'react';
import Welcome from './components/welcome';
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import Home from './components/Home';
import MemberUp from './components/MemberUp'
import Register from './components/Register'
import Services from './components/Services'
import InstaServices from './components/InstaServices'
import InstaFollower from './components/InstaFollower'
class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          
          <Switch>
            <Route path='/Home' component={Home}/>
            <Route exact path ='/' component={Welcome}/>
            <Route path='/MemberUp' component={MemberUp}/>
            <Route path='/Register' component={Register}/>
            <Route path='/Services' component={Services}/>
            <Route path='/InstaServices' component={InstaServices}/>
            <Route path='/InstaFollower' component={InstaFollower}/>
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
 
}

export default App;
