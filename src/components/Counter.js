import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) { // Created Using the short-cut = rconst
      super(props)
    
      this.state = {
         count: 0
      }
    }
    

    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, 
        // () => {
        //     console.log('Callback value:', this.state.count)
        // }
        // )

        this.setState((prevState) => ({     // using Arrow function
            count: prevState.count + 1
        }))

        console.log(this.state.count)  // This value is not changed yet, so it's 0
    }


    incrementFive() {       // Count and Callback values are printed 5 times
        this.increment()    // When using that arrow function - incrementing the count by 5
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }


    render() {  // Created Using the short-cut = rce
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter