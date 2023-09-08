/* Fix Functions

  Aim: to understand the change code inside functions 

  See the below functions. They are syntactically correct but are not outputting the right results.

  Run the tests and see how you can fix them.

  NOTE:Only make edits inside the function
Once you have cloned the repository, run `npm install` once in the terminal to install jest (and any necessary dependencies).
- To run the tests for all mandatory/extra exercises, run `npm test`
- To run only the tests for the mandatory exercises, run `npm test -- --selectProjects mandatory`
- To run only the tests for the extra exercises, run `npm test -- --selectProjects extra`
- To run a single exercise/test (for example `mandatory/1-writer.js`), run `npm test -- --testPathPattern mandatory/1-writer.js` (Remember, you can use tab-completion to get files relative to the current directory, so m`Tab ↹`/1-`Tab ↹` will autocomplete get you the test file starting with 1-)
*/

function getMood(isHappy) {
  if (isHappy) {
    return "I am happy";
  } else {
    return "I am not happy";
  }
}

function greaterThan10(num) {
  let isBigEnough = num > 10;

  if (isBigEnough) {
    return "num is greater than 10";
  } else {
    return "num is not big enough";
  }
}

/* ======= TESTS - DO NOT MODIFY ===== */

describe("getMood", () => {
  test("getMood function works for true", () => {
    expect(getMood(true)).toEqual("I am happy");
  });

  test("getMood function works for false", () => {
    expect(getMood(false)).toEqual("I am not happy");
  });
});

describe("greaterThanTen", () => {
  test("works for value greater than 10", () => {
    expect(greaterThan10(11)).toEqual("num is greater than 10");
  });

  test("works for value much greater than 10", () => {
    expect(greaterThan10(96)).toEqual("num is greater than 10");
  });

  test("works for value less than 10", () => {
    expect(greaterThan10(9)).toEqual("num is not big enough");
  });

  test("works for value equal to 10", () => {
    expect(greaterThan10(10)).toEqual("num is not big enough");
  });
});
