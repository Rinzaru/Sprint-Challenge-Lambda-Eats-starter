describe("Testing our Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });
  it("Tests name input", () => {
    cy.get("[data-cy=name]").type("Alex");
  });
  it("Tests Radio", () => {
    cy.get;
  });
  it("tests checkbox", () => {
    cy.get("[data-cy=checkbox1]").check().should("be.checked");
    cy.get("[data-cy=checkbox2]").check().should("be.checked");
    cy.get("[data-cy=checkbox3]").check().should("be.checked");
    cy.get("[data-cy=checkbox4]").check().should("be.checked");
  });

  it("Tests Submit", () => {
    cy.get("[data-cy=submit]").submit();
  });
});
