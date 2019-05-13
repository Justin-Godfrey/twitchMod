import React, { Component } from 'react'
import axios from 'axios'

class Streamers extends Component {
    constructor() {
        super()
        this.state = {
            selectedID: null,
            selectedStreamer: null,
            newFollowerCount: ''
        }
    }

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
    handleUpdateID = (e) => {
        this.setState({
            selectedID: e.target.value
        })
    }

    handleUpdateFollower = (e) => {
        this.setState({
            newFollowerCount: e.target.value
        })
    }

    updateStreamer = (id) => {
        const { newFollowerCount } = this.state;
        axios.put(`/api/streamers/${id}`, { followers: newFollowerCount }).then((res) => {
            console.log(res.data)
            this.setState({
                selectedStreamer: res.data
            })
        })
    }

    deleteStreamer = () => {
        axios.delete(`/api/streamers/${this.state.selectedID}`).then((res) => {
          this.setState({
              selectedStreamer: null
          })  
        })
    }
     


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