let careersSelectors = {
    SENIOR_SOFTWARE_ENGINEER_IN_TEST: "[ns-qa='Software Development Engineer in Test']",
    APPLY_FOR_THIS_POSITION_BUTTON: "#gnewtonJobDescriptionBtn .gnewtonBlueBtn",
    YES_ANSWER: ".gnewtonQuestionWrapper .gnewtonYes",
    DIV: "div",
    GENDER: "#genderUnknown",
    RACE: "#race-8",
    VETERAN_CHOICE: "#not-identify",
    FIRST_NAME: "#firstName",
    LAST_NAME: "#lastName",
    SUBMIT: "#submitText",
    EMAIL_FIELD: "[ns-qa='Email'] #email"
};

let homepageSelectors = {
    CAREERS: "#custom_html-4 ul li:nth-child(2) .submenu__link-caption",
    CAREER_REMOVE_TARGET: "#custom_html-4 ul li:nth-child(2) a"
};

module.exports = {
    careersSelectors, homepageSelectors
};