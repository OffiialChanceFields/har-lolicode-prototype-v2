import React from 'react';
import type { SemanticHarEntry } from '@har2lolicode/parser';

interface TokenDetectionPanelProps {
  entries: SemanticHarEntry[];
}

export function TokenDetectionPanel({ entries }: TokenDetectionPanelProps) {
  return (
    <div className="p-4 border border-dashed border-gray-600 rounded-lg">
      <h3 className="text-lg font-semibold text-white">Token Detection Panel</h3>
      <p className="text-sm text-gray-400">
        Analyzed {entries.length} entries for tokens.
      </p>
      <p className="text-xs text-gray-500 mt-2">(This is a placeholder component)</p>
    </div>
  );
}
