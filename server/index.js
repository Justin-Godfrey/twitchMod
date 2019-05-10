const express = require('express')
const app = express()

const stream = require('./controller/streamers')

app.use(express.json())
app.get('/api/streamers', stream.getAllStreamers)
app.get('/api/streamers/:id', stream.getStreamersById)
app.post('/api/addStreamer', stream.addStreamer)
app.put('/api/streamers/:id', stream.updateStreamer)
app.delete('/api/streamers/:id', stream.deleteStreamer)

const PORT = 3001
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`))

