import axios from "axios";

import { config } from "../../config";

export { filesDataService } from "./files";

axios.defaults.baseURL = config.API_URL;
