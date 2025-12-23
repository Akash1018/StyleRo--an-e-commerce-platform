import axios from "axios";

const BASE_URL = "https://stylero.onrender.com/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTFhY2Y0MDVkODk2YWM3OTNjNTE1ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MjgwNTIxNywiZXhwIjoxNjYzMDY0NDE3fQ.UfEQPGVmiqfVBtmz-TNKRVzOkklzwAkWAr_OdghRmng";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
