import { body } from 'express-validator'

export default [
  body('local_team_score').isNumeric(),
  body('away_team_score').isNumeric()
]
