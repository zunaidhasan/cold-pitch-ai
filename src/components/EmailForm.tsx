import React from 'react';
import { EmailFormData } from '../types';
import { Mail } from 'lucide-react';

interface EmailFormProps {
  onSubmit: (data: EmailFormData) => void;
  isLoading: boolean;
}

export const EmailForm: React.FC<EmailFormProps> = ({ onSubmit, isLoading }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: EmailFormData = {
      recipientName: formData.get('recipientName') as string,
      role: formData.get('role') as string,
      companyName: formData.get('companyName') as string,
      industry: formData.get('industry') as string,
      purpose: formData.get('purpose') as string,
      tone: formData.get('tone') as string,
      additionalContext: formData.get('additionalContext') as string,
    };
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="recipientName" className="block text-sm font-medium text-gray-700">
            Recipient's Name
          </label>
          <input
            type="text"
            name="recipientName"
            id="recipientName"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">
            Role/Title
          </label>
          <input
            type="text"
            name="role"
            id="role"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
            Industry/Niche
          </label>
          <input
            type="text"
            name="industry"
            id="industry"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>
      <div>
        <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">
          Purpose of Email
        </label>
        <select
          name="purpose"
          id="purpose"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Select a purpose...</option>
          <option value="product_pitch">Product Pitch</option>
          <option value="meeting_request">Meeting Request</option>
          <option value="partnership">Partnership Proposal</option>
          <option value="investment">Investment Opportunity</option>
          <option value="service_offering">Service Offering</option>
        </select>
      </div>
      <div>
        <label htmlFor="tone" className="block text-sm font-medium text-gray-700">
          Preferred Tone
        </label>
        <select
          name="tone"
          id="tone"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Select a tone...</option>
          <option value="friendly">Friendly</option>
          <option value="formal">Formal</option>
          <option value="persuasive">Persuasive</option>
          <option value="professional">Professional</option>
          <option value="enthusiastic">Enthusiastic</option>
        </select>
      </div>
      <div>
        <label htmlFor="additionalContext" className="block text-sm font-medium text-gray-700">
          Additional Context
        </label>
        <textarea
          name="additionalContext"
          id="additionalContext"
          rows={4}
          placeholder="Add any relevant details, LinkedIn URL, or custom notes..."
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Mail size={20} />
          <span>{isLoading ? 'Generating Emails...' : 'Generate Emails'}</span>
        </button>
      </div>
    </form>
  );
};