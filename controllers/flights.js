import { Flight } from '../models/flight.js'
import { Meal } from "../models/meal.js"


function newFlight(req, res) {
  res.render('flights/new', {
    title: "Add Flight",
  })
}

function createFlight(req, res) {
  Flight.create(req.body)
  .then(flight => {
    res.redirect(`/flights`)
    })
  .catch(err => {
    res.redirect('/flights')
    })
}


function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      flights: flights,
      title: 'All Flights',
    })
  })
  .catch(error => { 
    console.log(err)
    res.redirect('/flights')
  })
}
function show(req, res) {
  Flight.findById(req.params.id)
  .then(flight => {
    res.render('flights/show', {
      title: 'Flight Details',
      flight: flight
    })
  })
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id)
  .then(flight => {
    res.redirect("/flights")
  })
.catch(err => {
  console.log(err)
  res.redirect('/')
})
}


function edit (req, res) {
  Flight.findById(req.params.id)
  .then(flight => {
    res.render("flights/edit", {
      flight: flight,
      title: "Edit Flight",
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function update (req, res) {
  Flight.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(flight => {
    res.redirect('/flights')
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function createTicket (req, res) {
  Flight.findById(req.params.id)
  .then(flight => {
    flight.tickets.push(req.body)
    flight.save()
    .then(() => {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

function deleteTicket(req,res) {
  Flight.findById(req.params.id)
  .then(flight => {
    flight.tickets.remove(req.params.ticketid)
    flight.save()
    .then(() => {
      res.redirect(`/flights/${flight._id}`)
    })
    .catch(error => {
      console.log(error)
      res.redirect('/flights')
    })
  })
}

function newMeal(req, res) {
  Flight.findById(req.params.id)
  .then(flight => {
    console.log(req.body.mealId, "hello meal")
    flight.meals.push(req.body.mealId)
    flight.save()
		.then(() => {
		res.redirect(`/flights/${flight._id}`)
		})
  })
}


export {
  newFlight as new,
  createFlight as create,
  index,
  deleteFlight as delete,
  edit,
  update,
  show,
  createTicket,
  deleteTicket,
  newMeal,
}