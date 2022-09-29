import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

      // This is for the Method 3
      this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: "Welcome there"
    //     })
    // }

    // This is for Method 4
    clickHandler = () => {
      this.setState ({
        message: 'Welcome there'
      })
    }

  render() {
    return (
      <div>
          <div>{this.state.message}</div>
          {/* Event Handler - Method 1 - Using Binding in the Render Method */}
          {/* <button onClick={this.clickHandler.bind(this)}>Click me</button>  */}

          {/* Method 2 - Using Arrow function */}
          {/* <button onClick={() => this.clickHandler()}>Click me</button>  */}

          {/* Method 3 - Using Binding in the constructor - It's a official method in React Documentation */}
          {/* <button onClick={this.clickHandler}>Click me</button>  */}

          {/* Method 4 - Class property as the Arrow function - It's a official method in React Documentation */}
          <button onClick={this.clickHandler}>Click me</button> 

      </div>
    )
  }
}

export default EventBind