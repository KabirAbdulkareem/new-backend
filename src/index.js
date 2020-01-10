import routes from './routes';
import models from './models';
import uuidv4 from 'uuid/v4';
import 'dotenv/config';
import cors from 'cors';
import express from 'express';
//import { request } from 'http';

const app = express();
const PORT = process.env.PORT || 5000


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],
  }
  next();
})

app.use('/session', routes.session)
app.use('/users', routes.user)
app.use('/messages', routes.message)







app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))