import { Router } from "express"
import { AuthController} from "../controllers/auth.controller"
import { DashboardController } from "../controllers/dashboard.controller"
import { ValidateController } from "../controllers/validate.controller"
import { authMiddleware } from "../middlewares/authMiddleware"
import { eventRoutes } from "./event.routes"
import { roleRoutes } from "./role.routes"
import { teamRoutes } from "./team.routes"
import { userRoutes } from "./user.routes"


const routes = Router()

routes.use('/users', authMiddleware, userRoutes)
routes.use('/events', authMiddleware, eventRoutes)
routes.use('/team', authMiddleware, teamRoutes)
routes.use('/roles', authMiddleware, roleRoutes)

routes.post('/login', AuthController)
routes.post('/validate',authMiddleware, ValidateController)

routes.get('/dashboard', authMiddleware, DashboardController)

export { routes }