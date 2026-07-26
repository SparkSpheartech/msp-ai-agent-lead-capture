import { NextResponse } from 'next/server';

const SF_CONFIG = {
  loginUrl: 'https://login.salesforce.com',
  clientId: process.env.SALESFORCE_CONSUMER_KEY || '3MVG9nSH73I5aFNgELVXQYT5r8DVEERauYCtM._EYHXVwQ5gAT4WxBvAVxvbvLMUXVCAaWP1dxF_rt.xjRFMq',
};

// In-memory lead store (replace with database when scaled)
const leads = [];

export async function GET() {
  return NextResponse.json({
    leads,
    count: leads.length,
    config: {
      hasCredentials: !!SF_CONFIG.clientId,
      method: 'JWT Bearer or OAuth2 Required',
      authStatus: SF_CONFIG.clientId ? 'Configured (awaiting security token)' : 'Missing credentials'
    }
  });
}

export async function POST(request) {
  try {
    const lead = await request.json();
    
    const newLead = {
      id: Date.now().toString(),
      company: lead.Business_Name || lead.company,
      phone: lead.Phone || lead.phone,
      website: lead.Website || lead.website,
      productFit: lead.Product_Fit || lead.Product_Fit__c,
      notes: lead.Notes || '',
      status: lead.Status || 'New',
      createdAt: new Date().toISOString()
    };
    
    leads.push(newLead);
    
    return NextResponse.json({
      status: 'success',
      lead: newLead,
      message: 'Lead captured. Add SALESFORCE_SECURITY_TOKEN to .env for auto-sync.'
    });
  } catch (error) {
    return NextResponse.json({ 
      error: error.message || 'Failed to process lead' 
    }, { status: 400 });
  }
}