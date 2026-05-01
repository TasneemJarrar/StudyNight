import { shuffle } from "../src/shuffle.js";
import { assert } from "chai";

describe("shuffle", () => {
  it("should rearrange the indexes of an array", () => {
    const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const shuffled = shuffle(original);
    assert.notDeepEqual(shuffled, original);
  });

  it("should return an array of the same length", () => {
    const original = [1, 2, 3, 4, 5];
    const shuffled = shuffle(original);
    assert.equal(shuffled.length, original.length);
  });

  it("should not mutate the original array", () => {
    const original = [1, 2, 3, 4, 5];
    const copy = [...original];
    shuffle(original);
    assert.deepEqual(original, copy);
  });

  it("should return an empty array if given an empty array", () => {
    const result = shuffle([]);
    assert.deepEqual(result, []);
  });
});
