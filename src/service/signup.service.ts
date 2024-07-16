import axios from "axios";
import { headers } from "next/headers";
export async function userSignUp(data: { username: string; password: string }) {
  let url = process.env.IDX_BASE_URL || "localhost:3000";

  const response = await axios.post(`http://${url}/api/signup`, data);
  return response;
}
