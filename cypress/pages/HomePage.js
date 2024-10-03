class HomePage {
  clickUserMenu() {
    // Znajdujemy i klikamy przycisk w prawym górnym rogu (menu użytkownika)
    cy.get('.header-right .user-menu-button').click();
  }

  logOut() {
    // Znajdujemy przycisk "Log out" i klikamy na niego
    cy.contains('Log out').click();
  }
}

export default HomePage;
