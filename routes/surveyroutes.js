const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const requireCredits = require('../middleware/requireCredits');
const Mailer = require('../Services/mailer');
const surveyTemplate = require('../Services/emailTemplates/surveyTemplate');
const Survey = mongoose.model('surveys');


module.exports = app => {
    app.post('/api/surveys',requireLogin, requireCredits, async (req, res) => {

        const {title, body, subject, recipients} = req.body;

        const survey = new Survey({
            title,
            body,
            subject,
            recipients: recipients.split(',').map(email => ({email : email.trim()})),
            _user: req.user.id,
            dateSent: Date.now()
        });

       const mailer = new Mailer(survey, surveyTemplate(survey)); 
       mailer.send();
    });
};