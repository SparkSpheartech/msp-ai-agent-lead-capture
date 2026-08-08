const SEQUENZY_API_KEY = process.env.SEQUENZY_API_KEY || "seq_live_RQSo63tBEZaLO9COMRS6ukUbJRYzrx7RNVj1kCtbBwY";
const SEQUENZY_COMPANY_ID = "rz5aac72mjptv6jh7nmvkg2r";
const SEQUENCE_ID = "7ed1d325f036448baa2e2b1d";

async function addNode(payload) {
  try {
    const res = await fetch(`https://api.sequenzy.com/api/v1/sequences/${SEQUENCE_ID}/nodes`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${SEQUENZY_API_KEY}`,
        "x-company-id": SEQUENZY_COMPANY_ID,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    console.log(`Add Node (${payload.nodeType}):`, res.status, data);
    return data;
  } catch (err) {
    console.error("Error adding node:", err.message);
  }
}

async function run() {
  // Add Email Step 1 (Audit Welcome)
  await addNode({
    nodeType: "action_email",
    emailId: "9698fdf0f07e44708ac6baf4"
  });

  // Add Delay Step 2 (24 Hours)
  await addNode({
    nodeType: "delay",
    delayMinutes: 1440
  });

  // Add Email Step 3 (Referral & Case Study)
  await addNode({
    nodeType: "action_email",
    emailId: "90f889481d3d43cb94ff47a7"
  });
}

run();
