import {careersPage} from "../pages/Careers";
import {homepage} from "../pages/Homepage";

it('Verify "Please fill out this field" validation for email field', () => {
    homepage.openHomepage();
    homepage.clickOnCareers();
    careersPage.clickOnSoftwareDevelopmentEngineerTest();
    careersPage.assertUserIsRedirectedToExpectedPage();
    careersPage.clickOnApplyForThisPosition();
    careersPage.navigateToPersonalInformationPage();
    careersPage.insertFirstName();
    careersPage.insertLastName();
    careersPage.clickOnSubmit();
    careersPage.getEmailFieldHtmlError();
});
