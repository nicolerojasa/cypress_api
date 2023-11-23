describe("Crear un usuario desde una web", () => {
  it("crear un nuevo en una web", () => {
    cy.visit("http://127.0.0.1:5000/create");
    cy.get("#name").click();
    cy.get("#name").type("nicole");
    cy.get("#email").click();
    cy.get("#email").type("nicole@nicole.cl");
    cy.get("#age").click();
    cy.get("#age").type("20");
    cy.get('[type="submit"]').click();
  });

  it("Eliminar usuario desde una web", () => {
    cy.visit("http://127.0.0.1:5000/delete ");
    cy.get("#id").click();
    cy.get("#id").type("93");
    cy.get('[type="submit"]').click();
  });

  it("Actualizar usuario desde una web", () => {
    cy.visit("http://127.0.0.1:5000/update/90");
    cy.get("#id").click();
    cy.get("#id").type("90");
    cy.get("#name").click();
    cy.get("#name").type("test");
    cy.get("#email").click();
    cy.get("#email").type("gomi@gomi.cl");
    cy.get("#age").click();
    cy.get("#age").type("22");
    cy.get('[type="submit"]').click();
  });
});
