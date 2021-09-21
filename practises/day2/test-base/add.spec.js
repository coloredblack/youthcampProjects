const add = require("./add");

test("should 1+1 = 2", () => {
  const a = 1;
  const b = 1;
  // given
  const r = add(a, b);
  // when
  expect(r).toBe(2);
  // jest
})