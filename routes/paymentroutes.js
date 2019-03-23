const Keys = require('../config/keys');
const Stripe = require('stripe')(Keys.stripeSecretKey);
const requireLogin = require('../middleware/requireLogin');

module.exports = app => {
    app.post('/api/stripe',requireLogin ,async (req, res) => {
       
       const charge = await Stripe.charges.create(
           {
               amount: 500,
               currency: 'usd',
               description: '$5 from 5 credits',
               source: req.body.id
           });
           
           req.user.credits += 5;
           const user = await req.user.save();
           res.send(user);
    })
}
