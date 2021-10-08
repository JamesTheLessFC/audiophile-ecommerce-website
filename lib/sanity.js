import { createClient } from "next-sanity";
import { config, configWithToken } from "./config";

if (!config.projectId) {
  throw Error("The Project ID is not set. Check your environment variables.");
}

export const client = createClient(config);
export const clientWithWriteAccess = createClient(configWithToken);

export const getClient = (type) =>
  type === "readOnly" ? client : clientWithWriteAccess;

export default client;
