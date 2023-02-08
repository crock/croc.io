import express from 'express'
import handlers from './handlers/'
import cors from 'cors'
import { connection } from './utils/db'

connection.connect()

const app = express()

app.use(express.json())
app.use(cors())

app.post('/api/auth/register', handlers.auth.register)
app.post('/api/auth/login', handlers.auth.login)
app.get('/api/auth/verify', handlers.auth.verify)
app.get('/api/auth/profile', handlers.auth.profile)
app.post('/api/drafts/new', handlers.drafts.new)

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

app.addListener('error', (err) => {
    console.log(err)
    connection.end()
})