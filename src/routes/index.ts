import { Express } from 'express-serve-static-core'
import getMatch from './getMatch'
import createMatch from './createMatch'
import createMatchValidator from './validators/createMatch'

const addRoutes = (app: Express): void => {
  app.get('/api/v1/match/:id', getMatch)
  app.post('/api/v1/match', createMatchValidator, createMatch)
}

export default addRoutes
