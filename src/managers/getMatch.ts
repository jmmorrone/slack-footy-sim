import { Match } from '../models/match'

export default async (id: string) => {
  const match = await Match.findById(id)
  if (!match) {
    throw new Error('No match found!')
  }

  return match
}
