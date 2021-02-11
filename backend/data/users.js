import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Ette Udo",
    email: "ette@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Gracious Marvelousity",
    email: "gracious@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
