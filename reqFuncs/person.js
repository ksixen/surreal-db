import _ from "lodash";
import responseObj from "../hooks/responseObj.js";
import { surrealDB } from "../surreal.js";

export const getUsersList = async (req, res) => {
  const select = await surrealDB.query({
    query: `SELECT * from person`,
    table: "person",
  });
  await res.send(responseObj(select));
};
export const getUserById = async (req, res) => {
  const { user_id } = req.query;
  if (!user_id) {
    return res.send("Error");
  }
  const select = await surrealDB.query({
    query: `SELECT * from person WHERE id='person:${user_id}'`,
    table: "person",
  });
  await res.send(responseObj(select, true));
};

export default {
  getUserById,
  getUsersList,
};
