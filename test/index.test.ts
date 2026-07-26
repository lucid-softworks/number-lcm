import { describe, expect, it } from "vitest";

import { lcm } from "../src/index.js";

describe("lcm", () => {
  it("computes non-negative multiples", () => {
    expect(lcm(6, 8)).toBe(24);
    expect(lcm(-3, 7)).toBe(21);
    expect(lcm(0, 4)).toBe(0);
    expect(lcm(0, 0)).toBe(0);
  });
  it("rejects unsafe input and output", () => {
    expect(() => lcm(1.5, 2)).toThrow(RangeError);
    expect(() => lcm(Number.MAX_SAFE_INTEGER, 2)).toThrow("Result exceeds");
  });
});
