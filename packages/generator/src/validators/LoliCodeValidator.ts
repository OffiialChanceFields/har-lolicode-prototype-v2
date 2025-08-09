export class LoliCodeValidator {
  validate(script: string): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];
    if (script.length === 0) {
      errors.push('Script is empty.');
    }
    // This is a very basic validator. A real one would need a full LoliCode parser.
    if (!script.includes('REQUEST')) {
        errors.push('Script does not contain any REQUEST block.');
    }
    if ((script.match(/ENDBLOCK/g) || []).length !== (script.match(/REQUEST|KEYCHECK|PARSE/g) || []).length) {
        errors.push('Mismatched block openings and closings.');
    }
    return {
      isValid: errors.length === 0,
      errors,
    };
  }
}
