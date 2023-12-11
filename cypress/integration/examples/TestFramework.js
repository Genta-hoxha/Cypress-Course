// const { func } = require("assert-plus");

{
  /* <reference types="Cypress" />; */
}
describe("My first Test", function () {
  before(function () {
    //runs once before all tests in the block
  });
  it("My second case", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    // cy.get("form input.form-control:nth-child(1)").type("Bob");

    cy.get('input[name="name"]:nth-child(2)').type("Genta");
    cy.get("select").select("Female");
  });
});
