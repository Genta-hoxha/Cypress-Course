// const { func } = require("assert-plus");

{
  /* <reference types="Cypress" />; */
}
import { func } from "assert-plus";
import HomePage from "../pageObjects/HomePage";
import ProductPage from "../pageObjects/ProductPage";
describe("My first Test", function () {
  before(function () {
    //runs once before all tests in the block
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("My second case", function () {
    const homePage = new HomePage();
    const productPage = new ProductPage();
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    const gender = this.data;
    homePage.getEditBox().type(this.data.name);
    homePage.getGender().select(gender.gender);
    homePage.getTwoWayDataBinding().should("have.value", this.data.name);
    homePage.getEditBox().should("have.attr", "minlength", "2");
    homePage.getEntrepreneaur().should("be.disabled");
    homePage.getShopTab().click();
    Cypress.config("defaultCommandTimeout", 8000);
    // cy.get("form input.form-control:nth-child(1)").type("Bob");
    /*
    // cy.get('input[name="name"]:nth-child(2)').type("Genta");
    cy.get('input[name="name"]:nth-child(2)').type(this.data.name);

    // cy.get("select").select("Female");
    // cy.get("select")
    //   .select(this.data.gender)
    //   .should("have.value", this.data.gender);

    cy.get("select").select("Female");

    cy.get(":nth-child(4) > .ng-untouched").should(
      "have.value",
      this.data.name
    );

    cy.get('input[name="name"]:nth-child(2)').should(
      "have.attr",
      "minlength",
      "2"
    );
    cy.get("#inlineRadio3").should("be.disabled");
*/
    //reusing the code
    //perdorim each sepse me kte klase card-title kemi 4 elemente
    // cy.get("h4.card-title").each(($el, index, $list) => {
    //   if ($el.text().includes("Nokia Edge")) {
    //     cy.get("button.btn.btn-info").eq(index).click();
    //   }
    // });

    // cy.pause();
    // cy.get(":nth-child(2) > .nav-link").click().debug();
    this.data.productName;
    this.data.productName.forEach(function (element) {
      console.log(element);
      cy.selectProduct(element);
    });
    // cy.get("#navbarResponsive > .navbar-nav > .nav-item > .nav-link").click();
    productPage.checkOutButton().click();
    var sum = 0;
    cy.get("tr td:nth-child(4) strong").each(($el, index, $list) => {
      // cy.log($el.text());
      const amount = $el.text();
      var res = amount.split(" ");
      res = res[1].trim();
      sum = sum + res;
      cy.log(res);
    });

    cy.contains("Checkout").click();
    //tani kemi te choose a country
    cy.get("#country").type("India");

    cy.get("#checkbox2").click({ force: true });
    cy.get('input[type="submit"').click();

    ///////////////////////MENYRA E GABUAR E ALERTIT
    // cy.get("alert").should(
    //   "have.text",
    //   "Success! Thank you! Your order will be delivered in next few weeks :-)."
    // );

    /////////////////////////////MENYRA E SAKTE E ALERTIT
    cy.get(".alert").then(function (element) {
      const actualText = element.text();
      expect(actualText.includes("Success")).to.be.true;
    });
  });
});
