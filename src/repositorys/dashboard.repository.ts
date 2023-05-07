import { prisma } from "../services/prisma";

export const getMessage = async (userId : string) => {
  const user = await prisma.user.findUnique({ where: { id: userId } })

  const message = `Welcome to Dashboard ${user?.name}`

  return message
}