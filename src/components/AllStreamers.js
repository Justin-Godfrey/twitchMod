import React, { Component } from 'react'
import axios from 'axios'

class AllStreamers extends Component {
    constructor() {
        super()
        this.state = {
            streamers: []
        }
    }

    componentDidMount() {
        axios.get('/api/events').then((res) => {
            this.setState({
                streamers: res.data
            })
        })
    }

    render() {
        const streamers = this.state.streamers.map((event) => {
            return (
                <li key={streamers.id}>
                <h3>{streamers.name}</h3>
                <p>Followers: {streamers.followers}</p>
                </li>
            )
        })
        return (
            <div>
                <h1>All Streamers</h1>
                <ul>{streamers}</ul>
            </div>
        )
    }
}

export default AllStreamers