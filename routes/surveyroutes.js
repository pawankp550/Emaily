const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const requireCredits = require('../middleware/requireCredits');
const Mailer = require('../Services/mailer');
const surveyTemplate = require('../Services/emailTemplates/surveyTemplate');
const Survey = mongoose.model('surveys');


module.exports = app => {
    app.get('/api/surveys/thanks', (req,res) => {
            res.send('Thanks for the response :)')
    });

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
       try{
            await mailer.send();
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();
            req.send(user);
        } catch(err){
            //req.status(422)
       }
    });
};