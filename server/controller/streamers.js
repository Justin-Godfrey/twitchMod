//controller file where we store the handler functions that will execute when a specific end point is hit on our server

let streamers = [
    {
      id: 1,
      name: "OrdinaryMute",
      followers: "200",
      profile_image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/20b18a35-78c4-474a-b158-0b57a94c725f-profile_image-300x300.png'
    },
    {
      id: 2,
      name: "Kkashi6",
      followers: "10000000",
      profile_image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/245292b1-3bad-4fbe-96d2-4aca02f38427-profile_image-300x300.png'
    }
  ]

  module.exports = {
      //handler function to get all streamers from streamers array
      getAllStreamers: (req, res) => {
          res.status(200).send(streamers)
      },
      //handler funtion to get specific streamer based on their id
      getStreamersById: (req, res) => {
          const { id } = req.params
          const twitchStreamer = streamers.filter((streamer) => {
              return streamer.id === +id
          })
          res.status(200).send(twitchStreamer[0])
      },

      //handler function to create streamer
      addStreamer: (req, res) => {
          let id = streamers[streamers.length - 1].id + 1
          const { name, followers } = req.body
          const newStreamer = {
              id,
              name,
              followers
          }
          streamers = [...streamers, newStreamer]
          res.status(200).send(newStreamer)
      },

      //handler function to update specific streamer followers based in id
      updateStreamer: (req, res) => {
       const { id } = req.params
       const { followers } = req.body
       for(let i = 0; i < streamers.length; i++) {
           if (streamers[i].id === +id) {
               streamers[i].followers = followers
               res.send(streamers[i])
           }
       }
      },


      //handler function to delete a particular streamer
      deleteStreamer: (req, res) => {
        const { id } = req.params
        console.log(id)

        streamers = streamers.filter((streamer) => {
           return streamer.id !== +id
        })
        console.log(streamers)
        res.sendStatus(200)
      }
        }
     
     
    
  