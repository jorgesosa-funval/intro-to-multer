import { Router } from 'express'
import {store} from '../services/UsersService.js'

export const userRoutes = Router()


userRoutes.get('/', (req, res, next) => {
    res.json({ all: "All useres" })
})
userRoutes.get('/:id', (req, res, next) => {
    res.json({ show: "one useres" })
})

userRoutes.post('/',  async  (req, res, next) => {
    const respose = await store(req)
    res.json(respose)
})
userRoutes.put('/:id', (req, res, next) => {
    res.json({ update: "update useres" })
})
userRoutes.delete('/:id', (req, res, next) => {
    res.json({ delete: "delete useres" })
})

 