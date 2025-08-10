export class NumericOperators {
  static greaterThan(a: number, b: number): boolean {
    return a > b;
  }
  static lessThan(a: number, b: number): boolean {
    return a < b;
  }
  static inRange(value: number, min: number, max: number): boolean {
    return value >= min && value <= max;
  }
}
