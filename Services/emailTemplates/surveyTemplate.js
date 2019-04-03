const keys = require('../../config/keys')

module.exports = (survey) => {
    return `
        <HTML>
            <body>
                <div style="text-align:center;">
                    <h3>We would like to hear from you!</h3>
                    <p>${survey.body}</p>
                    <div>
                        <a href ="${keys.redirectDomain}/api/surveys/thanks">YES</a>
                    </div>
                    <div>
                        <a href = "${keys.redirectDomain}/api/surveys/thanks">NO</a>
                    </div>
                </div>
            </body>
        </HTML>
    `;

};