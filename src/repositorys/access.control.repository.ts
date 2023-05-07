import { AppError } from "../errors/AppError"
import { prisma } from "../services/prisma"

export const acCreate = async (roleId : string, userId : string) => {

  const user = await prisma.user.findFirst({ where: { id: userId } })

  if(!user) {
    throw new AppError('User not exists', 404)
  }

  await prisma.userRoles.create({
    data: {
      roleId,
      userId
    }
  })
}