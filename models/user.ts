import { createSchema, Type } from 'ts-mongoose'

const usernameSchema = createSchema({
  username: Type.string({ required: true, unique: true, index: true }),
  verified: Type.boolean({ required: true, default: true }),
})

const userSchema = createSchema(
  {
    email: Type.string({ required: true, unique: true, index: true }),
    usernames: Type.array({ required: true, unique: true, index: true }).of(
      usernameSchema
    ),
    name: Type.string({ required: true }),
    dept: Type.string({ required: true }),
    adm_yr: Type.number({ required: true }),
  },
  { timestamps: true }
)

// const User = typedModel('User', userSchema);

export default userSchema
