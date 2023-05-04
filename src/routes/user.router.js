import { Router } from 'express'
import { generateUser } from '../utils.js'

const router = Router()

router.get('/', (req, res) => {
    const users = []
    for (let index = 0; index < 100; index++) {
        users.push(generateUser())
    }
    res.send({ status: "success", payload: users })
})

export default router
