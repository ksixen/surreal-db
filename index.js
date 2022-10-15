import express from "express";
import { getUserById, getUsersList } from "./reqFuncs/person.js";
import { surrealDB } from "./surreal.js";
// const Surreal = require('');

const PORT = 4000;
const app = express();

app.use(express.json());

app.get("/getUser", getUserById);
app.get("/getUsersList", getUsersList);

app.listen(PORT, () => {
  surrealDB.initDB().then(() => {
    console.log("ServerStartedOnPort", `http://localhost:${PORT}`);
  });
});
