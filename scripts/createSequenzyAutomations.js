const SEQUENZY_API_KEY = process.env.SEQUENZY_API_KEY || "seq_live_RQSo63tBEZaLO9COMRS6ukUbJRYzrx7RNVj1kCtbBwY";
const SEQUENZY_COMPANY_ID = process.env.SEQUENZY_COMPANY_ID || "rz5aac72mjptv6jh7nmvkg2r";

const sequencesToCreate = [
  {
    name: "Side A: Soap Opera Nurture Sequence",
    description: "Automated 5-part email nurture sequence for DIY software stack leads",
    trigger: {
      type: "tag_added",
      tag: "newsletter-subscriber"
    },
    listId: "wt2s569lvk6hsjvef0t8biuj"
  },
  {
    name: "Side B: Master Audit Onboarding Sequence",
    description: "High-ticket onboarding sequence for DFY Master IT Audit leads",
    trigger: {
      type: "tag_added",
      tag: "master-audit-lead"
    },
    listId: "lkdvrxsqeji1sfzxkgb2l67q"
  }
];

async function createAutomatedSequences() {
  console.log("Creating Sequenzy Automated Sequences...");

  for (const s of sequencesToCreate) {
    try {
      const res = await fetch("https://api.sequenzy.com/api/v1/sequences", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${SEQUENZY_API_KEY}`,
          "x-company-id": SEQUENZY_COMPANY_ID,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: s.name,
          description: s.description,
          targetListId: s.listId
        })
      });

      const data = await res.json();
      console.log(`[Sequence Created] "${s.name}" - Status: ${res.status}`);
      console.log(data);
    } catch (err) {
      console.error(`Error creating sequence "${s.name}":`, err.message);
    }
  }
}

createAutomatedSequences();
