import React from 'react'
import App from "../../App";
import Form from '../Form/Form';
import Vin from "../Vin/Vin";
import {
  BrowserRouter,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
const RouterMain = ()=> {
    return (
        <>
          <BrowserRouter>
          <Switch>
          <Route path="/" component={App} exact />
             <Route path="/vin/:id" component={Vin}  />
          </Switch>
            
          </BrowserRouter>  
        </>
    )
}
export default RouterMain;