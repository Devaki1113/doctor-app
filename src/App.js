
import {BrowserRouter,Route,Switch} from "react-router-dom"
import DoctorsCard from "./Components/DoctorCard";
import DoctorDetails from "./Components/DoctorDetails";
import Login from "./Components/Login";
import './App.css';
const App=() =>(
    <BrowserRouter basename="doctor-app">
    <Switch>
     <Route exact path="/" component={DoctorsCard}/>
      <Route exact path="/doctorDetails/:id" component={DoctorDetails}/>
      <Route exact path="/loginform" component={Login}/>
    </Switch>
    </BrowserRouter>
  )
  

export default App;
