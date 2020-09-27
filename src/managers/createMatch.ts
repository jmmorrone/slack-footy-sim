import { Match } from '../models/match'

export default async (body: object) => {
  return Match.create(body)
}
