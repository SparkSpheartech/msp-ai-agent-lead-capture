export async function POST(request) {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    const { plan, email, name } = await request.json();

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'subscription',
            customer_email: email,
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: `SparkSphear ${plan} Plan`,
                    },
                    recurring: {
                        unit_amount: plan === 'Essentials' ? 19700 : plan === 'Growth' ? 49700 : 99700,
                    },
                    unit_amount: plan === 'Essentials' ? 19700 : plan === 'Growth' ? 49700 : 99700,
                },
                quantity: 1,
            }],
            success_url: 'https://sparkspheartechsolutions.com/success',
            cancel_url: 'https://sparkspheartechsolutions.com/pricing',
        });

        return Response.json({ url: session.url });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 400 });
    }
}