export class HeaderComponent {
  get signInButton() {
    return cy.get('[data-test="nav-sign-in"]');
  }
  get categoriesButton() {
    return cy.get('[data-test="nav-categories"]');
  }
  get languageButton() {
    return cy.get("#language");
  }
  get germanLanguage() {
    return cy.get('[data-test="lang-de"]');
  }
  get cartButton() {
    return cy.get('[data-test="nav-cart"]');
  }
  get cartCount() {
    return cy.get('[data-test="cart-quantity"]');
  }
  get handTools() {
    return cy.get('[data-test="nav-hand-tools"]');
  }

  goToCart() {
    this.cartButton.click();
  }

  openCategories() {
    this.categoriesButton.click();
  }

  openHandTools() {
    this.handTools.click();
  }

  openLanguageMenu() {
    this.languageButton.click();
  }

  selectGermanLanguage() {
    this.germanLanguage.click();
  }
}
