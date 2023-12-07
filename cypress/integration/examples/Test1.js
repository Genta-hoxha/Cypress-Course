// const { func } = require("assert-plus");

{
  /* <reference types="Cypress" />; */
}
describe("My first Test", function () {
  it("My firstTest case", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    cy.get(".product").should("have.length", 5);
    //selenium get hit url in browser, cypress get acts like findElement of selenium
    cy.get(".product:visible").should("have.length", 4);
    //Parent child chinning
    cy.get(".products").find(".product").should("have.length", 4);
    cy.get(":nth-child(3) > .product-action > button").click();
    cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click();
    cy.get(":nth-child(2) > .product-action > button").click();
    cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click();

    cy.get(".products")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();
        if (textVeg.includes("Cauliflower")) {
          // $el.find("button").click(); e kishim kshu por dilte qe click nuk ekzistonte, pra vije ne mes (pra stricked out-i nxjerre jashte), si ta zgjidhim???
          //ajo cka do bejme eshte nje komande e quajtur wrap, ku e therrasim ne cypress si me poshte dhe e zgjidhim promise
          cy.wrap($el).find("button").click();
        }
      });

    //DIFFERENCE BETWEEN JQUERY METHODS AND CYPRESS METHODS
    //shkruajme kto dy rreshta dhe del error si do e zgjidhim, po i leme koment
    /* const logo = cy.get(".brand");
    cy.log(logo.text()); */
    //cfare ndodh?? shfaqet error me mesazhin "logo.text is not a function" SI ta zgjidhim ???
    // cy.get(".brand").then(function (logoelement) {
    //   cy.log(logoelement.text());
    // });
    // const logo = cy.get(".brand");
    // cy.log(cy.get(".brand").text());
  });
});
