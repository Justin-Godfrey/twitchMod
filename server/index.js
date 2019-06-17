
// requiring express and storing the invocation of express in the App variable to set up server
const express = require('express')
const app = express()

// requiring controller functions
const stream = require('./controller/streamers')

//endpoints/gates that clients can use to access our server
app.use(express.json())
app.get('/api/streamers', stream.getAllStreamers)
app.get('/api/streamers/:id', stream.getStreamersById)
app.post('/api/addStreamer', stream.addStreamer)
app.put('/api/streamers/:id', stream.updateStreamer)
app.delete('/api/streamers/:id', stream.deleteStreamer)


//executing our server on a specific port
const PORT = 3001
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`))

