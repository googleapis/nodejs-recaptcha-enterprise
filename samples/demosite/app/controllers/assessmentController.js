const {createAssessment} = require('../recaptcha/createAssessment');

const assessmentController = async (req, res) => {
    try {
        await createAssessment(
            process.env.GOOGLE_CLOUD_PROJECT,
            req.body.recaptcha_cred,
        );
    } catch(e) {
        console.log(e);
    }

    return {}
}

module.exports = {
    assessmentController,
};
