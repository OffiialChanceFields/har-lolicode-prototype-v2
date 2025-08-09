import type { SemanticHarEntry, ResponseContentType } from '../types';

export class ResponseTransformer {
  transform(
    response: any,
    includeResponseBodies: boolean,
    maxBodySize: number
  ): SemanticHarEntry['response'] {
    const headers: Record<string, string> = {};
    if (response.headers) {
      for (const header of response.headers) {
        headers[header.name.toLowerCase()] = header.value;
      }
    }

    const cookies: Record<string, string> = {};
    if (response.cookies) {
      for (const cookie of response.cookies) {
        cookies[cookie.name] = cookie.value;
      }
    }

    let body;
    if (includeResponseBodies && response.content) {
      const truncated = response.content.size > maxBodySize;
      body = {
        contentType: response.content.mimeType.split(';')[0] as ResponseContentType,
        data: truncated ? (response.content.text || '').substring(0, maxBodySize) : response.content.text || '',
        size: response.content.size,
        truncated,
      };
    }

    return {
      status: response.status,
      statusText: response.statusText,
      headers,
      cookies,
      body,
      redirectUrl: response.redirectURL,
    };
  }
}
