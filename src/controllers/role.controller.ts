import { Request, Response } from "express"
import { createRole, getRoles } from "../repositorys/role.repository"

export const roleCreate = async (request : Request, response : Response) => {
  try {
    const role = await createRole(request.body)
    response.status(200).send(role)
  } catch (e) {
    response.status(400).send({ message: "error" })
  }
}

export const viewRoles = async (request : Request, response : Response) => {
  try {
    const roles = await getRoles()
    response.status(200).json(roles)
  } catch (e) {
    response.status(400).send(e)
  }
}