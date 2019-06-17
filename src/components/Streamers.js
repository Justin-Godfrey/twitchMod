import React, { Component } from 'react'
import axios from 'axios'

//class component to use local state

class Streamers extends Component {
    constructor() {
        super()
        this.state = {
            selectedID: null,
            selectedStreamer: null,
            newFollowerCount: ''
        }
    }

    //http request to our server to obtain streamer by a specific id

    handleGetStreamerById = () => {
        axios.get(`/api/streamers/${this.state.selectedID}`).then((res) => {
            console.log(res)
           this.setState({
               selectedStreamer: res.data
           }) 
        })
        .catch((error) => {
            console.log(error)
        })
    }

    //updating our local state to keep track of streamer id
    handleUpdateID = (e) => {
        this.setState({
            selectedID: e.target.value
        })
    }
    //updating local state to keep track of new folloew account
    handleUpdateFollower = (e) => {
        this.setState({
            newFollowerCount: e.target.value
        })
    }
    //http put request to the server to update the streamer based on id
    updateStreamer = (id) => {
        const { newFollowerCount } = this.state;
        axios.put(`/api/streamers/${id}`, { followers: newFollowerCount }).then((res) => {
            console.log(res.data)
            this.setState({
                selectedStreamer: res.data
            })
        })
    }
    //http delete request to delete streamer by id
    deleteStreamer = () => {
        axios.delete(`/api/streamers/${this.state.selectedID}`).then((res) => {
          this.setState({
              selectedStreamer: null
          })  
        })
    }
     

    //rendering page to display on browser 
    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Find Streamer by ID!</h1>
                <input onChange={this.handleUpdateID}/>
                <button onClick={this.handleGetStreamerById}>Make Magic Happen</button>
                    {this.state.selectedStreamer ?
                    <div>
                        <h2>{this.state.selectedStreamer.name}</h2>
                        <h3>{this.state.selectedStreamer.followers}</h3> 
                        <img src={this.state.selectedStreamer.profile_image}></img>
                        <div>
                        <button onClick={this.deleteStreamer}>Click to Delete (They probably deserve it)</button>
                        
                        </div>
                        <div>
                            <h1>Give them more followers!</h1>
                            <input type='text' placeholder='Enter unrealistic follower Number here' onChange={this.handleUpdateFollower}/>
                            <button onClick={() => this.updateStreamer(this.state.selectedStreamer.id) }>False Hope</button>
                        </div>
                    </div>  
                    :
                    <div>Put the ID in the box, JUST DO IT!</div> 
                }
            </div>
        )
    }
}


export default Streamers