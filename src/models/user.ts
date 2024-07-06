import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "Email already exists!"],
      required: [true, "Email is required!"],
    },
    name: {
      type: String,
      required: [true, "Username is required!"],
    },
    password: {
      type: String,
    },
    trips: {
      type: Array,
    },
    birthday: {
      type: String,
    },
    location: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    paymentDetails: {
      type: Object,
    },
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);
export default User;
