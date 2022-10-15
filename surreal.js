import Surreal from "surrealdb.js";

const db = new Surreal("http://127.0.0.1:8000/rpc");
const namespace = "test";
const database = "test";
const username = "root";
const password = "root";
export class surrealDB {
  constructor(e) {
    this.connection = false;
  }
  static async initDB() {
    try {
      this.connection = true;
      // Signin as a namespace, database, or root user
      await db.signin({
        user: username,
        pass: password,
      });

      // Select a specific namespace / database
      await db.use(namespace, database);
      console.log("Successful connected");
    } catch (err) {
      this.connection = false;
      console.log(err);
    }
  }

  static async createTable({ table, props }) {
    // Create a new person with a random id
    await db.create(table, props);

    await db.select(table);
  }

  static async updateColumn({ table, props }) {
    // Update a person record with a specific id
    await db.change(table, props);
  }
  static async query({ query, table }) {
    // Perform a custom advanced query
    const res = await db.query(query, {
      tb: table,
    });
    console.log("static async query", res);
    return res;
  }
  static async selectTable({ table }) {
    // Select all people records
    await db.query(`SELECT * FROM ${table}`, {
      tb: table,
    });
  }
}
