const SEQUENZY_API_KEY = process.env.SEQUENZY_API_KEY || "seq_live_RQSo63tBEZaLO9COMRS6ukUbJRYzrx7RNVj1kCtbBwY";
const SEQUENZY_COMPANY_ID = "rz5aac72mjptv6jh7nmvkg2r";
const SEQUENCE_ID = "13d4649d72d64ba7be41087a";

async function inspectSequence() {
  console.log(`Inspecting Sequence ${SEQUENCE_ID}...`);

  try {
    const res = await fetch(`https://api.sequenzy.com/api/v1/sequences/${SEQUENCE_ID}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${SEQUENZY_API_KEY}`,
        "x-company-id": SEQUENZY_COMPANY_ID,
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();
    console.log("Sequence Details:", JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Error inspecting sequence:", err.message);
  }
}

inspectSequence();
