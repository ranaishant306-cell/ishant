import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY environment variable");
      return NextResponse.json({ error: "Email service is not configured" }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await req.json();
    const { name, email, whatsapp, videoType, budget, message, date, time } = body;

    if (!name || !email || !whatsapp || !videoType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "Pahadi Bhula Production <onboarding@resend.dev>", // apna verified domain lagao jab ready ho
      to: "darshanamehra650@gmail.com", // <-- yahan apna email daalo jaha booking aani chahiye
      replyTo: email,
      subject: `New Booking Request from ${name}`,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp/Call:</strong> ${whatsapp}</p>
        <p><strong>Type of Video:</strong> ${videoType}</p>
        <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
        <p><strong>Preferred Date:</strong> ${date}</p>
        <p><strong>Preferred Time:</strong> ${time || "Not specified"}</p>
        <p><strong>Message:</strong><br/>${message || "No message"}</p>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}