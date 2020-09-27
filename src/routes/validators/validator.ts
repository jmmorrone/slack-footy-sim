import { NextFunction } from 'express'
import { Request, Response } from 'express-serve-static-core'
import { validationResult } from 'express-validator'

export default (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  return next()
}
