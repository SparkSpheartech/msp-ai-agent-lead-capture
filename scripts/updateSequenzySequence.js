const SEQUENZY_API_KEY = process.env.SEQUENZY_API_KEY || "seq_live_RQSo63tBEZaLO9COMRS6ukUbJRYzrx7RNVj1kCtbBwY";
const SEQUENZY_COMPANY_ID = "rz5aac72mjptv6jh7nmvkg2r";
const SEQUENCE_ID = "7ed1d325f036448baa2e2b1d";

const email1Html = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #18181b; line-height: 1.6;">
    <h2 style="color: #65a30d; font-size: 24px; font-weight: bold;">Welcome to SPARKSPHEAR Tech Solutions</h2>
    <p>Thank you for submitting your Master IT Audit & System Evaluation inquiry.</p>
    <p>As promised, your <strong>$2,997 Onboarding Fee is 100% Waived</strong>. We only charge for actual outcome deployments.</p>
    <h3 style="font-size: 18px; color: #18181b; margin-top: 24px;">Our 90-Day Dream Outcome Guarantee:</h3>
    <p style="background-color: #ecfdf5; border-left: 4px solid #10b981; padding: 12px; font-weight: 500;">
      "We guarantee to eliminate at least 10 hours/week of admin drag per employee within 90 days of system deployment, or you don't pay a single cent."
    </p>
    <p style="margin-top: 24px;">
      <a href="https://sparkspheartechsolutions.com/services/it-audits" style="background-color: #84cc16; color: #09090b; padding: 12px 24px; border-radius: 6px; font-weight: bold; text-decoration: none; display: inline-block;">
        Review Your Master Audit Booking →
      </a>
    </p>
    <hr style="border: none; border-top: 1px solid #e4e4e7; margin: 32px 0;" />
    <p style="font-size: 12px; color: #71717a;">SPARKSPHEAR Tech Solutions | Shazaly Musa, Lead Architect</p>
  </div>
`;

const email2Html = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #18181b; line-height: 1.6;">
    <h2 style="color: #65a30d; font-size: 24px; font-weight: bold;">Preparing for Your Master IT System Audit</h2>
    <p>Hi there,</p>
    <p>To ensure we get maximum revenue impact during your upcoming Master IT Audit, please have these 3 key items ready or accessible:</p>
    <ol style="padding-left: 20px;">
      <li><strong>Current Phone System & Call Logs:</strong> Average weekly missed calls or voicemail export.</li>
      <li><strong>Primary Field / Service Software:</strong> (ServiceTitan, Jobber, Housecall Pro, or custom CRM).</li>
      <li><strong>Invoicing & Dispatch Workflow:</strong> Current quote-to-paid timeframe.</li>
    </ol>
    <p style="margin-top: 24px;">
      <a href="https://sparkspheartechsolutions.com/services/it-audits" style="background-color: #84cc16; color: #09090b; padding: 12px 24px; border-radius: 6px; font-weight: bold; text-decoration: none; display: inline-block;">
        Access Your Audit Dashboard →
      </a>
    </p>
    <hr style="border: none; border-top: 1px solid #e4e4e7; margin: 32px 0;" />
    <p style="font-size: 12px; color: #71717a;">SPARKSPHEAR Tech Solutions | System Diagnostic Operations</p>
  </div>
`;

const email3Html = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #18181b; line-height: 1.6;">
    <h2 style="color: #65a30d; font-size: 24px; font-weight: bold;">Know another business owner losing money to admin work?</h2>
    <p>When you introduce SPARKSPHEAR Tech Solutions to another business owner in HVAC, Waste Management, or Contracting, both of you win:</p>
    <ul>
      <li><strong>They get:</strong> Free $2,997 Onboarding + Full System Audit</li>
      <li><strong>You get:</strong> $500 Cash Reward or $500 Software Credit for every successful deployment.</li>
    </ul>
    <p style="margin-top: 24px;">
      <a href="https://sparkspheartechsolutions.com/guides" style="background-color: #84cc16; color: #09090b; padding: 12px 24px; border-radius: 6px; font-weight: bold; text-decoration: none; display: inline-block;">
        Share SPARKSPHEAR Guides & Earn →
      </a>
    </p>
    <hr style="border: none; border-top: 1px solid #e4e4e7; margin: 32px 0;" />
    <p style="font-size: 12px; color: #71717a;">SPARKSPHEAR Tech Solutions Peer Referral Program</p>
  </div>
`;

async function updateSequenceSteps() {
  console.log(`Inserting sequence steps into ${SEQUENCE_ID}...`);

  const payload = {
    confirmStructuralChange: true,
    insertSteps: {
      steps: [
        {
          type: "email",
          subject: "Your $2,997 Onboarding Fee Waived + Master IT Audit Next Steps",
          html: email1Html
        },
        {
          type: "delay",
          delayMs: 86400000
        },
        {
          type: "email",
          subject: "Quick Prep Before Your Master IT Audit (3 Key System Access Items)",
          html: email2Html
        },
        {
          type: "delay",
          delayMs: 172800000
        },
        {
          type: "email",
          subject: "How a 5-Truck HVAC Company Reclaimed 18 Hours/Week (+ $500 Referral Bonus)",
          html: email3Html
        }
      ]
    }
  };

  try {
    const res = await fetch(`https://api.sequenzy.com/api/v1/sequences/${SEQUENCE_ID}`, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${SEQUENZY_API_KEY}`,
        "x-company-id": SEQUENZY_COMPANY_ID,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    console.log("Update Sequence Result:", res.status, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Error updating sequence:", err.message);
  }
}

updateSequenceSteps();
