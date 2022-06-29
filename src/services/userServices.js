import axios from "axios";

const loadUsersService = async () => await axios.get("/api/users");

export { loadUsersService };
