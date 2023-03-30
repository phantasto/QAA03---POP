import LoginPage from "../pages/login";
describe("login", () => {
	beforeEach(() => {
		cy.visit("www.instagram.com");
		cy.contains("Allow essential and optional cookies").click();
	});
	// logowanie
	it("Log in to the Instagram", () => {
		const LPage = new LoginPage();
		//cy.get(":nth-child(1) > .x1i10hfl > ._acan > ._aacl").click();
		LPage.pressLogIn().click();
		LPage.getLoginInput().click();
		LPage.getPasswordInput().click();
		LPage.getLogBtn().click();
	});
});
