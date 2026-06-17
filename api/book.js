const VALID_SERVICES = [
  'Web Development',
  'Custom Software',
  'SEO & Google Business',
  'Digital Ads',
  'Automation & AI',
  'CRM & Customer Lifecycle',
  'Cloud, Hosting & Support',
  'Hotel Solutions',
  'Not sure yet',
];

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://apexionlabs.tech');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed. Use POST.' });

  const { name, phone, service, message } = req.body || {};

  if (!name || !phone || !service) {
    return res.status(400).json({
      error: 'Missing required fields.',
      required: { name: 'string', phone: 'Nepal number e.g. 98XXXXXXXX', service: 'one of services[]' },
      optional: { message: 'string' },
      services: VALID_SERVICES,
    });
  }

  if (!VALID_SERVICES.includes(service)) {
    return res.status(400).json({ error: 'Invalid service.', services: VALID_SERVICES });
  }

  const waLink = `https://wa.me/9779703901454?text=${encodeURIComponent(
    `Hi, I'd like to book a free consultation.\nName: ${name}\nPhone: ${phone}\nService: ${service}${message ? `\nDetails: ${message}` : ''}`
  )}`;

  const key = process.env.WEB3FORMS_KEY;

  if (!key) {
    return res.status(200).json({
      ok: true,
      message: 'Booking received. Apexion team will contact via WhatsApp within 24 hours.',
      whatsapp: waLink,
    });
  }

  try {
    const upstream = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: key,
        subject: `Consultation booking: ${service} — ${name}`,
        from_name: 'Apexion AI Booking',
        name,
        phone,
        service,
        message: message || '',
      }),
    });

    const data = await upstream.json();

    if (data.success) {
      return res.status(200).json({
        ok: true,
        message: 'Booking submitted. Apexion team will contact via WhatsApp within 24 hours.',
        whatsapp: waLink,
      });
    }

    return res.status(502).json({ error: 'Upstream submission failed.', details: data });
  } catch (err) {
    return res.status(500).json({ error: 'Internal error.', details: err.message });
  }
}
