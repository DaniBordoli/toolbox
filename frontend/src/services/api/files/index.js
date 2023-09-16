import axios from "axios";

export const filesDataService = async () => {
  const { data } = await axios.get("/files/data");

  try {
    return data;
  } catch (e) {
    return e;
  }
};
