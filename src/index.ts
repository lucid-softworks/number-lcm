import { gcd } from "@lucid-softworks/number-gcd";

/** Returns the non-negative least common multiple, or 0 when either value is 0. */
export function lcm(left: number, right: number): number {
  const divisor = gcd(left, right);
  if (divisor === 0) return 0;
  const result = Math.abs((left / divisor) * right);
  if (!Number.isSafeInteger(result))
    throw new RangeError("Result exceeds safe integer range");
  return result;
}
