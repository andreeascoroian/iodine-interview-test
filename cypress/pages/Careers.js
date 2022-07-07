import {commonMethods} from "../common/CommonMethods";
import {careersSelectors} from "../data/selectors";
import {careersConstants} from "../data/constants";

export class Careers {
    clickOnSoftwareDevelopmentEngineerTest() {
        getIframeBody().find(careersSelectors.SENIOR_SOFTWARE_ENGINEER_IN_TEST).scrollIntoView();
        getIframeBody().find(careersSelectors.SENIOR_SOFTWARE_ENGINEER_IN_TEST).click();
    };

    clickOnApplyForThisPosition() {
        commonMethods.waitForDocumentToBeLoaded('2244');
        getIframeBody().find(careersSelectors.APPLY_FOR_THIS_POSITION_BUTTON).scrollIntoView();
        getIframeBody().find(careersSelectors.APPLY_FOR_THIS_POSITION_BUTTON).click();
    };

    answerToFirstQuestions() {
        commonMethods.waitForDocumentToBeLoaded('486');
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
            .should('equal', careersConstants.PLEASE_FILL_OUT_THIS_FIELD_MESSAGE);
    };

    navigateToPersonalInformationPage() {
        this.answerToFirstQuestions();
        this.clickOnContinue();
        commonMethods.waitForDocumentToBeLoaded('523');
        this.clickOnContinue();
        commonMethods.waitForDocumentToBeLoaded('1291');
        this.selectGender();
        this.selectRace();
        this.clickOnContinue();
        commonMethods.waitForDocumentToBeLoaded('1132');
        this.selectVeteranChoice();
        this.clickOnContinue();
        commonMethods.waitForDocumentToBeLoaded('1641');
        this.clickOnContinue();
        commonMethods.waitForDocumentToBeLoaded('2641');
    };
}

const getIframeDocument = () => {
    return cy
        .get('#gnewtonIframe')
        // Cypress yields jQuery element, which has the real
        // DOM element under property "0".
        // From the real DOM iframe element we can get
        // the "document" element, it is stored in "contentDocument" property
        // Cypress "its" command can access deep properties using dot notation
        // https://on.cypress.io/its
        .its('0.contentDocument').should('exist')
};

const getIframeBody = () => {
    // get the document
    return getIframeDocument()
        // automatically retries until body is loaded
        .its('body').should('not.be.undefined')
        // wraps "body" DOM element to allow
        // chaining more Cypress commands, like ".find(...)"
        .then(cy.wrap)
};

export const careersPage = new Careers();
