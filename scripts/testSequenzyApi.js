const SEQUENZY_API_KEY = process.env.SEQUENZY_API_KEY || "seq_live_RQSo63tBEZaLO9COMRS6ukUbJRYzrx7RNVj1kCtbBwY";
const SEQUENZY_COMPANY_ID = process.env.SEQUENZY_COMPANY_ID || "rz5aac72mjptv6jh7nmvkg2r";

async function testSequenzyAPI() {
  console.log("Testing Sequenzy Email Marketing API lists & templates...");
  
  try {
    const resLists = await fetch("https://api.sequenzy.com/api/v1/lists", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${SEQUENZY_API_KEY}`,
        "x-company-id": SEQUENZY_COMPANY_ID,
        "Content-Type": "application/json"
      }
    });
    const listsData = await resLists.json();
    console.log("Lists Status:", resLists.status, JSON.stringify(listsData, null, 2));

    const resTemplates = await fetch("https://api.sequenzy.com/api/v1/templates", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${SEQUENZY_API_KEY}`,
        "x-company-id": SEQUENZY_COMPANY_ID,
        "Content-Type": "application/json"
      }
    });
    const templatesData = await resTemplates.json();
    console.log("Templates Status:", resTemplates.status, JSON.stringify(templatesData, null, 2));

  } catch (err) {
    console.error("Sequenzy API Error:", err.message);
  }
}

testSequenzyAPI();
