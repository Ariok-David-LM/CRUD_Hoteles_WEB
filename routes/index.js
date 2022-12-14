import express from 'express'
import { paginaInicio, paginaListaHoteles, paginaVistaHotel } from '../controllers/indexControllers.js'
import { paginaCreateGerentes, createGerente, paginaReadGerentes,paginaUpdateGerentes, updateGerente, paginaDeleteGerentes } from '../controllers/gerentesControllers.js'
import { paginaCreateHoteles, createHotel, paginaReadHoteles,paginaUpdateHoteles, updateHotel, paginaDeleteHoteles, paginaCreateHabitacionHotel, createHabitacionHotel } from '../controllers/hotelesControllers.js'
import { paginaCreateHabitacion, createHabitacion, paginaReadHabitaciones,paginaUpdateHabitacion, updateHabitacion, paginaDeleteHabitaciones, paginaUpdateHotelHabitacion, updateHotelHabitacion, paginaDeleteHotelHabitacion } from '../controllers/habitacionesControllers.js'


const rutas = express.Router()

rutas.get('/lista/hoteles/hotel', paginaVistaHotel)

rutas.get('/lista/hoteles', paginaListaHoteles)

rutas.get('/lista/hoteles/hotel/habitacion/update', paginaUpdateHotelHabitacion)

rutas.post('/lista/hoteles/hotel/habitacion/update', updateHotelHabitacion)

rutas.get('/lista/hoteles/hotel/habitacion/delete', paginaDeleteHotelHabitacion)

// Gerentes

rutas.get('/', paginaInicio)

rutas.get('/gerentes', paginaReadGerentes)

rutas.get('/gerentes/create', paginaCreateGerentes)

rutas.get('/gerentes/update', paginaUpdateGerentes)

rutas.get('/gerentes/delete', paginaDeleteGerentes)

rutas.post('/gerentes/create', createGerente)

rutas.post('/gerentes/update', updateGerente)

// Hoteles 

rutas.get('/hoteles', paginaReadHoteles)

rutas.get('/hoteles/create', paginaCreateHoteles)

rutas.get('/hoteles/update', paginaUpdateHoteles)

rutas.get('/hoteles/delete', paginaDeleteHoteles)

rutas.post('/hoteles/create', createHotel)

rutas.post('/hoteles/update', updateHotel)

rutas.get('/hoteles/habitaciones/create', paginaCreateHabitacionHotel)

rutas.post('/hoteles/habitaciones/create', createHabitacionHotel)

// Habitaciones

rutas.get('/habitaciones', paginaReadHabitaciones)

rutas.get('/habitaciones/create', paginaCreateHabitacion)

rutas.get('/habitaciones/update', paginaUpdateHabitacion)

rutas.get('/habitaciones/delete', paginaDeleteHabitaciones)

rutas.post('/habitaciones/create', createHabitacion)

rutas.post('/habitaciones/update', updateHabitacion)


export default rutas