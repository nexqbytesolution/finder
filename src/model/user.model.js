import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: [3, "First name must be at least 3 characters long"],
    max: [30, "First name must be less than 30 characters long"],
  },
  lastName: {
    type: String,
    required: true,
    min: [3, "Last name must be at least 3 characters long"],
    max: [30, "Last name must be less than 30 characters long"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"],
  },
  role: {
    type: String,
    enum: ["user", "admin", "broker"],
    default: "user",
  },
  contactNumber: {
    type: String,
    required: true,
    match: [/^\d{10}$/, "Please enter a valid 10-digit contact number"],
  },
  dateofBirth: {
    type: Date,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  tempraryAddress: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  ProfilePicture: {
    type: String,
    default: "https://example.com/default-profile-picture.jpg",
    required: false,
  },
});

const User = mongoose.model("User", UserSchema);
export default User;
