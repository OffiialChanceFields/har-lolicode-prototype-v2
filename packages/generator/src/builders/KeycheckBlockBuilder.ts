import type { CustomAssertion } from '../types';

export class KeycheckBlockBuilder {
  build(assertion: CustomAssertion): string {
    const lines: string[] = ['KEYCHECK'];
    switch (assertion.type) {
      case 'status':
        lines.push(`  KEY "<RESPONSECODE>" == "${assertion.value}"`);
        break;
      case 'contains':
        lines.push(`  KEY "<SOURCE>" Contains "${assertion.value}"`);
        break;
      case 'regex':
        lines.push(`  KEY "<SOURCE>" RegexMatch "${assertion.value}"`);
        break;
      case 'json-path':
        // This would typically be a PARSE block followed by a KEYCHECK on the variable.
        // For simplicity, we'll just show a comment.
        lines.push(`  # JSON-PATH check for '${assertion.value}' would require a PARSE block first.`);
        break;
    }
    lines.push(`  ACTION ${assertion.action.toUpperCase()}`);
    lines.push('ENDBLOCK');
    return lines.join('\n');
  }

  buildStatusCheck(status: number): string {
    const lines: string[] = ['KEYCHECK'];
    if (status >= 200 && status < 400) { // Treat 3xx as success for this default check
        lines.push(`  KEY "<RESPONSECODE>" == "${status}"`);
        lines.push('  ACTION SUCCESS');
    } else {
        lines.push(`  KEY "<RESPONSECODE>" == "${status}"`);
        lines.push('  ACTION FAIL');
    }
    lines.push('ENDBLOCK');
    return lines.join('\n');
  }
}
