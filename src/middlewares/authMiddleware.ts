import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken"
import * as dotenv from 'dotenv'
dotenv.config()

const SECRET = "fabaf25020e35b61e67dbbe4095b75d7"

declare const process: {
  env: {
    [key: string] : string
  }
}

interface TokenPayload {
  id: string
  iat: number
  exp: number
}

export function authMiddleware(request : Request, response : Response, next : NextFunction) {
  const { authorization } = request.headers

  if(!authorization) {
    return response.status(401).json({ error: 'Token is not provided' })
  }

  const [ , token ] = authorization.split(' ')

  try {
    const decoded = verify(token, SECRET)

    const { id } = decoded as TokenPayload

    request.userId = id

    next()
  } catch (e) {
    return response.status(401).json({ error: 'Token invalid' })
  }
}