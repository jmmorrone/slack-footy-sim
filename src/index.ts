import express from 'express'
import expressOasGenerator from 'express-oas-generator'
import addRoutes from './routes'
import logger from './logger'
import connectToDb, { modelNames } from './config/database'
import bodyParser from 'body-parser'

const app = express()
expressOasGenerator.handleResponses(app, {
  specOutputPath: './docs/api.json',
  mongooseModels: modelNames
})

app.use(logger)
app.use(bodyParser.json({}))
addRoutes(app)

expressOasGenerator.handleRequests()
app.listen(8000, async () => {
  await connectToDb()
  console.log('Server is up on port 8000')
})
