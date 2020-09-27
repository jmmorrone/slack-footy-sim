import { model, Schema } from 'mongoose'
import { v4 } from 'uuid'

const matchSchema = new Schema({
  _id: {
    type: String,
    default: () => v4()
  },
  local_team_score: {
    type: Number,
    required: true
  },
  away_team_score: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
})

export const Match = model('Match', matchSchema, 'Matches')
