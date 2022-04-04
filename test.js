import assert from "assert";
import Model from "./model.js"
import Database from "./database.js"

describe("Model test suite:", () => {
  describe("model.addNumbers", () => {
    const model = new Model(new Database());
    it("1 + 2 = 3", () => {
        assert.equal(model.addNumbers(1, 2), 3);
    });
    it("100000 + 25 = 100025", () => {
        assert.equal(model.addNumbers(100000, 25), 100025);
    });
  });
  describe("model.listUsers", () => {
    const mockDatabase = {
      get: () => [1, 2, 3],
    };
    const model = new Model(mockDatabase);
    it("returns array response from database", () => {
        assert.deepEqual(model.listUsers(), [1, 2, 3]);
    });
  });
  describe("model.addUser", () => {
    const user = { id: 10, name: "Joe" };
    const mockDatabase = {
      listOfUsers: [],
      add: (listName, user) => {
        mockDatabase.listOfUsers.push(user);
      }
    };
    const model = new Model(mockDatabase);
    it("adds a user", () => {
      model.addUser(user);
      assert.deepEqual(mockDatabase.listOfUsers[0], user);
    });
  });
  describe("model.longestWord", () => {
    const model = new Model(new Database());
    it("the first word is longest", () => {
        assert.equal(model.longestWord(["apple", "cat", "dog", "rat"]), "apple");
    });
    it("the second word is longest", () => {
        assert.equal(model.longestWord(["apple", "squirrel", "cat", "dog"]), "squirrel");
    });
    it("the last word is longest", () => {
        assert.equal(model.longestWord(["apple", "cat", "dog", "squirrel"]), "squirrel");
    });
  });
});
