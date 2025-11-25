import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

async function sendVerificationEmail(to, userId) {
  const verifyUrl = `${process.env.APP_BASE_URL}/api/auth/verify-email?id=${userId}`;

  const html = `
    <div style="font-family:sans-serif; line-height:1.5;">
      <h2>Verify your email address</h2>
      <p>Click the button below to verify your email:</p>
      <a href="${verifyUrl}" style="background:#4f46e5; color:white; padding:10px 16px; border-radius:6px; text-decoration:none;">Verify Email</a>
      <p>If the button doesn't work, copy this link:</p>
      <p>${verifyUrl}</p>
    </div>
  `;

  await resend.emails.send({
    from: "Chatify <onboarding@resend.dev>", // must be verified domain/sender in Resend
    to,
    subject: "Verify your email",
    html,
  });
}

export default sendVerificationEmail;
