/**
 * PostHog Server-Side Analytics
 * Sends events from Vercel backend to self-hosted PostHog instance.
 *
 * Environment variables:
 *   POSTHOG_HOST      — Base URL of the PostHog instance
 *                       (e.g. https://posthog.example.com or http://localhost:8000)
 *   POSTHOG_API_KEY   — Project API key from PostHog project settings
 *                       (e.g. phc_xxxxxxxxxxxxxxxxxxxxxxxxxx)
 *   POSTHOG_ENABLED   — Set to 'true' to enable sending events (default: false)
 */

const POSTHOG_HOST = process.env.POSTHOG_HOST || 'http://localhost:8000';
const POSTHOG_API_KEY = process.env.POSTHOG_API_KEY || 'phc_D4sY85WSJzg569vB8XSRrubTLG55kbibBoCipDDZ5Kco';
const POSTHOG_ENABLED = process.env.POSTHOG_ENABLED === 'true';

/**
 * Capture a PostHog event from the server side.
 *
 * @param {string} event      — Event name (e.g. 'lead_captured', 'page_viewed')
 * @param {object} properties — Key-value properties for the event
 * @param {string} distinctId — Unique identifier for the user/session
 * @returns {Promise<boolean>} — Whether the event was sent successfully
 */
export async function captureEvent(event, properties = {}, distinctId = 'anonymous') {
  if (!POSTHOG_ENABLED) {
    console.debug(`[PostHog] Skipping event "${event}" — POSTHOG_ENABLED is not set to "true"`);
    return false;
  }

  if (!POSTHOG_API_KEY || !POSTHOG_HOST) {
    console.warn('[PostHog] Missing POSTHOG_API_KEY or POSTHOG_HOST');
    return false;
  }

  const payload = {
    api_key: POSTHOG_API_KEY,
    event,
    properties: {
      distinct_id: distinctId,
      ...properties,
    },
    timestamp: new Date().toISOString(),
  };

  try {
    const response = await fetch(`${POSTHOG_HOST}/capture/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error(`[PostHog] Event "${event}" failed: ${response.status} ${response.statusText}`);
      return false;
    }

    console.debug(`[PostHog] Event "${event}" captured successfully`);
    return true;
  } catch (error) {
    console.error(`[PostHog] Event "${event}" error:`, error.message);
    return false;
  }
}