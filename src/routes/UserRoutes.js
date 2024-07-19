import { Router } from 'express'
import { store, upload, updateProfileImage, index } from '../controller/UsersController.js'

export const userRoutes = Router()




userRoutes.get('/', index)

userRoutes.get('/:id', (req, res, next) => {
    res.json({ show: "one useres" })
})

userRoutes.post('/', async (req, res, next) => {
    const respose = await store(req)
    res.json(respose)
})
userRoutes.put('/:id', upload.single('profile'), (req, res, next) => {
    res.json({ profile: req.file })
})

userRoutes.patch('/:id', upload.single('profile'), async (req, res, next) => {
    try {
        const response = await updateProfileImage(req)
        res.status(201).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

userRoutes.delete('/:id', (req, res, next) => {
    res.json({ delete: "delete useres" })
})

