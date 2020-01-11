import uuidv4 from 'uuid/v4'
import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    return res.send(req.context.models.users[req.context.me.id])
})

export default router;