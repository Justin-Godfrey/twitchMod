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
    //makes an http get request using axios to our server to get all of our =streamers
    componentDidMount() {
        axios.get('/api/events').then((res) => {
            this.setState({
                streamers: res.data
            })
        }).catch((err) => {
            console.log(err)
        })
    }
    //when we get response from server we are saving to local state to display on our webpage
    render() {
        const streamers = this.state.streamers.map((event) => {
            return (
                //mapping through our streamers on our array, and then rendering the streamers component for every streamer in the array. 
                //passing streamer indormation down as a prop
                <Streamer key={event.id} event={event}/>
            )
        })
        return (
            //rendering the mapped array to the webpage
            <div>
                <h1>All Streamers</h1>
                <ul>{streamers}</ul>
            </div>
        )
    }
}

export default AllStreamers

//class component. Keeping track of all of our streamers. this is where we are displaying them