import { NextResponse } from 'next/server';

// Send payload to n8n workflow pipeline
async function sendToN8nWorkflow(payload) {
  // Using localhost for n8n if hosted on the same server, or a production webhook URL
  // You can change this URL to your production n8n webhook URL
  const N8N_WEBHOOK_URL = 'http://localhost:5678/webhook/newsletter';
  
  try {
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    
    return { success: response.ok, status: response.status };
  } catch (error) {
    console.error('Error sending to n8n webhook:', error.message);
    return { success: false, error: error.message };
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Add timestamp
    const payload = {
      email,
      timestamp: new Date().toISOString(),
      source: 'Website Newsletter Form'
    };

    // Forward to n8n workflow
    const n8nResult = await sendToN8nWorkflow(payload);
    
    // Even if n8n is down, we return success to the user so they don't see an error,
    // but in a real prod app you might want to queue it or save to a local DB.
    if (!n8nResult.success) {
      console.warn('Newsletter subscription received but n8n webhook failed. Payload:', payload);
      // For now, we'll still return success to the frontend
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed to newsletter',
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process newsletter subscription' },
      { status: 500 }
    );
  }
}
