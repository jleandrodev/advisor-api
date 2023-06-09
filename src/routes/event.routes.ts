import { Router } from "express";
import { eventCreate, eventRemove, eventShow, eventsShowAll, eventUpdate } from "../controllers/event.controller";
import { accessControllVerify } from "../middlewares/accessControllMidlleware";

const eventRoutes = Router()

eventRoutes.post('/', accessControllVerify(['admin']), eventCreate)
eventRoutes.get('/:id', accessControllVerify(['admin', 'support', 'client']), eventShow)
eventRoutes.get('/', accessControllVerify(['admin', 'support']), eventsShowAll)
eventRoutes.put('/:id', accessControllVerify(['admin']), eventUpdate)
eventRoutes.delete('/:id', accessControllVerify(['admin']), eventRemove)



export { eventRoutes }