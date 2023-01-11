import express, { Application, Request, Response } from 'express'
import { indexRouter } from './routes/index'

const routes = (app: Application): void => {
  const apiUri = '/'
  app.all('/*', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.setHeader('Set-Cookie', ['type=nodeResponse', 'language=javascript'])
    next()
  })
  app.use(`${apiUri}`, indexRouter)

}

export default routes
