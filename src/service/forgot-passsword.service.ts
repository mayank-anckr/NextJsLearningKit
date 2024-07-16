import axios from "axios";
export async function userForgotPassword(data: {
  username: string;
  baseUrl: string;
}) {
  let url = process.env.IDX_BASE_URL || "localhost:3000";

  const response = await axios.post(`http://${url}/api/forgot-password`, data);
  return response;
}
