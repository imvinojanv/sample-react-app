import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Vinojan'
      }
      console.log('LifecycleA constructor')
    }

    static getDrivedStateFromProps(props, state) {
        console.log('LifecycleA getDrivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <div>Lifecycle A</div>
                <LifecycleB />          {/* Child component */}
            </div>
        )
    }
}

export default LifecycleA