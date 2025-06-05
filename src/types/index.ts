export interface EmailFormData {
  recipientName: string;
  role: string;
  companyName: string;
  industry: string;
  purpose: string;
  tone: string;
  additionalContext: string;
}

export interface EmailVariation {
  subject: string;
  body: string;
  cta: string;
}

export interface GeneratedEmails {
  variations: EmailVariation[];
}