import {commonMethods} from "../common/CommonMethods";
import {careersSelectors} from "../data/selectors";
import {careersConstants} from "../data/constants";

export class Careers {
    clickOnSoftwareDevelopmentEngineerTest() {
        getIframeBody().find(careersSelectors.SENIOR_SOFTWARE_ENGINEER_IN_TEST).scrollIntoView();
        getIframeBody().find(careersSelectors.SENIOR_SOFTWARE_ENGINEER_IN_TEST).click();
    };

    clickOnApplyForThisPosition() {
        commonMethods.waitForDocumentToBeLoaded();
        getIframeBody().find(careersSelectors.APPLY_FOR_THIS_POSITION_BUTTON).scrollIntoView();
        getIframeBody().find(careersSelectors.APPLY_FOR_THIS_POSITION_BUTTON).click();
    };

    answerToFirstQuestions() {
        commonMethods.waitForDocumentToBeLoaded();
        getIframeBody().find(careersSelectors.YES_ANSWER).eq(0).click();
        getIframeBody().find(careersSelectors.YES_ANSWER).eq(1).click();
    };

    assertUserIsRedirectedToExpectedPage() {
        commonMethods.assertUserIsRedirectedToExpectedPage(careersConstants.CAREERS_URL);
    };

    clickOnContinue() {
        getIframeBody().find(careersSelectors.DIV).contains(careersConstants.CONTINUE).click();
    };

    selectGender() {
        getIframeBody().find(careersSelectors.GENDER).should('be.visible').click();
    };

    selectRace() {
        getIframeBody().find(careersSelectors.RACE).should('be.visible').click();
    };

    selectVeteranChoice() {
        getIframeBody().find(careersSelectors.VETERAN_CHOICE).should('be.visible').click();
    };

    insertFirstName() {
        getIframeBody().find(careersSelectors.FIRST_NAME).clear().type(careersConstants.FIRST_NAME_TEXT);
    };

    insertLastName() {
        getIframeBody().find(careersSelectors.LAST_NAME).clear().type(careersConstants.LAST_NAME_TEXT);
    };

    clickOnSubmit() {
        getIframeBody().find(careersSelectors.SUBMIT).contains(careersConstants.SUBMIT_TEXT).click({force: true});
    };

    getEmailFieldHtmlError() {
        getIframeBody().find(careersSelectors.EMAIL_FIELD).invoke('prop', 'validationMessage')
            .then($el => {
                const x = $el.toString()
                cy.wrap(x).as('y')
                if (x.includes('out')) {
                    cy.get('@y').should('contain', careersConstants.PLEASE_FILL_OUT_THIS_FIELD_MESSAGE)
                } else {
                    cy.get('@y').should('contain', careersConstants.PLEASE_FILL_IN_THIS_FIELD_MESSAGE)
                };
            })
    };

    navigateToPersonalInformationPage() {
        this.answerToFirstQuestions();
        this.clickOnContinue();
        commonMethods.waitForDocumentToBeLoaded();
        this.clickOnContinue();
        commonMethods.waitForDocumentToBeLoaded();
        this.selectGender();
        this.selectRace();
        this.clickOnContinue();
        commonMethods.waitForDocumentToBeLoaded();
        this.selectVeteranChoice();
        this.clickOnContinue();
        commonMethods.waitForDocumentToBeLoaded();
        this.clickOnContinue();
        commonMethods.waitForDocumentToBeLoaded();
    };
}

const getIframeDocument = () => {
    return cy
        .get('#gnewtonIframe')
        .its('0.contentDocument').should('exist')
};

const getIframeBody = () => {
    return getIframeDocument()
        .its('body').should('not.be.undefined')
        .then(cy.wrap)
};

export const careersPage = new Careers();
