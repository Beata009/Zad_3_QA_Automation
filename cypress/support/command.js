import LoginPage from '../pages/LoginPage';

Cypress.Commands.add('login', (email, password) => {
  const loginPage = new LoginPage();

  // Odwiedzamy stronę logowania i wypełniamy formularz
  loginPage.visit();
  loginPage.fillEmail(email);
  loginPage.fillPassword(password);
  loginPage.submit();
});
