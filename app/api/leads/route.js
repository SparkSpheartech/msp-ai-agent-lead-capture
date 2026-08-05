import { NextResponse } from 'next/server';

// Salesforce configuration - add these to environment variables
const SF_CONFIG = {
  loginUrl: 'https://login.salesforce.com/services/oauth2/token',
  clientId: process.env.SALESFORCE_CONSUMER_KEY,
  clientSecret: process.env.SALESFORCE_CLIENT_SECRET,
  username: process.env.SALESFORCE_USERNAME,
  password: process.env.SALESFORCE_PASSWORD,
  securityToken: process.env.SALESFORCE_SECURITY_TOKEN
};

// In-memory lead store for development/testing
const leads = [];

export async function GET() {
  return NextResponse.json({
    leads,
    count: leads.length,
    config: {
      hasCredentials: !!SF_CONFIG.clientId,
      endpoint: '/api/leads',
      method: 'POST with JSON body'
    }
  });
}

export async function POST(request) {
  try {
    const data = await request.json();
    
    let lead = {};

    if (data.type === 'client_onboarding_form') {
      lead = {
        id: 'ONB-' + Date.now().toString(),
        type: 'client_onboarding_form',
        fullName: data.fullName,
        company: data.companyName,
        roleTitle: data.roleTitle,
        email: data.email,
        phone: data.phone,
        website: data.website || '',
        businessDescription: data.businessDescription || '',
        industry: data.industry || '',
        companySize: data.companySize || '',
        promptedReasons: data.promptedReasons || [],
        biggestBottleneck: data.biggestBottleneck || '',
        primaryGoals: data.primaryGoals || [],
        personalSuccessDefinition: data.personalSuccessDefinition || '',
        servicesOfInterest: data.servicesOfInterest || [],
        visionIdeaDescription: data.visionIdeaDescription || '',
        existingTools: data.existingTools || '',
        missionCriticalSystems: data.missionCriticalSystems || '',
        targetTimeline: data.targetTimeline || '',
        launchDeadlineEvent: data.launchDeadlineEvent || '',
        budgetRange: data.budgetRange || '',
        decisionMakerStatus: data.decisionMakerStatus || '',
        preferredCommunication: data.preferredCommunication || '',
        accessReadiness: data.accessReadiness || '',
        involvementLevel: data.involvementLevel || '',
        additionalNotes: data.additionalNotes || '',
        agreement: data.agreement || false,
        status: 'New Onboarding Submission',
        source: 'Website Onboarding Wizard',
        submittedAt: new Date().toISOString()
      };
    } else {
      lead = {
        id: 'LEAD-' + Date.now().toString(),
        type: 'contact_lead',
        company: data.Business_Name || data.companyName || data.company || 'N/A',
        fullName: data.Name || data.name || data.fullName || '',
        phone: data.Phone || data.phone || '',
        email: data.Email || data.email || '',
        website: data.Website || data.website || '',
        productFit: data.Product_Fit || data.productFit || '',
        sizeEstimate: data.Size_Estimate || data.companySize || '',
        notes: data.Notes || data.notes || '',
        status: data.Status || 'New',
        source: data.Lead_Source || 'Website Contact',
        submittedAt: new Date().toISOString()
      };
    }
    
    // Validate required company/email
    if (!lead.company && !lead.email) {
      return NextResponse.json({ error: 'Company name or email is required' }, { status: 400 });
    }
    
    leads.push(lead);
    console.log(`[SPARKSPHEAR Lead Engine] New Lead Received: ${lead.company} (${lead.type})`);
    
    return NextResponse.json({
      status: 'success',
      message: 'Lead/Onboarding payload captured successfully',
      leadId: lead.id,
      lead
    });
  } catch (error) {
    return NextResponse.json({ 
      error: error.message || 'Failed to process lead' 
    }, { status: 400 });
  }
}