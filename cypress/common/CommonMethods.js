export class CommonMethods {
    //this method visits any page inserted as parameter
    visitPage(pageURL) {
        cy.visit(pageURL);
    };

    //this method will wait for the document to be loaded
    waitForDocumentToBeLoaded(height) {
        cy.get('#gnewtonIframe', {timeout: 10000}).should('have.attr', 'style', `overflow: hidden; height: ${height}px;`);
    };

    //this method will click on any web element inserted as parameter, with force true
    clickOnElementForceTrue(webElement) {
        cy.get(webElement).click({force: true});
    };

    //this method gets and checks if a URL contains the specific string inserted as parameter
    assertUserIsRedirectedToExpectedPage(string) {
        cy.url().should('include', string);
    };

    removeTargetAttribute(webElement) {
        cy.get(webElement).invoke('removeAttr', 'target');
    }
};

export const commonMethods = new CommonMethods();
