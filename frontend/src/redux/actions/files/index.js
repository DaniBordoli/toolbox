import { FILES_DATA } from "../../../constants";
import { filesDataService } from "../../../services";

export const filesData = () => ({
  type: FILES_DATA,
  payload: filesDataService(),
});
