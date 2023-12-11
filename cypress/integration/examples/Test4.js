// const { func } = require("assert-plus");

{
  /* <reference types="Cypress" />; */
}
describe("My first Test", function () {
  it("My second case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    //MOUSE HOVER POPUS
    cy.get("div.mouse-hover-content").invoke("show");
    cy.contains("Top").click({ force: true });
    cy.url().should("include", "top");
  });
});
