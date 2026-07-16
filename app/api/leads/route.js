import { NextRequest, NextResponse } from 'next/server';

// Salesforce configuration - add these to Netlify environment variables
const SF_CONFIG = {
  loginUrl: 'https://login.salesforce.com/services/oauth2/token',
  clientId: process.env.SALESFORCE_CONSUMER_KEY,
  clientSecret: process.env.SALESFORCE_CLIENT_SECRET,
  username: process.env.SALESFORCE_USERNAME,
  password: process.env.SALESFORCE_PASSWORD,
  securityToken: process.env.SALESFORCE_SECURITY_TOKEN
};

// In-memory lead store (replace with database when scaled)
const leads = [];

export async function GET() {
  return NextResponse.json({
    leads,
    count: leads.length,
    config: {
      hasCredentials: !!SF_CONFIG.clientId,
      endpoint: '/api/leads',
      method: 'POST with JSON body: {Business_Name, Phone, Product_Fit, ...}'
    }
  });
}

export async function POST(request) {
  try {
    const data = await request.json();
    
    const lead = {
      id: Date.now().toString(),
      company: data.Business_Name || data.company,
      phone: data.Phone || data.phone,
      website: data.Website || data.website,
      productFit: data.Product_Fit || data.Product_Fit__c,
      sizeEstimate: data.Size_Estimate || data.Business_Size__c,
      notes: data.Notes || '',
      status: data.Status || 'New',
      source: data.Lead_Source || 'Website',
      nextAction: data.Next_Activity || '',
      activityDate: data.Activity_Date || '',
      createdAt: new Date().toISOString()
    };
    
    // Validate
    if (!lead.company) {
      return NextResponse.json({ error: 'Business_Name is required' }, { status: 400 });
    }
    
    leads.push(lead);
    
    // TODO: Implement Salesforce OAuth2 once Connected App is active
    // await syncToSalesforce(lead);
    
    return NextResponse.json({
      status: 'success',
      message: 'Lead captured successfully',
      lead,
      next: 'Add SALESFORCE_* env vars to Netlify for auto-sync to Salesforce'
    });
  } catch (error) {
    return NextResponse.json({ 
      error: error.message || 'Failed to process lead' 
    }, { status: 400 });
  }
}