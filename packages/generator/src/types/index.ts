/**
 * @fileoverview Core type definitions for LoliCode generation module
 * @module @har2lolicode/generator
 */

/**
 * Configuration for LoliCode generation
 */
export interface LoliCodeConfig {
  /** Indices of requests to include */
  selectedIndices: number[];

  /** Custom headers per request index */
  customHeaders?: Record<number, CustomHeader[]>;

  /** Custom assertions per request index */
  customAssertions?: Record<number, CustomAssertion[]>;

  /** Variable extraction rules per request index */
  variableExtractions?: Record<number, VariableExtraction[]>;

  /** Global script settings */
  settings?: {
    useProxy?: boolean;
    followRedirects?: boolean;
    timeout?: number;
    retryCount?: number;
  };
}

export interface CustomHeader {
  key: string;
  value: string;
  enabled: boolean;
}

export interface CustomAssertion {
  type: 'status' | 'contains' | 'regex' | 'json-path';
  value: string;
  expectedResult?: string;
  action: 'success' | 'fail' | 'retry' | 'ban';
}

export interface VariableExtraction {
  type: 'regex' | 'json' | 'css' | 'xpath';
  pattern: string;
  variableName: string;
  isGlobal: boolean;
}
