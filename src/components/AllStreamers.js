import React, { Component } from 'react'
import axios from 'axios'
import Streamer from './Streamer'

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
                <Streamer key={event.id} event={event}/>
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