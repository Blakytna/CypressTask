export class CartPage {
  get quantityField() {
    return cy.get('[data-test="product-quantity"]');
  }
  get price() {
    return cy.get('[data-test="product-price"]');
  }
  get total() {
    return cy.get('[data-test="line-price"]');
  }
  get successMessage() {
    return cy.get('[role="alert"]');
  }

  changeQuantity(qty) {
    this.quantityField.clear().type(`${qty}{enter}`);
  }
  getSuccessMessageByText(text) {
    return cy.contains('[role="alert"]', text);
  }
}
