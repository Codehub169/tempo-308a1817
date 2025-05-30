import { NextRequest, NextResponse } from 'next/server';

// Basic email validation utility function
function validateEmail(email: string): boolean {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(String(email).toLowerCase());
}

interface ContactFormRequestBody {
  name: string;
  email: string;
  subject?: string; // Subject is optional
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as ContactFormRequestBody;
    const { name, email, subject, message } = body;

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ error: 'Name must be at least 2 characters long.' }, { status: 400 });
    }
    if (!email || typeof email !== 'string' || !validateEmail(email)) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
    }
    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json({ error: 'Message must be at least 10 characters long.' }, { status: 400 });
    }
    if (subject && (typeof subject !== 'string' || subject.trim().length > 100)) {
      return NextResponse.json({ error: 'Subject, if provided, must be a string and less than 100 characters.' }, { status: 400 });
    }

    // For MVP: Log the data. 
    // In a production application, this is where you would integrate an email sending service
    // (e.g., Resend, SendGrid, AWS SES) or a CRM integration.
    console.log('Contact form submission received:');
    console.log('Name:', name);
    console.log('Email:', email);
    if (subject) console.log('Subject:', subject);
    console.log('Message:', message);

    // TODO: Implement email sending logic here.
    // Example email sending call (pseudo-code):
    // await sendContactEmail({ name, email, subject, message });

    return NextResponse.json({ success: true, message: 'Thank you! Your message has been sent successfully.' });

  } catch (error) {
    console.error('Error processing contact form:', error);
    // Generic error for client, specific error logged server-side
    return NextResponse.json({ error: 'Sorry, there was an issue sending your message. Please try again later.' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  // Return a 405 Method Not Allowed response for GET requests
  return new NextResponse(
    JSON.stringify({ message: 'Method Not Allowed. Please use POST to submit contact information.' }),
    { status: 405, headers: { 'Content-Type': 'application/json', 'Allow': 'POST' } }
  );
}
