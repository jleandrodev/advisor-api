import { Router } from "express";
import { eventCreate, eventRemove, eventShow, eventsShowAll, eventUpdate } from "../controllers/event.controller";
import { accessControllVerify } from "../middlewares/accessControllMidlleware";

const eventRoutes = Router()

// eventRoutes.post('/', accessControllVerify(['admin']), eventCreate)
// eventRoutes.get('/:id', accessControllVerify(['admin', 'support', 'client']), eventShow)
// eventRoutes.get('/', accessControllVerify(['admin', 'support']), eventsShowAll)
// eventRoutes.put('/:id', accessControllVerify(['admin']), eventUpdate)
// eventRoutes.delete('/:id', accessControllVerify(['admin']), eventRemove)

eventRoutes.post('/', eventCreate)
eventRoutes.get('/:id', eventShow)
eventRoutes.get('/', eventsShowAll)
eventRoutes.put('/:id', eventUpdate)
eventRoutes.delete('/:id', eventRemove)

export { eventRoutes }