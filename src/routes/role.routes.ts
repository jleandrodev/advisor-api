import { Router } from "express";
import { acAssign } from "../controllers/access.control.controller";
import { roleCreate, viewRoles } from "../controllers/role.controller";
import { accessControllVerify } from "../middlewares/accessControllMidlleware";

const roleRoutes = Router()

roleRoutes.post('/', accessControllVerify(['admin']), roleCreate)
roleRoutes.post('/assign', accessControllVerify(['admin']), acAssign)
roleRoutes.get('/', accessControllVerify(['admin']), viewRoles)


export { roleRoutes }