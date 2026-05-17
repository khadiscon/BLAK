// ─── EmailJS Configuration ────────────────────────────────────────────────────
// Sign up free at https://www.emailjs.com/ then replace these values.
// Dashboard → Email Services → Add Service  (Gmail, Outlook, etc.) → copy Service ID
// Dashboard → Email Templates → Create Template → copy Template IDs
// Dashboard → Account → copy Public Key

export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'YOUR_EMAILJS_PUBLIC_KEY',   // Account → General → Public Key

  SERVICE_ID: 'service_mf4ablh',

  // Template for the Contact Us form
  CONTACT_TEMPLATE_ID: 'YOUR_CONTACT_TEMPLATE_ID',

  // Template for Career / job applications
  CAREER_TEMPLATE_ID: 'YOUR_CAREER_TEMPLATE_ID',

  // Template for Newsletter signups (can be same as contact or a new one)
  NEWSLETTER_TEMPLATE_ID: 'YOUR_NEWSLETTER_TEMPLATE_ID',
};

// ─── Real contact details ──────────────────────────────────────────────────────
export const CONTACT_INFO = {
  email: 'info@blakmoh.com',
  emailClinical: 'intake@blakmoh.com',
  phone: '+234 (0) 703 005 2021',
  phoneRaw: '+2347030052021',
  address: '1st Floor, 30/32 Lagos Abeokuta Expressway, Cement Bus Stop, Lagos',
  addressMapUrl:
    'https://www.google.com/maps/search/?api=1&query=30+Lagos+Abeokuta+Expressway+Cement+Bus+Stop+Lagos',
  whatsapp: 'https://wa.me/2347030052021',
};

// ─── Social media links ────────────────────────────────────────────────────────
// Update these URLs with the confirmed handles for BlakMoh Consulting.
export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/blakmohconsulting',
  linkedin: 'https://www.linkedin.com/company/blakmoh-consulting',
  twitter: 'https://twitter.com/blakmohconsult',
  instagram: 'https://www.instagram.com/blakmohconsulting',
  youtube: 'https://www.youtube.com/@blakmoh',
};
