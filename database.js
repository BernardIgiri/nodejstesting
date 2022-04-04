class Database {
  constructor() {
    this.users = [];
  }
  get(listName) {
    return this.users;
  }
  add(listName, value) {
    this.users.push(value);
  }
  remove(listName, pattern) {
    this.users = this.users.filter(user => user.id === pattern.id);
  }
}

export default Database;
