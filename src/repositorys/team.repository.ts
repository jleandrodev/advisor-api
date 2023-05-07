import { prisma } from "../services/prisma"


export const createTeam = async (userId : string, eventId : string) => {
  await prisma.team.create({
    data: {
      userId,
      eventId
    },
    select: {
      userId: true,
      eventId: false
    }
  })
}

export const viewAllTeams = async () => {
  const teams = await prisma.team.findMany()
  return teams
}