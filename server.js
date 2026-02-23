require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

// Your email where you'll receive contact form submissions
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "your-email@example.com";

// Resend requires a verified "from" address - use onboarding@resend.dev for testing
// or your verified domain for production
const FROM_EMAIL = process.env.FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

app.post("/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;
    const fullName = `${firstName || ""} ${lastName || ""}`.trim() || "Not provided";

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: CONTACT_EMAIL,
      subject: "Contact Form Submission - Portfolio",
      html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No message"}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(400).json({ code: 400, status: "Failed to send", error: error.message });
    }

    res.json({ code: 200, status: "Message Sent", id: data?.id });
  } catch (err) {
    console.error("Contact form error:", err);
    res.status(500).json({ code: 500, status: "Server error", error: err.message });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
