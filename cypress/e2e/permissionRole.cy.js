describe("empty spec", () => {
    it("passes", () => {
        cy.visit("http://127.0.0.1:8000/");
        cy.get(":nth-child(2) > .form-control").type("superadmin@gmail.com");
        cy.get(":nth-child(3) > .form-control").type("password");
        cy.get(".needs-validation").submit();
        cy.get(".navbar-nav > :nth-child(1) > .nav-link > .fas").click();
        cy.get(":nth-child(3) > .has-dropdown > span").click();
        cy.get(".active > .dropdown-menu > :nth-child(2) > .nav-link").click();
        cy.get(".card-header-action > .btn").click();
        cy.get("#role").select("user", { force: true });
        cy.get("#permissions").select("user.management", { force: true });
        cy.get(".card-body > form").submit();
        cy.get(".btn-secondary").click();
        cy.get(":nth-child(2) > .text-right > .d-flex > .btn > .fas").click();
        cy.get("#permission").select("menu.management", { force: true });
        cy.get(".btn-primary").click();
    });
});