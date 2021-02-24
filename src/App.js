import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './api/components/Home'
import Favoris from './api/components/Favoris'
import DetailsFilm from './api/components/DetailsFilm'
import NavBar from './api/components/NavBar'
import {createBrowserHistory} from 'history'

const history= createBrowserHistory()
export default class App extends Component {
  render() {
    return (
      
        <BrowserRouter>
          <NavBar/>
          <Switch history={history}>
            <Route exact path="/" component={Home}/>
            <Route  path="/favoris" component={Favoris}/>
            <Route  path="/details-film" component={DetailsFilm}/>
            <Route   component={Error}/>
          </Switch>
        </BrowserRouter>
     
    )
  }
}
