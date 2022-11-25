<reference types="cypress" />



describe('No.  5- User is Login then can see User List then logout', () => {
    it('Login First!', () => {
        cy.visit('http://127.0.0.1:8000/')

        cy.get('h4').should("have.text", "Login");
        cy.get(':nth-child(2) > label').should("have.text", "Email");
        cy.get('.control-label').should("have.text", "Password");
        cy.get('.btn').should("be.enabled").contains("Login");

        
        cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com");
        cy.get(':nth-child(3) > .form-control').type("password");
        cy.get('.btn').click({ force: true });

      
        cy.visit('http://127.0.0.1:8000/user-management/user');
        cy.get('h1').should("have.text", "User List");
        cy.get('.section-title').should("have.text", "User Management");
        cy.get('.table > tbody > :nth-child(1) > :nth-child(1)').should("have.text", "#");
        cy.get('.table > tbody > :nth-child(2) > :nth-child(1)').should("have.text", "1");
        cy.get('tbody > :nth-child(1) > :nth-child(2)').should("have.text", "Name");
        cy.get('.table > tbody > :nth-child(2) > :nth-child(2)').should("have.text", "SuperAdmin");
        cy.get('tbody > :nth-child(1) > :nth-child(3)').should("have.text", "Email");
        cy.get('tbody > :nth-child(2) > :nth-child(3)').should("have.text", "superadmin@gmail.com");
        cy.get('tbody > :nth-child(1) > :nth-child(4)').should("have.text", "Created At");
        cy.get('tbody > :nth-child(2) > :nth-child(4)').should("have.text", "19 October 2022");
        cy.get('tbody > :nth-child(1) > .text-right').should("have.text", "Action");
        cy.get(':nth-child(2) > .text-right').contains("Edit");
        cy.get(':nth-child(2) > .text-right').contains("Delete");

      

        cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
        cy.get(':nth-child(4) > .has-dropdown > span').click();
        cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').click();
        cy.get('.section-title').should("have.text", "Menu Item Management");
        cy.get('h4').should("have.text", "Menu Item List");
        cy.get('tbody > :nth-child(1) > :nth-child(2)').should("have.text", "Parent");
        cy.get('tbody > :nth-child(1) > :nth-child(3)').should("have.text", "Name");
        cy.get('tbody > :nth-child(1) > :nth-child(4)').should("have.text", "Url");
        cy.get('tbody > :nth-child(1) > :nth-child(5)').should("have.text", "Permission");
        cy.get('tbody > :nth-child(1) > .text-right').should("have.text", "Action");
        cy.get('.card-header-action > .btn-icon').click();
        //Menu Item Create Form
        cy.get('.section-title').should("have.text", "Menu Item Management");
        cy.get('h4').should("have.text", "Menu Item Create Form");
        cy.get(':nth-child(2) > label').should("have.text", "Parent");
        cy.get(':nth-child(3) > label').should("have.text", "Menu Item Name");
        cy.get(':nth-child(4) > label').should("have.text", "Permission Name");
        cy.get(':nth-child(5) > label').should("have.text", "Url");

        cy.get(':nth-child(5) > label').should("have.text", "Url");
        
        
       


    })
    
    it('create new menu item', () => {
        cy.visit('http://127.0.0.1:8000/menu-management/menu-item/create');

        //Menu Item Create Form
        cy.get('.section-title').should("have.text", "Menu Item Management");
        cy.get('h4').should("have.text", "Menu Item Create Form");
        cy.get(':nth-child(2) > label').should("have.text", "Parent");
        cy.get(':nth-child(3) > label').should("have.text", "Menu Item Name");
        cy.get(':nth-child(4) > label').should("have.text", "Permission Name");
        cy.get(':nth-child(5) > label').should("have.text", "Url");

        cy.get(':nth-child(5) > label').should("have.text", "Url");
        cy.get('#select2-menu_group_id-v9-container').select('Dashboard').should('have.value','1');
        
        cy.get('#name').type("menu item2");
        cy.get('#permission_name').type("menu item2");

      })

})