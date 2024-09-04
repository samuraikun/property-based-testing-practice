import fc from "fast-check";
import { describe, it } from "vitest";

const contains = (text: string, pattern: string): boolean =>
  text.indexOf(pattern) >= 0;

describe("properties", () => {
  it("should always contain itself", () => {
    fc.assert(
      fc.property(fc.string(), (text) => {
        return contains(text, text);
      }),
    );
  });

  it("should always contain its substrings", () => {
    fc.assert(
      fc.property(fc.string(), fc.string(), fc.string(), (a, b, c) => {
        return contains(a + b + c, b);
      }),
    );
  });
});
