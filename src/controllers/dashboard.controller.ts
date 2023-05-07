import { Request, Response } from "express";
import { getMessage } from "../repositorys/dashboard.repository";

export const DashboardController = async (request : Request, response : Response) => {
  const { userId }= request
  const message = await getMessage(userId)
  response.status(200).json({ message })
}