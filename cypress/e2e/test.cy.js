import { HeaderComponent } from "../support/po/components/header.component";
import { HomePage } from "../support/po/pages/home.page";
import { ProductPage } from "../support/po/pages/product.page";
import { CartPage } from "../support/po/pages/cart.page";
import { CategoryPage } from "../support/po/pages/category.page";

describe("Public user actions", () => {
  const header = new HeaderComponent();
  const homePage = new HomePage();
  const productPage = new ProductPage();
  const cartPage = new CartPage();
  const categoryPage = new CategoryPage();

  function addProductToCart() {
    homePage.open();
    homePage.product.should("be.visible");
    homePage.openProduct();
    productPage.addToCart();
  }

  it("should add the product to the cart", () => {
    addProductToCart();

    productPage.successMessage.should(
      "contain",
      "Product added to shopping cart.",
    );
    header.cartCount.should("have.text", "1");
  });

  it("should change quantity in the cart", () => {
    addProductToCart();
    header.goToCart();

    cartPage.price.invoke("text").then((priceText) => {
      const priceValue = Number(priceText.replace("$", ""));

      cartPage.changeQuantity(2);

      cartPage.quantityField.should("have.value", "2");
      cartPage
        .getSuccessMessageByText("Product quantity updated.")
        .should("be.visible");

      cartPage.total.invoke("text").then((totalText) => {
        const totalValue = Number(totalText.replace("$", ""));
        expect(totalValue).to.equal(priceValue * 2);
      });
    });
  });

  it("should open product category", () => {
    homePage.open();
    header.openCategories();
    header.openHandTools();

    categoryPage.pageTitle.should("have.text", "Category: Hand Tools");
  });

  it("should change the language", () => {
    homePage.open();
    header.openLanguageMenu();
    header.selectGermanLanguage();

    header.signInButton.should("have.text", "Einloggen");
  });
});
