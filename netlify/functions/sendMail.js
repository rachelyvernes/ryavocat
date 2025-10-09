import { Resend } from 'resend';

export default async (req, res) => {
  try {
    const body = JSON.parse(req.body);

    // 📩 Construire le contenu de l'email
    const fields = Object.entries(body)
      .map(([key, value]) => `<p><strong>${key} :</strong> ${value}</p>`)
      .join('');

    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: 'noreply@tonsite.com',    // ⚠️ doit être validé sur Resend
      to: 'contact@tonsite.com',
      subject: '📬 Nouveau message depuis le formulaire',
      html: `
        <h2>Nouveau message reçu</h2>
        ${fields}
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Erreur envoi email:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
};
