import { Schema, model, models } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    index: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
    index: true,
  },
  name: {
    type: String,
    required: true,
    index: true,
  },
  dept: {
    type: String,
    required: true,
    index: true,
  },
  adm_yr: {
    type: String,
    required: true,
    index: true,
  }
});

userSchema.plugin(uniqueValidator);

export default models?.User || model("User", userSchema);
