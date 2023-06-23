import { createConnection } from 'mongoose'
import { typedModel } from 'ts-mongoose'

import userSchema from './user'

const connection = createConnection(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.log(err))

const User = typedModel(
  'User',
  userSchema,
  undefined,
  undefined,
  undefined,
  connection
)

// const User = typedModel('User', userSchema)

export { User }
