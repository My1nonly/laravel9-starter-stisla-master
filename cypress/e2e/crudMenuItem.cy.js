describe("empty spec", () => {
    it("passes", () => {
        cy.visit("http://127.0.0.1:8000/");
        cy.get(":nth-child(2) > .form-control").type("superadmin@gmail.com");
        cy.get(":nth-child(3) > .form-control").type("password");
        cy.get(".needs-validation").submit();
        cy.get(".navbar-nav > :nth-child(1) > .nav-link > .fas").click();
        cy.get(":nth-child(4) > .has-dropdown > span").click();
        cy.get(".active > .dropdown-menu > :nth-child(2) > .nav-link").click();
        // cy.get(":nth-child(2) > .text-right > .d-flex > .ml-2 > .btn").click();
        cy.get(".card-header-action > .btn-icon").click();
        cy.get("#create_user").select("Users Management", { force: true });
        cy.get("#name").type("User to Role");
        cy.get("#permission_name").type("assign.index");
        cy.get("#route").select("api/user", { force: true });
        cy.get(".card-body > form").submit();
    });
});