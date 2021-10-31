import React from 'react';

import {Route, Switch} from 'react-router-dom';
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Error from "./components/Error";
//import Navbars from "./Navbars";
//import Aboutus from "./Aboutus";
import ContactUs from "./components/ContactUs";

import AdminLogin from './components/AdminLogin_Hooks';
import AdminAfterLogin from './components/AdminAfterLogin';
import Delete from './components/Delete_Hooks';
import DisplayAll from './components/DisplayAll_Hooks';
import Search from './components/Search_Hooks';
import UserAfterLogin from './components/UserAfterLogin';
import UpdateProfile from './components/UpdateProfile_Hooks';
import Basicinfo from './components/Basicinfo';
import Academic from './components/Academic';
import Logout from './components/Logout';
import Skillinfo from './components/Skillinfo';
//import StudentDashBoard from "./StudentDashBoard";
import Digitalcv from './components/Digitalcv';
import Searchresume from './components/Searchresume';
import Placement from './components/Placement';
import Viewplacement from './components/Viewplacement';

import Admincontact from './components/Admincontact';

import Addhr from './components/Addhr';
import Viewhr from './components/Viewhr';
import Hrlogin from './components/Hrlogin';
import HrAfterLogin from './components/HrAfterLogin';
import UpdateBasicinfo from './components/UpdateBasicinfo';


const App = () =>{
  return (
<>

<Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/Signup" component={Signup} />
  <Route exact path="/Login" component={Login} />
  {/* <Route exact path="/Aboutus" component={Aboutus} /> */}
  <Route exact path="/ContactUs" component={ContactUs} />
  {/* <Route exact path='/StudentDashBoard' render={()=><StudentDashBoard />} /> */}
          <Route exact path="/adminlogin" component={AdminLogin} />
          <Route exact path="/adminafterlogin" component={AdminAfterLogin} />
          <Route exact path="/displayall" component={DisplayAll} />
          <Route exact path="/delete" component={Delete} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/userafterlogin" component={UserAfterLogin} />
          <Route exact path="/updateprofile" component={UpdateProfile} />
          <Route exact path="/basicinfo" component={Basicinfo} />
          <Route exact path="/academic" component={Academic} />
          <Route exact path="/skillinfo" component={Skillinfo} />
          <Route exact path="/digitalcv" component={Digitalcv} />
          <Route exact path="/digitalcv/:eid" component={Digitalcv} />
          <Route exact path="/Searchresume" component={Searchresume} />
          <Route exact path="/Placementinfo" component={Placement} />
          <Route exact path="/Viewplacement" component={Viewplacement} />
          <Route exact path="/Admincontact" component={Admincontact} />
          <Route exact path="/Addhr" component={Addhr} />
          <Route exact path="/allhr" component={Viewhr} />
          <Route exact path="/hrlogin" component={Hrlogin} />
          <Route exact path="/hrafterlogin" component={HrAfterLogin} />
          <Route exact path="/updatebasicinfo" component={UpdateBasicinfo} />



          <Route exact path="/logout" component={Logout} />
  <Route component={Error}/>
</Switch>
</>
  );
};

export default App;
