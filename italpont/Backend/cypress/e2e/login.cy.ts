describe("Test Login", () => {
  it("Correct", () => {
    cy.request({
      url: "http://localhost:3000/auth/login",
      method: "POST",
      body: {
        email: Cypress.env("test_email"),
        password: Cypress.env("test_password"),
      },
    }).then((res) => {
      expect(res.body).has.property("token");
    });
  });

  it("Correct email, but wrong password", () => {
    cy.request({
      url: "http://localhost:3000/auth/login",
      method: "POST",
      failOnStatusCode: false,
      body: {
        email: Cypress.env("test_email"),
        password: "youWontKnowThisHaha",
      },
    }).then((res) => {
      expect(res.status).to.eq(403);
      expect(res.body.message).to.eq("Incorrect password!");
    });
  });

  it("No such User", () => {
    cy.request({
      url: "http://localhost:3000/auth/login",
      method: "POST",
      failOnStatusCode: false,
      body: {
        email: "testuser@example.me",
        password: "nopassword",
      },
    }).then((res) => {
      expect(res.status).to.eq(404);
      expect(res.body.message).to.eq("User not found!");
    });
  });

  it("I really don't know this user... and their password", () => {
    cy.request({
      url: "http://localhost:3000/auth/login",
      method: "POST",
      failOnStatusCode: false,
      body: {
        email: "huhuhuhu@gmail.com",
        password: "nopassword",
      },
    }).then((res) => {
      expect(res.status).to.eq(403);
      expect(res.body.message).to.eq("Incorrect password!");
    });
  });

  it("Email is not email", () => {
    cy.request({
      url: "http://localhost:3000/auth/login",
      method: "POST",
      failOnStatusCode: false,
      body: {
        email: "wrongemail",
        password: "nopassword",
      },
    }).then((res) => {
      expect(res.status).to.eq(400);
      expect(res.body.message).to.contain("email must be an email");
    });
  });
});
