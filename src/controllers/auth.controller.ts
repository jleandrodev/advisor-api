import { compare } from "bcrypt"
import { request, Request, Response } from "express"
import { sign } from "jsonwebtoken"
import { prisma } from "../services/prisma"
import * as dotenv from 'dotenv'

const SECRET = "fabaf25020e35b61e67dbbe4095b75d7"

dotenv.config()

declare const process: {
  env: {
    [key: string] : string
  }
}

export async function AuthController (request : Request, response: Response) {

  const { email, password } = request.headers

  const user = await prisma.user.findFirst({ where: { email } })

  if(!user) {
    response.status(401).json({ error: 'User not found!' })
  }

  const isValidPassword = await compare(password, user!.password)

  if(!isValidPassword) {
    response.status(401).json({ error: 'Invalid credentials' })
  }

  const token = sign({ id: user?.id }, SECRET, { expiresIn: 900 } )

  const id = user?.id
  const name = user?.name

  return response.json({ user: { id, email, name }, token })

}

