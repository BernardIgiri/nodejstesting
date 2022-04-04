class Model {
  constructor(database) {
    this.database = database;
  }
  addNumbers(a, b) {
    return a + b;
  }
  longestWord(words) {
    let longest = "";
    for (const w of words) {
      if (w.length > longest.length) {
        longest = w;
      }
    }
    return longest;
  }
  listUsers() {
    return this.database.get("users");
  }
  addUser(user) {
    this.database.add("users", user);
  }
  deleteUser(id) {
    this.database.remove("users", { id });
  }
}

export default Model;
