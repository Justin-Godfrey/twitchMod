import React, { Component } from 'react'
import axios from 'axios'

//class component storing local state
class AddStreamer extends Component {
    constructor() {
        super()
        this.state = {
            streamerName: '',
            followers: null
        }
    }

    //method to keep track of data that we put into input field
    handleUpdateInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


        //http post request to send information to server to add new user
    handleAddStreamer = (e) => {
        e.preventDefault()
        axios.post('/api/addStreamer', {
            name: this.state.streamerName,
            followers: this.state.followers
        })
        .then((res) => {
            console.log(res)
        })
    }


        //displaying information to browser
    render() {
        return (
            <div>
                <h1>Lets add some people to the Crew!</h1>
                <form onSubmit={this.handleAddStreamer}>
                <input
                placeholder='Streamer Name'
                name='streamerName'
                onChange={this.handleUpdateInput}
                />
                <input
                placeholder='Followers (Be nice)'
                name='followers'
                onChange={this.handleUpdateInput}
                />
                <button>Click here to welcome them!</button>
                </form>
            </div>
        )
    }
}

export default AddStreamer