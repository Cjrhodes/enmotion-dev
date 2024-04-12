import { NextResponse } from "next/server";
import { Resend } from "resend";

const client = new Resend('re_Tn3xe5hW_CGAMZtZXAoCHgPPfAy8sji6X'); // Your API key here
export async function POST(req: Request) {
  const { email, subject, message } = await req.json();

  try {
    await client.emails.send({
      from: "chrisxrhodes.enmotionfit.com",
      to: email,
      subject,
      html: message,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Error sending email" }, { status: 500 });
  }
}