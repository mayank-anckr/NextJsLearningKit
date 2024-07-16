import axios from "axios";
export async function userSignIn(data: { username: string; password: string }) {
  let url = process.env.IDX_BASE_URL || "localhost:3000";

  const response = await axios.post(`http://${url}/api/signin`, data);
  return response;
}
