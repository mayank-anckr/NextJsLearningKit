import axios from "axios";
import { headers } from "next/headers";
export async function userSignUp(data: {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  password: string;
  confirmPassword: string;
}) {
  let url = process.env.IDX_BASE_URL || "localhost:3001";

  const response = await axios.post(`http://${url}/api/signup`, {
    Authorization:
      "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2Nsb3VkLmdvb2dsZS5jb20vd29ya3N0YXRpb25zIiwiYXVkIjoiaWR4LWV4cHJlc3NraXQtMTcxOTkwMzUxNDk5Ni5jbHVzdGVyLTNnNHNjeHQybmpkZDZ1b3ZrcXlmY2FiZ282LmNsb3Vkd29ya3N0YXRpb25zLmRldiIsImlhdCI6MTcyMTExNTExNSwiZXhwIjoxNzIxMTE4NzE1fQ.OuRUmcCH2oQ3ZWwL_tDTAZaZwkMjr4fpufthkR5wfnpq3ky9KlwKITLBCDzt8I05Sxc-nOjx3EA0Ss9UFH3uqW6PU4ObRRrYjLFjYeY4l168eyykPI_2LUircXhuLzmgFfuKrR-u0ytvAm6BedDmYh5GUJFIurQ3htXAD0PX3kiV-jefifn_vGYYJHs_Pzo_trPbN1bjfuMTwfUqFSBknMeDuVjkePx9Bvl7ZwxKIKKZg1lZGJ8BLWNHy_aO6PQ52JQysfIAtmhV5Rc0G8lM2aEU62RxgBV0pVbO3tjpIIzOODMHeHZVxMNzNaLAmRSP2UkYpKnluFFDveVahQz7Ww",
    "Content-Type": "application/json",
  });
  console.log(response);
  return response;
}
