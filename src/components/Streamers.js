import React, { Component } from 'react'
import axios from 'axios'

class Streamers extends Component {
    constructor() {
        super()
        this.state = {
            selectedID: null,
            selectedStreamer: null
        }
    }

    handleGetStreamerById = () => {
        axios.get(`/api/event/$${this.state.selectedID}`).then((res) => {
           this.setState({
               selectedStreamer: res.data
           }) 
        })
    }
    handleUpdateID = (e) => {
        this.setState({
            selectedStreamer: e.target.value
        })
    }
     


    render() {
        return (
            <div>
                <h1>Streamer By Id</h1>
                <input onChange={this.handleUpdateID}/>
                <button onClick={this.handleGetStreamerById}>Find Streamer</button>
                    {this.state.selectedStreamer ?
                    <div>
                        <h3>{this.state.selectedStreamer.followers}</h3> 
                    </div>  
                    :
                    <div>Please Select Streamer Id</div> 
                }
            </div>
        )
    }
}


export default Streamers