import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comment: '',
            city: 'jaffna'      // The default value of the option
        }
    }

    changeUsernameHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    changeCommentHandler = (event) => {
        this.setState ({
            comment: event.target.value
        })
    }

    changeCityHandler = (event) => {
        this.setState ({
            city: event.target.value
        })
    }

    submitHandler = (event) => {
        alert(`Username: ${this.state.username}. Comments: ${this.state.comment}. City: ${this.state.city}`)
        event.preventDefault()      // Its use for avoid the loosing data after click 'OK' at alert
    }

    render() {
        const { username, comment, city } = this.state

        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label>Username: </label>
                    <input
                        type='text'
                        value={username}
                        onChange={this.changeUsernameHandler}
                    />
                </div>
                <div>
                    <label>Comments: </label>
                    <textarea 
                        value={this.state.comment}
                        onChange={this.changeCommentHandler}
                    />
                </div>
                <div>
                    <label>City: </label>
                    <select value={this.state.city} onChange={this.changeCityHandler}>
                        <option value='jaffna'>Jaffna</option>
                        <option value='kili'>Kilinochchi</option>
                        <option value='mullai'>Mullaittivu</option>
                    </select>
                </div>
                <button type='submit' >Submit</button>
            </form>
        )
    }
}

export default Form