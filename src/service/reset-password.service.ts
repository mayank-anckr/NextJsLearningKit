import axios from "axios";
export async function userResetPassword(data: {
  password: string;
  uuid: string;
}) {
  let url = process.env.IDX_BASE_URL || "localhost:3000";

  const response = await axios.post(`http://${url}/api/reset-password`, data);
  return response;
}
