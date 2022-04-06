import assert from "assert";
import Model from "./model.js"
import Database from "./database.js"
import sumNumbers from "./sum_numbers_in_files.js"

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

describe("sum_numbers_in_files.js test suite:", () => {
  it("add 0 numbers give sum of 0", async () => {
    const result = await sumNumbers([]);
    assert.equal(result, 0);
  });
  it("add 1 + 2 + 3 give sum of 6", async () => {
    const result = await sumNumbers([
      "numbers1"
    ]);
    assert.equal(result, 6);
  });
  it("add arbitrary numbers gives expected sum", async () => {
    const result = await sumNumbers([
      "numbers1",
      "numbers2"
    ]);
    assert.equal(result, 1043);
  });
  it("add numbers with invalid characters skips invalid numbers and returns sum", async () => {
    const result = await sumNumbers([
      "numbersBad"
    ]);
    assert.equal(result, 11);
  });
});
