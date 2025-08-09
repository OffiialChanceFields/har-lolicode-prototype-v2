import React from 'react';
import type { SemanticHarEntry } from '@har2lolicode/parser';
import type { DependencyMatrix } from '@har2lolicode/analyzer';

interface RequestDataTableProps {
  entries: SemanticHarEntry[];
  onEntryClick: (entry: SemanticHarEntry, index: number) => void;
  dependencyMatrix: DependencyMatrix | null;
}

export function RequestDataTable({ entries, onEntryClick }: RequestDataTableProps) {
  return (
    <div className="p-4 border border-dashed border-gray-600 rounded-lg h-96 overflow-y-auto">
      <h3 className="text-lg font-semibold text-white">Request Data Table</h3>
      <p className="text-sm text-gray-400">
        Displaying {entries.length} requests.
      </p>
      <p className="text-xs text-gray-500 mt-2">(This is a placeholder component)</p>
      <ul className="mt-4">
        {entries.map((entry, index) => (
            <li key={entry.entryId} onClick={() => onEntryClick(entry, index)} className="cursor-pointer hover:bg-gray-800 p-2 rounded">
                {entry.request.method} {entry.request.url}
            </li>
        ))}
      </ul>
    </div>
  );
}
