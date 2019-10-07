import React, {Component} from 'react';
import Welcome from './components/welcome';
import {BrowserRouter , Route , Switch, HashRouter} from 'react-router-dom'
import Home from './components/Home';
import MemberUp from './components/MemberUp'
import Register from './components/Register'
import Services from './components/Services'
import InstaServices from './components/InstaServices'
import InstaFollower from './components/InstaFollower'
import FeatureDetails from './components/FeatureDetails'
import News from './components/News'
import Order from './components/Order'
import Support from './components/Support'
import PaymentPopUp from './components/PaymentPopup'
import Success from './components/Success'
class App extends Component{
  render(){
    return (
      <HashRouter>
        <div className="App">
          
          <Switch>
            <Route path='/Home' component={Home}/>
            <Route exact path ='/' component={Welcome}/>
            <Route path='/MemberUp' component={MemberUp}/>
            <Route path='/Register' component={Register}/>
            <Route path='/Services' component={Services}/>
            <Route path='/InstaServices' component={InstaServices}/>
            <Route path='/InstaFollower' component={InstaFollower}/>
            <Route path='/FeatureDetails' component={FeatureDetails}/>
            <Route path='/News' component={News}/>
            <Route path='/Order' component={Order}/>
            <Route path='/Support' component={Support}/>
          </Switch>
          <PaymentPopUp />
          <Success />
        </div>
      </HashRouter>
      
    );
  }

}

export default App;
