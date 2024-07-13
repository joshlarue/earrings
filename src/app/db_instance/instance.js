import PocketBase from "pocketbase";

export const POCKET_BASE_URL = "http://127.0.0.1:8090";

export class DatabaseClient {
  constructor() {
    // instantiate PocketBase
    this.client = new PocketBase(POCKET_BASE_URL);
  }

  // handles the authentication of the user
  // returns new auth token and account data
  async authenticate(username, password) {
    try {
      const result = await this.client
        .collection("users")
        .authWithPassword(username, password);
      // If there is no token in the result, it means something went wrong
      if (!result?.token) {
        throw new Error("Invalid username or password");
      }
      return result;
    } catch (err) {
      console.error(err);
      throw new Error("Invalid username or password");
    }
  }
}

// instance of the DatabaseClient that can be used throughout the app
const db = new DatabaseClient();

export default db;
