import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

describe('Test 1: Logowanie i wylogowanie', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  it('Powinien zalogować się i wylogować z konta', () => {
    // Odwiedzamy stronę logowania
    loginPage.visit();

    // Wpisujemy dane do logowania
    loginPage.fillEmail('user888@gmail.com');
    loginPage.fillPassword('1234567890');

    // Klikamy przycisk logowania
    loginPage.submit();

    // Po zalogowaniu otwieramy menu użytkownika
    homePage.clickUserMenu();

    // Klikamy "Log out" i wracamy do strony logowania
    homePage.logOut();

    // Sprawdzamy, czy wróciliśmy na stronę logowania
    cy.url().should('include', '/account/login');
  });
});
