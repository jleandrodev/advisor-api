import { Router } from "express"
import { getUser, getUsers, userCreate, userDelete, userUpdade } from "../controllers/user.controller"
import { accessControllVerify } from "../middlewares/accessControllMidlleware"

const userRoutes = Router()

// userRoutes.post('/', accessControllVerify(['admin']), userCreate)
// userRoutes.get('/', accessControllVerify(['admin']), getUsers)
// userRoutes.get('/:id', accessControllVerify(['admin', 'support']), getUser)
// userRoutes.put('/:id', accessControllVerify(['admin', 'support']), userUpdade)
// userRoutes.delete('/:id', accessControllVerify(['admin']), userDelete)

userRoutes.post('/', userCreate)
userRoutes.get('/', getUsers)
userRoutes.get('/:id', getUser)
userRoutes.put('/:id', userUpdade)
userRoutes.delete('/:id', userDelete)

export { userRoutes }