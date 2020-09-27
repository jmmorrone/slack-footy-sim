import { NextFunction } from 'express'
import { Request, Response } from 'express-serve-static-core'
import getMatch from '../managers/getMatch'

export default async (req: Request, res: Response, next: NextFunction) => {
  const { log, params } = req

  try {
    const result = await getMatch(params.id)
    res.status(200).send({ data: result })
  } catch (error) {
    log.error(`Error getting match: ${error}`)
    res.status(500).send({ error })
  }

  return next()
}
