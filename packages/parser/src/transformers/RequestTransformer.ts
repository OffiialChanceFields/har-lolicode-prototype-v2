import type { SemanticHarEntry, HttpMethod, ContentType } from '../types';

export class RequestTransformer {
  transform(request: any): SemanticHarEntry['request'] {
    const headers: Record<string, string> = {};
    if (request.headers) {
      for (const header of request.headers) {
        headers[header.name.toLowerCase()] = header.value;
      }
    }

    const cookies: Record<string, string> = {};
    if (request.cookies) {
      for (const cookie of request.cookies) {
        cookies[cookie.name] = cookie.value;
      }
    }

    const queryParams: Record<string, string> = {};
    if (request.queryString) {
      for (const param of request.queryString) {
        queryParams[param.name] = param.value;
      }
    }

    let body;
    if (request.postData) {
        // This is a simplification, a real implementation would be more complex
        body = {
            contentType: request.postData.mimeType.split(';')[0] as ContentType,
            data: request.postData.text || '',
            size: request.postData.size || 0,
        }
    }

    return {
      method: request.method as HttpMethod,
      url: request.url,
      headers,
      cookies,
      queryParams,
      body,
    };
  }
}
