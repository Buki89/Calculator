import { handleLargeNumber, makeResult, Operand } from "../../lib/helper";

test("number shouldnt be longer than 12", () => {
  const result = handleLargeNumber("44454645648977987985455555555556654");
  expect(result.length).toBe(12);
});
describe("makeResult func", () => {
  const result = makeResult;
  it("5 + 2 should be equal to 7", () => {
    expect(result("5", "2", Operand.plus)).toBe("7");
  });
  it("66 - 20 should be equal to 46", () => {
    expect(result("66", "20", Operand.minus)).toBe("46");
  });
  it("523 * 55 should be equal to 28765", () => {
    expect(result("523", "55", Operand.multiply)).toBe("28765");
  });
  it("256 / 8 should be to equal to 32", () => {
    expect(result("256", "8", Operand.divide)).toBe("32");
  });
  it("8 ^ 8 should be equal to 16777216", () => {
    expect(result("8", "8", Operand.exp)).toBe("16777216");
  });
  it("√9 should be equal to 3", () => {
    expect(result("77", "", Operand.sqrt)).toBe("8.77496");
  });
  it.only("√9 should be equal to 3", () => {
    expect(result("", "", Operand.minus)).toBe("");
  });
});
