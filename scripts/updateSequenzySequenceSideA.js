const SEQUENZY_API_KEY = process.env.SEQUENZY_API_KEY || "seq_live_RQSo63tBEZaLO9COMRS6ukUbJRYzrx7RNVj1kCtbBwY";
const SEQUENZY_COMPANY_ID = "rz5aac72mjptv6jh7nmvkg2r";
const SEQUENCE_ID = "13d4649d72d64ba7be41087a";

const email1Html = `
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
`;

const email2Html = `
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
`;

const email3Html = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #18181b; line-height: 1.6;">
    <h2 style="color: #65a30d; font-size: 24px; font-weight: bold;">Why 5-Truck HVAC Companies Are Ditching Old Software in 2026</h2>
    <p>If you're running a 1-5 truck operation, giant enterprise software suites can actually slow you down.</p>
    <p>Here is how top-performing contractors choose their stack:</p>
    <ul>
      <li><strong>Solo Techs ($0-$150k):</strong> Kickserv or Jobber ($47/mo) — minimal overhead.</li>
      <li><strong>5-15 Trucks ($500k+):</strong> ServiceTitan + Housecall Pro — full automated dispatching.</li>
    </ul>
    <p style="margin-top: 24px;">
      <a href="https://sparkspheartechsolutions.com/guides" style="background-color: #84cc16; color: #09090b; padding: 12px 24px; border-radius: 6px; font-weight: bold; text-decoration: none; display: inline-block;">
        Explore All Industry Software Stacks →
      </a>
    </p>
    <hr style="border: none; border-top: 1px solid #e4e4e7; margin: 32px 0;" />
    <p style="font-size: 12px; color: #71717a;">SPARKSPHEAR Tech Solutions | Curated Tech Stack</p>
  </div>
`;

const email4Html = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #18181b; line-height: 1.6;">
    <h2 style="color: #65a30d; font-size: 24px; font-weight: bold;">Want Us to Build Your Automation Stack For You?</h2>
    <p>If you'd rather not waste weeks configuring dispatch software and API integrations yourself, let our team build it for you.</p>
    <p>We are offering a comprehensive <strong>$97 Master IT & Automation Audit</strong> (regularly $2,997):</p>
    <ul style="padding-left: 20px;">
      <li>Complete diagnostic of your phone, dispatch, and quote software</li>
      <li>15-20 hours/week admin time reduction blueprint</li>
      <li>90-Day Dream Outcome Guarantee</li>
    </ul>
    <p style="margin-top: 24px;">
      <a href="https://sparkspheartechsolutions.com/services/it-audits" style="background-color: #84cc16; color: #09090b; padding: 12px 24px; border-radius: 6px; font-weight: bold; text-decoration: none; display: inline-block;">
        Book Your $97 Master Audit Session →
      </a>
    </p>
    <hr style="border: none; border-top: 1px solid #e4e4e7; margin: 32px 0;" />
    <p style="font-size: 12px; color: #71717a;">SPARKSPHEAR Tech Solutions | Done-For-You Agency Services</p>
  </div>
`;

const email5Html = `
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
  console.log(`Inserting 5-part Soap Opera steps into ${SEQUENCE_ID}...`);

  const payload = {
    confirmStructuralChange: true,
    insertSteps: {
      steps: [
        {
          type: "email",
          subject: "[Hook] 15 Hours Saved per Employee? Here is the Exact HVAC Tech Stack",
          html: email1Html
        },
        {
          type: "delay",
          delayMs: 86400000 // 1 day
        },
        {
          type: "email",
          subject: "The $4,000/mo Leak in Field Operations (And How to Plug It)",
          html: email2Html
        },
        {
          type: "delay",
          delayMs: 172800000 // 2 days
        },
        {
          type: "email",
          subject: "Why 5-Truck HVAC Companies Are Ditching Old Software in 2026",
          html: email3Html
        },
        {
          type: "delay",
          delayMs: 259200000 // 3 days
        },
        {
          type: "email",
          subject: "Want Us to Build Your Automation Stack For You? ($97 Master Audit)",
          html: email4Html
        },
        {
          type: "delay",
          delayMs: 345600000 // 4 days
        },
        {
          type: "email",
          subject: "Earn $500 for Every HVAC or Contractor Friend You Refer",
          html: email5Html
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

    // Enable sequence
    const enableRes = await fetch(`https://api.sequenzy.com/api/v1/sequences/${SEQUENCE_ID}/enable`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${SEQUENZY_API_KEY}`,
        "x-company-id": SEQUENZY_COMPANY_ID,
        "Content-Type": "application/json"
      }
    });

    const enableData = await enableRes.json();
    console.log("Enable Result:", enableRes.status, JSON.stringify(enableData, null, 2));

  } catch (err) {
    console.error("Error updating sequence:", err.message);
  }
}

updateSequenceSteps();
