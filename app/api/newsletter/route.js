import { NextResponse } from 'next/server';
import { addSequenzySubscriber } from '@/lib/sequenzy';

// Send payload to n8n workflow pipeline
async function sendToN8nWorkflow(payload) {
  const N8N_WEBHOOK_URL = process.env.N8N_NEWSLETTER_WEBHOOK_URL || 'http://localhost:5678/webhook/newsletter';
  
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
    const { email, source } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const payload = {
      email,
      timestamp: new Date().toISOString(),
      source: source || 'Website Newsletter Form'
    };

    const tags = source === 'Homepage Footer Newsletter' 
      ? ['newsletter-subscriber', 'homepage-subscriber', 'website-lead']
      : ['newsletter-subscriber', 'case-studies-unlocked', 'website-lead'];

    // 1. Push subscriber directly into Sequenzy Email Marketing Platform
    const sequenzyResult = await addSequenzySubscriber({
      email,
      tags,
      listId: process.env.SEQUENZY_NEWSLETTER_LIST_ID || 'wt2s569lvk6hsjvef0t8biuj'
    });

    // 2. Forward to n8n workflow fallback
    const n8nResult = await sendToN8nWorkflow(payload);
    
    if (!n8nResult.success) {
      console.warn('Newsletter subscription received but n8n webhook failed. Payload:', payload);
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed to newsletter',
        sequenzySynced: sequenzyResult.success
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
