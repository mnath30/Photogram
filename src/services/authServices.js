import axios from "axios";

const loginService = async (userDetail) =>
  await axios.post("/api/auth/login", {
    username: userDetail.username,
    password: userDetail.password,
  });

const signupService = async (userDetail) =>
  await axios.post("/api/auth/signup", {
    fullname: userDetail.fullname,
    email: userDetail.email,
    username: userDetail.username,
    password: userDetail.password,
  });

export { loginService, signupService };
