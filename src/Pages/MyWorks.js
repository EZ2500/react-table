import React, {Component} from 'react'
import Mark from '../TableList'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Bmw from '../Bmw'
import Mersedes from '../Mersedes'
import Porsche from '../Porsche'
import Nissan from '../Nissan'
import PropTypes from 'prop-types'


const MyWorks = (props) => {
    return (
      <div>
          <p class="fw-lighter">The first work with which i began my programming activity, this was a table on react, this is how it turned out:</p>
      <Mark />
      <BrowserRouter>
          <div>
          <Route path='/Bmw'component={Bmw}/>
          <Route path='/Mersedes'component={Mersedes}/>
          <Route path='/Porsche'component={Porsche}/>
          <Route path='/Nissan'component={Nissan}/>
          </div>
        </BrowserRouter>
        </div>
        )
      }
  
  
  export default MyWorks;