import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2024-12-18',
});

export async function POST(request) {
    try {
        const { plan, email, name } = await request.json();

        const prices = {
            Essentials: 19700,
            Growth: 49700,
            Enterprise: 99700
        };

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'subscription',
            customer_email: email,
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: `SparkSphear ${plan} Plan`,
                        description: `${plan} AI Automation Services - Monthly`,
                    },
                    recurring: {
                        interval: 'month',
                    },
                    unit_amount: prices[plan] || 19700,
                },
                quantity: 1,
            }],
            success_url: 'https://sparkspheartechsolutions.com/success?plan=' + plan,
            cancel_url: 'https://sparkspheartechsolutions.com/pricing',
            metadata: {
                plan,
                name: name || '',
            },
        });

        return Response.json({ url: session.url });
    } catch (error) {
        console.error('Stripe error:', error);
        return Response.json({ error: error.message }, { status: 400 });
    }
}