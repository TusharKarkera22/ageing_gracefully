import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import HealthTrack from './views/health-track'
import ChooseaDoctor from './views/choosea-doctor'
import Searchprofile from './views/searchprofile'
import SignIn from './views/sign-in'
import FundTracking from './views/fund-tracking'
import NGOprofile from './views/n-g-oprofile'
import Notifications from './views/notifications'
import Schedule from './views/schedule'
import Selectcategoryofappointment from './views/selectcategoryofappointment'
import MedConsultchatwithdoctors from './views/med-consultchatwithdoctors'
import AddNewProfile from './views/add-new-profile'
import Appointment from './views/appointment'
import Details1 from './views/details1'
import DateandTime from './views/dateand-time'
import AppointmentConfirmed from './views/appointment-confirmed'
import Home from './views/home'
import Candidateprofile from './views/candidateprofile'
import Bookanappointment from './views/bookanappointment'
import Details2 from './views/details2'
import Settings from './views/settings'
import Login from './views/login'
import Homepage from './views/homepage'
import MedicalRecords from './views/medical-records'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={HealthTrack} path="/health-track" />
        <Route exact component={ChooseaDoctor} path="/choosea-doctor" />
        <Route exact component={Searchprofile} path="/profile1" />
        <Route exact component={SignIn} path="/sign-in" />
        <Route exact component={FundTracking} path="/fund-tracking" />
        <Route exact component={NGOprofile} path="/profile22" />
        <Route exact component={Notifications} path="/notifications" />
        <Route exact component={Schedule} path="/schedule" />
        <Route
          exact
          component={Selectcategoryofappointment}
          path="/selectcategoryofappointment"
        />
        <Route
          exact
          component={MedConsultchatwithdoctors}
          path="/med-consultchatwithdoctors"
        />
        <Route exact component={AddNewProfile} path="/add-new-profile" />
        <Route exact component={Appointment} path="/appointment" />
        <Route exact component={Details1} path="/details1" />
        <Route exact component={DateandTime} path="/dateand-time" />
        <Route
          exact
          component={AppointmentConfirmed}
          path="/appointment-details1"
        />
        <Route exact component={Home} path="/" />
        <Route exact component={Candidateprofile} path="/profile2" />
        <Route
          exact
          component={Bookanappointment}
          path="/appointment-details11"
        />
        <Route exact component={Details2} path="/profile21" />
        <Route exact component={Settings} path="/settings" />
        <Route exact component={Login} path="/login" />
        <Route exact component={Homepage} path="/homepage" />
        <Route exact component={MedicalRecords} path="/medical-records" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
