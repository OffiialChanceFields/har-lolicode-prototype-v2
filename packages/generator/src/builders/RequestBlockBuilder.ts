import type { SemanticHarEntry } from '@har2lolicode/parser';
import type { CustomHeader } from '../types';

export class RequestBlockBuilder {
  build(entry: SemanticHarEntry, customHeaders?: CustomHeader[]): string {
    const { request } = entry;
    const lines: string[] = [];

    // REQUEST block
    lines.push(`REQUEST "${request.method}" "${request.url}"`);
    if(request.body?.data) {
        lines.push(`  CONTENT "${request.body?.data || ''}"`);
    }
    lines.push(`  CONTENTTYPE "${request.body?.contentType || 'application/json'}"`);

    // Add original headers
    for (const [key, value] of Object.entries(request.headers)) {
        // Skip some common headers that are often managed by the client
        if (['host', 'content-length', 'user-agent', 'accept', 'accept-encoding', 'accept-language', 'connection'].includes(key.toLowerCase())) continue;
        lines.push(`  HEADER "${key}: ${value.replace(/"/g, '\\"')}"`);
    }

    // Add/overwrite with custom headers
    if (customHeaders) {
        for (const header of customHeaders) {
            if (header.enabled) {
                lines.push(`  HEADER "${header.key}: ${header.value.replace(/"/g, '\\"')}"`);
            }
        }
    }

    lines.push('ENDBLOCK');
    return lines.join('\n');
  }
}
