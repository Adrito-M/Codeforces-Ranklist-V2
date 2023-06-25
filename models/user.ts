import { Schema, Document, model, Model, Types, models } from 'mongoose'

interface IUser extends Document {
  email: string
  usernames: {
    username: string
    verified: boolean
  }[]
  name: string
  dept: string
  adm_yr: number
}

export const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true, index: true },
    usernames: {
      type: [
        {
          username: {
            type: String,
            required: true,
            index: true,
            set: (v: string) => v.toLowerCase(),
          },
          verified: { type: Boolean, required: true },
        },
      ],
      required: true,
      default: [],
    },
    name: { type: String, required: true },
    dept: { type: String, required: true },
    adm_yr: { type: Number, required: true },
  },
  { timestamps: true }
)
type IUserModel = Model<
  IUser,
  {},
  {},
  {},
  Document<unknown, {}, IUser> &
    Omit<
      IUser & {
        _id: Types.ObjectId
      },
      never
    >,
  any
>
export const User: IUserModel = models.User || model<IUser>('User', userSchema)
