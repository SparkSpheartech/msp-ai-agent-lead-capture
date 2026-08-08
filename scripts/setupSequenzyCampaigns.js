const SEQUENZY_API_KEY = process.env.SEQUENZY_API_KEY || "seq_live_RQSo63tBEZaLO9COMRS6ukUbJRYzrx7RNVj1kCtbBwY";
const SEQUENZY_COMPANY_ID = process.env.SEQUENZY_COMPANY_ID || "rz5aac72mjptv6jh7nmvkg2r";

const templatesToCreate = [
  {
    name: "Soap Opera Email 1 - The High-Ticket Epiphany",
    subject: "[Hook] 15 Hours Saved per Employee? Here is the Exact HVAC Tech Stack",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #18181b; line-height: 1.6;">
        <h2 style="color: #65a30d; font-size: 24px; font-weight: bold;">Want to know the dirty secret of scaling a 5-truck trade business?</h2>
        <p>It’s not working 80 hours a week or chasing down unbilled quotes.</p>
        <p>Three years ago, an HVAC owner came to us losing <strong>$4,200/month</strong> purely to missed incoming dispatch calls and delayed PDF invoices.</p>
        <p>Here’s the exact 2-part software stack that turned his operations around in 14 days:</p>
        <div style="background-color: #f4f4f5; padding: 16px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; font-weight: bold; color: #18181b;">1. ServiceTitan (Dispatch Automation)</p>
          <p style="margin: 4px 0 0 0; color: #52525b; font-size: 14px;">Automates dispatching & customer notifications instantly.</p>
        </div>
        <div style="background-color: #f4f4f5; padding: 16px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; font-weight: bold; color: #18181b;">2. Housecall Pro (Field Quote Mobile App)</p>
          <p style="margin: 4px 0 0 0; color: #52525b; font-size: 14px;">Allows techs to close $3,500 replacement jobs on-site.</p>
        </div>
        <p style="margin-top: 24px;">
          <a href="https://sparkspheartechsolutions.com/guides/hvac" style="background-color: #84cc16; color: #09090b; padding: 12px 24px; border-radius: 6px; font-weight: bold; text-decoration: none; display: inline-block;">
            Read the Full HVAC Stack Guide →
          </a>
        </p>
        <hr style="border: none; border-top: 1px solid #e4e4e7; margin: 32px 0;" />
        <p style="font-size: 12px; color: #71717a;">SPARKSPHEAR Tech Solutions | Automation Architects & Tech Curators</p>
      </div>
    `
  },
  {
    name: "Side B Agency - High Ticket Audit Welcome",
    subject: "Your $2,997 Onboarding Fee Waived + Master IT Audit Next Steps",
    html: `
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
    `
  },
  {
    name: "Endless Chain Referral Email - Shaklee Model",
    subject: "Earn $500 for Every HVAC or Contractor Friend You Refer",
    html: `
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
    `
  },
  {
    name: "Seinfeld Broadcast #1 - Software Stack Analysis",
    subject: "Why 5-Truck HVAC Companies Are Ditching Old Software in 2026",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #18181b; line-height: 1.6;">
        <h2 style="color: #65a30d; font-size: 24px; font-weight: bold;">The $4,000/mo Leak in Field Operations</h2>
        <p>Most field service owners think they have a sales problem.</p>
        <p>In 9 out of 10 audits we conduct, they actually have an <strong>admin leak problem</strong>.</p>
        <p>When dispatch calls take 4 minutes to log instead of 30 seconds, your team loses 18 hours every single week.</p>
        <p style="margin-top: 24px;">
          <a href="https://sparkspheartechsolutions.com/tools" style="background-color: #84cc16; color: #09090b; padding: 12px 24px; border-radius: 6px; font-weight: bold; text-decoration: none; display: inline-block;">
            Calculate Your Business Admin Leak →
          </a>
        </p>
        <hr style="border: none; border-top: 1px solid #e4e4e7; margin: 32px 0;" />
        <p style="font-size: 12px; color: #71717a;">SPARKSPHEAR Tech Solutions | Software Analytics</p>
      </div>
    `
  }
];

async function createTemplates() {
  console.log("Creating Sequenzy Email Templates...");

  for (const t of templatesToCreate) {
    try {
      const res = await fetch("https://api.sequenzy.com/api/v1/templates", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${SEQUENZY_API_KEY}`,
          "x-company-id": SEQUENZY_COMPANY_ID,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: t.name,
          subject: t.subject,
          html: t.html
        })
      });

      const data = await res.json();
      console.log(`[Template Created] "${t.name}" - Status: ${res.status}`);
      console.log(data);
    } catch (err) {
      console.error(`Error creating template "${t.name}":`, err.message);
    }
  }
}

createTemplates();
