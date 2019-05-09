import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import  Home  from '../container/homeContainer'
import  Photo  from '../container/photoContainer'
import  Members from '../container/membersContainer'



export default class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/Photo" component={Photo}/>
        <Route path="/members" component={Members}/>
      </div>
    )
  }
}
