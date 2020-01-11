import uuidv4 from 'uuid/v4'
import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    return res.send(Object.values(req.context.models.users))    
})

router.get('/:userId', (req, res) => {
    return res.send(req.context.models.users[req.params.userId])
})

router.post('/', (req,res) => {
    const id = uuidv4()
    const users = req.context.models.users
    const newUser = {
        id,
        username: req.body.username
    }

    users[id] = newUser
    return res.send(newUser)
})
export default router