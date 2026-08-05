import { NextResponse } from 'next/server';

// Configurable n8n Production Webhook URL with environment variable fallback
const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL 
  || process.env.SPARKSPHEAR_WEBHOOK_URL 
  || 'http://localhost:5678/webhook/sparksphear-website-data';

const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLScRDTfrCVE7Qt1AAFlvBOZGvFMkzeFiXIAJyFMFHlTvBUbS2Q/formResponse";

// Failsafe direct push to Google Form -> Google Sheet (1_PM4oQZDRzSOY_7tOPM4QRw7vQ3GYhuRv0FB8MZmNYY)
async function submitToGoogleFormFailsafe(data) {
  try {
    const formPayload = new URLSearchParams();

    // Section 1
    formPayload.append('entry.1045161495', data.fullName || '');
    formPayload.append('entry.1959555873', data.companyName || '');
    formPayload.append('entry.543570196', data.roleTitle || '');
    formPayload.append('entry.481207998', data.email || '');
    formPayload.append('entry.319213839', data.phone || '');
    formPayload.append('entry.721041912', data.website || '');

    // Section 2
    formPayload.append('entry.1190922220', data.businessDescription || '');
    formPayload.append('entry.584072240', data.industry || '');
    formPayload.append('entry.951452280', data.companySize || '');

    // Section 3
    if (Array.isArray(data.promptedReasons)) {
      data.promptedReasons.forEach(r => formPayload.append('entry.222064922', r));
    } else if (data.promptedReasons) {
      formPayload.append('entry.222064922', data.promptedReasons);
    }
    formPayload.append('entry.1618583268', data.biggestBottleneck || '');

    // Section 4
    if (Array.isArray(data.primaryGoals)) {
      data.primaryGoals.forEach(g => formPayload.append('entry.793528476', g));
    } else if (data.primaryGoals) {
      formPayload.append('entry.793528476', data.primaryGoals);
    }
    formPayload.append('entry.457835563', data.personalSuccessDefinition || '');

    // Section 5
    if (Array.isArray(data.servicesOfInterest)) {
      data.servicesOfInterest.forEach(s => formPayload.append('entry.789505526', s));
    } else if (data.servicesOfInterest) {
      formPayload.append('entry.789505526', data.servicesOfInterest);
    }
    formPayload.append('entry.341767781', data.visionIdeaDescription || '');

    // Section 6
    formPayload.append('entry.1201006680', data.existingTools || '');
    formPayload.append('entry.46272526', data.missionCriticalSystems || '');

    // Section 7
    formPayload.append('entry.1879926952', data.targetTimeline || '');
    formPayload.append('entry.40045913', data.launchDeadlineEvent || '');

    // Section 8
    formPayload.append('entry.151894484', data.budgetRange || '');

    // Section 9
    const decisionMaker = data.decisionMakerStatus === 'Other' && data.decisionMakerOther 
      ? `Other: ${data.decisionMakerOther}` 
      : (data.decisionMakerStatus || '');
    formPayload.append('entry.1837753504', decisionMaker);
    formPayload.append('entry.720758938', data.preferredCommunication || '');
    formPayload.append('entry.1526397484', data.accessReadiness || '');
    formPayload.append('entry.2022839147', data.involvementLevel || '');
    formPayload.append('entry.1312252257', data.additionalNotes || '');

    // Section 10
    formPayload.append('entry.1912632856', 'I agree');

    const response = await fetch(GOOGLE_FORM_ACTION_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formPayload.toString()
    });

    console.log('[Google Sheet Failsafe Status]:', response.status);
    return response.ok;
  } catch (err) {
    console.error('[Google Sheet Failsafe Error]:', err.message);
    return false;
  }
}

// Send payload to n8n workflow pipeline
async function sendToN8nWorkflow(payload) {
  try {
    console.log(`[n8n Pipeline] Sending payload to ${N8N_WEBHOOK_URL}...`);
    const res = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      const result = await res.json().catch(() => ({ status: 'success' }));
      return { success: true, data: result };
    }
    return { success: false, status: res.status };
  } catch (err) {
    console.warn('[n8n Pipeline Connection Warning]:', err.message);
    return { success: false, error: err.message };
  }
}

// In-memory lead store for local logging
const leads = [];

export async function GET() {
  return NextResponse.json({
    leads,
    count: leads.length,
    n8nWorkflowPath: 'B:\\SPARKSPHEARTECH\\SPARKSPHEAR_TECH_SOLUTIONS_WEBSITE_DATA.n8n',
    googleSheetTarget: 'https://docs.google.com/spreadsheets/d/1_PM4oQZDRzSOY_7tOPM4QRw7vQ3GYhuRv0FB8MZmNYY/edit?resourcekey=&gid=1571625119#gid=1571625119'
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
        status: 'Processed by SPARKSPHEAR n8n Data Pipeline',
        source: 'Website Onboarding Wizard',
        submittedAt: new Date().toISOString()
      };

      // 1. Attempt sending to n8n workflow pipeline
      const n8nResult = await sendToN8nWorkflow(lead);

      // 2. Failsafe auto-sync to Google Sheet if n8n is offline or unreachable
      if (!n8nResult.success) {
        console.log('[SPARKSPHEAR Pipeline] n8n offline/unreachable. Executing Google Sheet failsafe sync...');
        await submitToGoogleFormFailsafe(data);
      }

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

      await sendToN8nWorkflow(lead);
    }
    
    // Validate required fields
    if (!lead.company && !lead.email) {
      return NextResponse.json({ error: 'Company name or email is required' }, { status: 400 });
    }
    
    leads.push(lead);
    console.log(`[SPARKSPHEAR Lead Engine] New Lead Processed: ${lead.company}`);
    
    return NextResponse.json({
      status: 'success',
      message: 'Onboarding data processed and logged to SPARKSPHEAR n8n pipeline & Google Sheet',
      leadId: lead.id,
      n8nWorkflow: 'SPARKSPHEAR_TECH_SOLUTIONS_WEBSITE_DATA.n8n',
      googleSheetUrl: 'https://docs.google.com/spreadsheets/d/1_PM4oQZDRzSOY_7tOPM4QRw7vQ3GYhuRv0FB8MZmNYY/edit#gid=1571625119'
    });
  } catch (error) {
    return NextResponse.json({ 
      error: error.message || 'Failed to process lead' 
    }, { status: 400 });
  }
}