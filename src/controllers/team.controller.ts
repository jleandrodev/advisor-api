import { Request, Response } from "express"
import { createTeam, viewAllTeams } from "../repositorys/team.repository"

export const addToTeam = async (request : Request, response : Response) => {
  try {
    await createTeam(request.body.userId, request.body.eventId)
    response.status(200).send({ message: "User added to team" })
  } catch (e) {
    response.status(400).send(e)
  }
}

export const getTeams = async (request : Request, response : Response) => {
  try {
    const teams = await viewAllTeams()

    response.status(200).send(teams)
  } catch (e) {
    response.status(400).send(e)
  }
}