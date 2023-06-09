import express, { NextFunction, Request, Response } from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import {routes} from './routes'
import 'express-async-errors'
import { AppError } from './errors/AppError'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.use(routes)
app.use((err : Error, request : Request, response : Response, next : NextFunction) => {
  if(err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message
    })
  }
  return response.status(500).json({
    status: "error",
      message: `Internal server error - ${err.message}`
  })
})

app.listen(3000, () => {console.log(`🚀 Server is running on http://localhost:3000 `)})