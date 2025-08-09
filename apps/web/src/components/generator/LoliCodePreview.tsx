import React from 'react';
import { Button } from '@/components/ui/button';

interface LoliCodePreviewProps {
  code: string;
  onCopy: () => void;
  onDownload: () => void;
}

export function LoliCodePreview({ code, onCopy, onDownload }: LoliCodePreviewProps) {
  return (
    <div className="p-4 border border-dashed border-gray-600 rounded-lg">
      <h3 className="text-lg font-semibold text-white">LoliCode Preview</h3>
      <pre className="text-xs bg-black p-2 rounded-md h-72 overflow-auto my-2">
        {code || '// Generate code to see a preview'}
      </pre>
      <div className="flex gap-2">
        <Button onClick={onCopy} className="bg-gold-primary text-black">Copy</Button>
        <Button onClick={onDownload} className="bg-gray-600 text-white">Download</Button>
      </div>
      <p className="text-xs text-gray-500 mt-2">(This is a placeholder component)</p>
    </div>
  );
}
