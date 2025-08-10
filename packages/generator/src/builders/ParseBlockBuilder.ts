import type { VariableExtraction } from '../types';

export class ParseBlockBuilder {
  build(extraction: VariableExtraction): string {
    const lines: string[] = [];
    const scope = extraction.isGlobal ? '->' : ''; // The arrow is for capture, not global scope in OB2 LoliCode
    lines.push(`PARSE <SOURCE>`);

    switch (extraction.type) {
        case 'regex':
            lines.push(`  REGEX "${extraction.pattern.replace(/"/g, '\\"')}" -> VAR ${scope} "${extraction.variableName}"`);
            break;
        case 'json':
            lines.push(`  JSON "${extraction.pattern}" -> VAR ${scope} "${extraction.variableName}"`);
            break;
        case 'css':
            lines.push(`  CSS "${extraction.pattern}" "0" -> VAR ${scope} "${extraction.variableName}"`);
            break;
        case 'xpath':
            lines.push(`  XPATH "${extraction.pattern}" -> VAR ${scope} "${extraction.variableName}"`);
            break;
    }
    lines.push('ENDBLOCK');
    return lines.join('\n');
  }
}
