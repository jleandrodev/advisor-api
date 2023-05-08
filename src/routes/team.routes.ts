import { Router } from "express";
import { addToTeam, getTeams } from "../controllers/team.controller";
import { accessControllVerify } from "../middlewares/accessControllMidlleware";

const teamRoutes = Router()

// teamRoutes.post('/', accessControllVerify(['admin']), addToTeam)
// teamRoutes.get('/', accessControllVerify(['admin']), getTeams)

teamRoutes.post('/', addToTeam)
teamRoutes.get('/', getTeams)

export { teamRoutes }