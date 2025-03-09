import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const loginApi = async (credential) => {
   try {
      const response = await axios.post(`${BASE_URL}/auth/singin`, credential);
      return response;
   } catch (err) {
      console.log("loging error ", err.response.data);
      throw new Error(err?.response?.data);
   }
};
