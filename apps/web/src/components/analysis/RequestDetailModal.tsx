import React from 'react';
import type { SemanticHarEntry } from '@har2lolicode/parser';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface RequestDetailModalProps {
  entry: SemanticHarEntry | null;
  isOpen: boolean;
  onClose: () => void;
  index: number;
}

export function RequestDetailModal({ entry, isOpen, onClose, index }: RequestDetailModalProps) {
  if (!entry) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black border-gold-primary text-white">
        <DialogHeader>
          <DialogTitle>Request Details ({index})</DialogTitle>
          <DialogDescription>
            {entry.request.method} {entry.request.url}
          </DialogDescription>
        </DialogHeader>
        <div className="p-4 border border-dashed border-gray-600 rounded-lg mt-4">
            <p className="text-xs text-gray-500">(This is a placeholder component)</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
