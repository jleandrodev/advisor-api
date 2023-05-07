import { AppError } from "../errors/AppError"
import { prisma } from "../services/prisma"

interface Role {
  name: string
  description: string
}

export const createRole = async (data : Role) => {
  const role = await prisma.roles.create({
    data,
    select: {
      id: false,
      name: true,
      description: false,
      created_at: false
    }
  })
  return role
}

export const getRoles = async () => {
  const roles = await prisma.roles.findMany()

  return roles
}

