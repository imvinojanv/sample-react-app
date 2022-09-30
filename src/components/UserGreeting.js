import React, { Component } from 'react'

class UserGreeting extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: true
    }
  }

  render() {

    // Method 04 - Short circuit operator
    return this.state.isLoggedIn && <div>Welcome Vinojan</div>
    // If false this method, Nothing will be rendered in the UI

    // Method 03 - Ternary Variables
    // return (
    //   this.state.isLoggedIn ? (
    //     <div>Welcome Vinojan</div>
    //   ) : (
    //     <div>Welcome Guest</div>
    //   )
    // )

    // Method 02 - Element Variables
    // let message
    // if (this.state.isLoggedIn) {
    //   message = <div>Hello Vinojan</div>
    // } else {
    //   message = <div>Hello Guest</div>
    // }

    // return <div>{message}</div>

    //  Method 01 - if/else
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Vinojan</div>
    // } else {
    //   return <div>Welcome Guest</div>
    // }
  }
}

export default UserGreeting