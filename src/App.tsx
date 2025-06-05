import React, { useState } from 'react';
import { EmailForm } from './components/EmailForm';
import { EmailResult } from './components/EmailResult';
import { LoadingSpinner } from './components/LoadingSpinner';
import { Sparkles, Mail } from 'lucide-react';
import type { EmailFormData, EmailVariation } from './types';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [emails, setEmails] = useState<EmailVariation[]>([]);

  const handleSubmit = async (data: EmailFormData) => {
    setIsLoading(true);
    try {
      // Simulated API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 2000));
      const mockEmails: EmailVariation[] = [
        {
          subject: `Let's explore how ${data.companyName} can benefit from our solution`,
          body: `Hi ${data.recipientName},\n\nI noticed your impressive work as ${data.role} at ${data.companyName} in the ${data.industry} space. I believe our solution could help streamline your operations and drive significant results.\n\nWould you be open to a brief discussion about how we can help?`,
          cta: 'How does your calendar look next week for a 15-minute chat?'
        },
        {
          subject: `Quick question about ${data.companyName}'s ${data.industry} initiatives`,
          body: `Hi ${data.recipientName},\n\nYour recent achievements at ${data.companyName} caught my attention, particularly your focus on ${data.industry} innovation. I'd love to share how our platform has helped similar companies achieve their goals.\n\nAre you currently exploring solutions in this area?`,
          cta: 'Would you be interested in seeing a quick demo?'
        },
        {
          subject: `${data.recipientName}, let's connect about ${data.industry} opportunities`,
          body: `Hi ${data.recipientName},\n\nAs a leader in ${data.industry}, ${data.companyName} is clearly committed to excellence. I've helped several companies in similar positions enhance their capabilities and would love to explore potential synergies.\n\nWould you be interested in learning more?`,
          cta: 'How about a brief call to discuss this further?'
        }
      ];
      setEmails(mockEmails);
    } catch (error) {
      console.error('Error generating emails:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mail className="w-8 h-8 text-blue-600" />
            <Sparkles className="w-6 h-6 text-yellow-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">PitchAI</h1>
          <p className="text-lg text-gray-600">Generate personalized cold emails in seconds</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <EmailForm onSubmit={handleSubmit} isLoading={isLoading} />
        </div>

        {isLoading && (
          <div className="text-center py-12">
            <LoadingSpinner />
            <p className="mt-4 text-gray-600">Crafting your perfect emails...</p>
          </div>
        )}

        {!isLoading && emails.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Generated Emails</h2>
            {emails.map((variation, index) => (
              <EmailResult key={index} variation={variation} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;