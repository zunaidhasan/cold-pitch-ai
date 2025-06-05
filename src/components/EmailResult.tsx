import React from 'react';
import { EmailVariation } from '../types';
import { CopyButton } from './CopyButton';

interface EmailResultProps {
  variation: EmailVariation;
  index: number;
}

export const EmailResult: React.FC<EmailResultProps> = ({ variation, index }) => {
  const { subject, body, cta } = variation;
  const fullEmail = `Subject: ${subject}\n\n${body}\n\n${cta}`;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Variation {index + 1}</h3>
        <CopyButton text={fullEmail} />
      </div>
      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-medium text-gray-500">Subject Line</h4>
          <p className="text-gray-900">{subject}</p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-500">Email Body</h4>
          <p className="text-gray-900 whitespace-pre-wrap">{body}</p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-500">Call to Action</h4>
          <p className="text-gray-900">{cta}</p>
        </div>
      </div>
    </div>
  );
};