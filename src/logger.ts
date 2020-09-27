import pino from 'pino'
import expressPino from 'express-pino-logger'

export default expressPino({
  logger: pino({ level: process.env.LOG_LEVEL || 'info', prettyPrint: true })
})
