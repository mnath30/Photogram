import axios from "axios";

const loadPostService = async () => await axios.get("/api/posts");

export { loadPostService };
