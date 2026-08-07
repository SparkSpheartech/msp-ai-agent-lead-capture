/**
 * Sequenzy Email Marketing API Utility Helper
 * Connects SPARKSPHEAR Next.js Server routes directly to Sequenzy API
 */

const SEQUENZY_API_KEY = process.env.SEQUENZY_API_KEY || "seq_live_RQSo63tBEZaLO9COMRS6ukUbJRYzrx7RNVj1kCtbBwY";
const SEQUENZY_COMPANY_ID = process.env.SEQUENZY_COMPANY_ID || "rz5aac72mjptv6jh7nmvkg2r";
const DEFAULT_LIST_ID = process.env.SEQUENZY_NEWSLETTER_LIST_ID || "wt2s569lvk6hsjvef0t8biuj";

/**
 * Adds or updates a subscriber in Sequenzy
 */
export async function addSequenzySubscriber({
  email,
  firstName = '',
  lastName = '',
  companyName = '',
  phone = '',
  tags = [],
  listId = DEFAULT_LIST_ID
}) {
  if (!email || !SEQUENZY_API_KEY) {
    console.warn("[Sequenzy] Missing email or SEQUENZY_API_KEY.");
    return { success: false, error: "Missing email or API key" };
  }

  const payload = {
    email: email.trim().toLowerCase(),
    ...(firstName && { firstName }),
    ...(lastName && { lastName }),
    ...(companyName && { companyName }),
    ...(phone && { phone }),
    ...(tags.length > 0 && { tags }),
    ...(listId && { listId })
  };

  try {
    const response = await fetch("https://api.sequenzy.com/v1/subscribers", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${SEQUENZY_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (response.ok) {
      console.log(`[Sequenzy] Successfully registered subscriber: ${email}`, data);
      return { success: true, data };
    } else {
      console.warn(`[Sequenzy] API returned status ${response.status}:`, data);
      return { success: false, status: response.status, data };
    }
  } catch (error) {
    console.error("[Sequenzy] Fetch error while pushing subscriber:", error.message);
    return { success: false, error: error.message };
  }
}

/**
 * Sends a transactional email through Sequenzy
 */
export async function sendSequenzyTransactionalEmail({
  to,
  subject,
  html,
  templateId
}) {
  if (!to || !SEQUENZY_API_KEY) {
    return { success: false, error: "Missing recipient or API key" };
  }

  const payload = {
    to: to.trim().toLowerCase(),
    ...(subject && { subject }),
    ...(html && { html }),
    ...(templateId && { templateId })
  };

  try {
    const response = await fetch("https://api.sequenzy.com/v1/send", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${SEQUENZY_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    return { success: response.ok, data };
  } catch (error) {
    console.error("[Sequenzy] Transactional email send error:", error.message);
    return { success: false, error: error.message };
  }
}
