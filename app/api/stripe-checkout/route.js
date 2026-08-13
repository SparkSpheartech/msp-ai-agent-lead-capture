import Stripe from 'stripe';

const stripeKey = process.env.STRIPE_SECRET_KEY;
const stripe = stripeKey ? new Stripe(stripeKey, { apiVersion: '2024-12-18' }) : null;

const ALLOWED_PLANS = ['SIGNAL START', 'FLOW CONTROL', 'SYSTEM LIFT', 'SCALE CONTROL'];

const PRICE_IDS = {
  'SIGNAL START': process.env.STRIPE_PRICE_SIGNAL_START,
  'FLOW CONTROL': process.env.STRIPE_PRICE_FLOW_CONTROL,
  'SYSTEM LIFT': process.env.STRIPE_PRICE_SYSTEM_LIFT,
  'SCALE CONTROL': process.env.STRIPE_PRICE_SCALE_CONTROL,
};

export async function POST(request) {
  try {
    const { plan, email } = await request.json();

    if (!plan || !ALLOWED_PLANS.includes(plan)) {
      return Response.json({
        error: 'Unknown or missing plan',
        message: `Plan must be one of: ${ALLOWED_PLANS.join(', ')}`,
      }, { status: 400 });
    }

    if (!stripe) {
      return Response.json({
        error: 'Stripe not configured',
        fallback: `/contact?plan=${encodeURIComponent(plan)}`,
      }, { status: 503 });
    }

    const priceId = PRICE_IDS[plan];

    if (!priceId) {
      return Response.json({
        error: 'Stripe Price ID not configured for this plan',
        fallback: `/contact?plan=${encodeURIComponent(plan)}`,
      }, { status: 503 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      customer_email: email || undefined,
      line_items: [{
        price: priceId,
        quantity: 1,
      }],
      success_url: `https://sparkspheartechsolutions.com/success?plan=${encodeURIComponent(plan)}`,
      cancel_url: 'https://sparkspheartechsolutions.com/pricing',
      metadata: {
        packageName: plan,
        source: 'pricing-page',
      },
    });

    return Response.json({
      url: session.url,
      plan,
    });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return Response.json({
      error: error.message,
    }, { status: 400 });
  }
}