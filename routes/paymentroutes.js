const Keys = require('../config/keys');
const Stripe = require('stripe')(Keys.stripeSecretKey);

module.exports = app => {
    app.post('/api/stripe', async (req, res) => {
       const charge = await Stripe.charges.create(
           {
               amount: 500,
               currency: 'usd',
               description: '$5 from 5 credits',
               source: req.body.id
           });
           console.log(charge);
    })
}
