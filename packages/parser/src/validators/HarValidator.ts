export class HarValidator {
  validate(data: any): { isValid: boolean; errors: { message: string }[] } {
    // Basic validation, as the full schema is not provided.
    if (!data || !data.log || !Array.isArray(data.log.entries)) {
      return { isValid: false, errors: [{ message: "Missing log.entries array" }] };
    }
    return { isValid: true, errors: [] };
  }
}
