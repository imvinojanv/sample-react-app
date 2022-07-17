import React, { Component} from "react";

class Message extends Component {

    constructor() {
        super()      // It's a method
        this.state = {  // State object
            message: 'Welcome Visitor'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank you for the Subscribe'
        })
    }

    render() {
        // Bind this state value in the rander function
        return (
            <div>
                <h3>
                    {this.state.message}
                </h3>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message