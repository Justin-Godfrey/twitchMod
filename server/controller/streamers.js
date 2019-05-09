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
      getAllStreamers: (req, res) => {
          res.status(200).send(streamers)
      },
      
      getStreamersById: (req, res) => {
          const { id } = req.params
          const streamers = streamers.filter((streamer) => {
              return event.id === +id
          })

          res.status(200).send(streamer[0])
      },

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
      updateStreamer: (req, res) => {
       
      },

      deleteStreamer: (req, res) => {
          
      }
  }