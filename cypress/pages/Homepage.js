import {commonMethods} from "../common/CommonMethods";
import {homepageConstants} from "../data/constants";
import {homepageSelectors} from "../data/selectors";

export class Homepage {
    openHomepage() {
        commonMethods.visitPage(homepageConstants.HOMEPAGE_URL);
    };

    clickOnCareers() {
        commonMethods.removeTargetAttribute(homepageSelectors.CAREER_REMOVE_TARGET);
        commonMethods.clickOnElementForceTrue(homepageSelectors.CAREERS);
    };
}

export const homepage = new Homepage();