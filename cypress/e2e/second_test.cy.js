import LoginPage from "../pages/login";
describe("login", () => {
	beforeEach(() => {
		cy.visit("www.instagram.com");
	});
	// llog in
	it("Log in to the Instagram", () => {
		const LPage = new LoginPage();

		cy.contains("Allow essential and optional cookies").click();
		LPage.pressLogIn().click();
		LPage.getLoginInput().click();
		LPage.getPasswordInput().click();
		LPage.getLogBtn().click();
		LPage.getOptions().click();
		LPage.getLogoutBtn().click();
	});
});
