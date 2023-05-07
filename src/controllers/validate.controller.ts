import { Request, Response } from "express"
import { prisma } from "../services/prisma"

export async function ValidateController (request: Request, response: Response) {

  const { userId } = request

  const user = await prisma.user.findFirst({ where: { id: userId } })

  return response.json({ user })
} 