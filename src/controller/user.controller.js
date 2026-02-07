import User from "../model/user.model.js";
import { hashPassword } from "../utils/bcrypt.utils.js";
import CustomError from "../middleware/errorhandler.middleware.js";

export const createUser = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    role,
    contactNumber,
    dateofBirth,
    permanentAddress,
    tempraryAddress,
    password,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !contactNumber ||
    !tempraryAddress ||
    !password
  ) {
    throw new CustomError("All mandatory fields are required", 400);
  }

  const userExists = User.findOne({ email });

  if (userExists === null) {
    throw new CustomError("User with this email already exists", 400);
  }

  const hashedPassword = await hashPassword(password);

  const user = await User.create({
    firstName,
    lastName,
    email,
    role,
    contactNumber,
    dateofBirth,
    permanentAddress,
    tempraryAddress,
    password: hashedPassword,
  });

  res.send("Create user endpoint");
};
