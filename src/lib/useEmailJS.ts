import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from './emailConfig';

export type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export function useEmailJS() {
  const [status, setStatus] = useState<FormStatus>('idle');

  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  async function send(templateId: string, params: Record<string, string>) {
    setStatus('sending');
    try {
      await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, templateId, params);
      setStatus('success');
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  }

  return { status, send };
}
