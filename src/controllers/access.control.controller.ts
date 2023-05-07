import { Request, Response } from "express";
import { acCreate } from "../repositorys/access.control.repository";

export const acAssign = async (request : Request, response : Response) => {
  try {
    const { roleId, userId } = request.body
    await acCreate(roleId, userId)

    response.status(200).json({ message: 'Granted access control' })
  } catch (e) {
    response.status(400).send(e)
  }
}