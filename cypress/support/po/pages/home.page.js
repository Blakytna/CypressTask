export class HomePage {
  open() {
    cy.visit("/");
  }

  get product() {
    return cy.get('[data-test="product-name"]');
  }

  openProduct() {
    this.product.first().click();
  }
}
