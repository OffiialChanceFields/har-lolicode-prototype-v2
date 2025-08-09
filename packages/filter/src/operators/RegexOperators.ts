export class RegexOperators {
  static matches(source: string, pattern: string): boolean {
    try {
      const regex = new RegExp(pattern);
      return regex.test(source);
    } catch (e) {
      console.error("Invalid regex pattern:", pattern);
      return false;
    }
  }
}
