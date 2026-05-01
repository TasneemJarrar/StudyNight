describe("Forms", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
    cy.get("#cardSetPage").click();
  });

  it("should show an error when submitting empty Create Set form", () => {
    cy.get("[data-cy='toggle_form']").first().click();
    cy.get("[data-cy='set_form']").find("input[type='submit']").click();
    cy.get(".error")
      .should("be.visible")
      .and("contain", "TITLE CANNOT BE EMPTY");
  });

  it("should successfully create a new card set with a valid title", () => {
    cy.get("[data-cy='toggle_form']").first().click();
    cy.get("[data-cy='set_form']")
      .find("input[name='titleInput']")
      .type("My New Set");
    cy.get("[data-cy='set_form']").find("input[type='submit']").click();
    cy.get(".setContainer").should("contain", "My New Set");
  });

  it("should show an error when submitting empty Add Card form", () => {
    cy.get("[data-cy='1']").click();
    cy.get("[data-cy='toggle_form']").click();
    cy.get("[data-cy='card_form']").find("input[type='submit']").click();
    cy.get(".error")
      .should("be.visible")
      .and("contain", "TERM AND DESCRIPTION CANNOT BE EMPTY");
  });

  it("should show an error when submitting Add Card form with empty term", () => {
    cy.get("[data-cy='1']").click();
    cy.get("[data-cy='toggle_form']").click();
    cy.get("[data-cy='card_form']")
      .find("input[name='descriptionInput']")
      .type("Some description");
    cy.get("[data-cy='card_form']").find("input[type='submit']").click();
    cy.get(".error")
      .should("be.visible")
      .and("contain", "TERM CANNOT BE EMPTY");
  });

  it("should successfully add a new card with valid inputs", () => {
    cy.get("[data-cy='1']").click();
    cy.get("[data-cy='toggle_form']").click();
    cy.get("[data-cy='card_form']")
      .find("input[name='termInput']")
      .type("New Term");
    cy.get("[data-cy='card_form']")
      .find("input[name='descriptionInput']")
      .type("New Description");
    cy.get("[data-cy='card_form']").find("input[type='submit']").click();
    cy.get(".term").should("contain", "New Term");
  });
});
