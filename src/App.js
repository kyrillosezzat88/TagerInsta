import React, {Component} from 'react';
import Welcome from './components/welcome';
import { Route , Switch, HashRouter} from 'react-router-dom';
import './styles/AllSass.css';
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
import CurrentTicket from './components/CurrentTicket'
import CreateTicket from './components/CreateTicket'
import PaymentHist from './components/PaymentHistory'
import About from './components/About'
import Policy from './components/Policy'
import Login from './components/Login'
import ForgetPass from './components/ForgetPass'
import CreateAccount from './components/CreateAccount'
import EditProfile from './components/EditProfile'
import Currancy from './components/Currancy'
import LangPopUp from './components/LangPopUp'

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
            <Route path='/CurrentTicket' component={CurrentTicket}/>
            <Route path='/CreateTicket' component={CreateTicket}/>
            <Route path='/PaymentHist' component={PaymentHist}/>
            <Route path='/About' component={About}/>
            <Route path='/Policy' component={Policy}/>
            <Route path='/Login' component={Login}/>
            <Route path='/ForgetPass' component={ForgetPass}/>
            <Route path='/CreateAccount' component={CreateAccount}/>
            <Route path='/EditProfile' component={EditProfile}/>
          </Switch>
         
          <Success />
          <Currancy />
          <LangPopUp />
          <PaymentPopUp />
        </div>
      </HashRouter>
      
    );
  }

}

export default App;
