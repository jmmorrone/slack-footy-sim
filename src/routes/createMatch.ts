import { NextFunction } from 'express'
import { Request, Response } from 'express-serve-static-core'
import createMatch from '../managers/createMatch'

export default async (req: Request, res: Response, next: NextFunction) => {
  const { log, body } = req

  try {
    const result = await createMatch(body)
    res.status(201).send({ data: result })
  } catch (error) {
    log.error(`Error creating match: ${error}`)
    res.status(500).send({ error })
  }

  return next()
}
