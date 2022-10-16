import express from "express";
import {
  editUser,
  getUserById,
  getUsersList,
  loginUser,
} from "./reqFuncs/person.js";
import surrealDB from "./surreal.js";

const PORT = 4000;
const app = express();

app.use(express.json());
app.get("/getUserById", getUserById);
app.get("/getUsersList", getUsersList);
app.get("/editUser", editUser);
app.post("/login", loginUser);

const createTestUser = () => {
  surrealDB.createTable({
    table: "person",
    props: {
      name: `surreal-user${Math.random().toString(7)}`,
      login: Math.random().toString(7),
      password: Math.random().toString(7),
    },
  });
};

app.listen(PORT, () => {
  surrealDB.initDB().then(() => {
    createTestUser()
    console.log("ServerStartedOnPort", `http://localhost:${PORT}`);
  });
});
