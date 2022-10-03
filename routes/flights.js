import { Router } from 'express'

const router = Router()

import * as flightsCtrl from '../controllers/flights.js'

/* GET users listing. */
router.get('/', flightsCtrl.index)

router.get('/new', flightsCtrl.new)

router.post('/', flightsCtrl.create)

router.get('/:id', flightsCtrl.show)

router.delete("/:id", flightsCtrl.delete)

router.get("/:id/edit", flightsCtrl.edit)

router.put("/:id", flightsCtrl.update)

router.post('/:id/meals', flightsCtrl.newMeal )

router.delete('/:id/tickets/:ticketId', flightsCtrl.deleteTicket)


router.post('/:id/tickets', flightsCtrl.createTicket)



export {
  router
}
