import React, { Component } from 'react'
import axios from 'axios'

class AddStreamer extends Component {
    constructor() {
        super()
        this.state = {
            streamerName: '',
            followers: null
        }
    }

    handleUpdateInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

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

    render() {
        return (
            <div>
                <h1>Add Streamer</h1>
                <form onSubmit={this.handleAddStreamer}>
                <input
                placeholder='name'
                name='streamerName'
                onChange={this.handleUpdateInput}
                />
                <input
                placeholder='Followers'
                name='followers'
                onChange={this.handleUpdateInput}
                />
                <button>Add Streamer</button>
                </form>
            </div>
        )
    }
}

export default AddStreamer