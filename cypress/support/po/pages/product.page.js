export class ProductPage {
  get productName() {
    return cy.get('[data-test="product-name"]');
  }
  get addToCartButton() {
    return cy.get("#btn-add-to-cart");
  }
  get successMessage() {
    return cy.get('[role="alert"]');
  }
  addToCart() {
    this.addToCartButton.click();
  }
}
