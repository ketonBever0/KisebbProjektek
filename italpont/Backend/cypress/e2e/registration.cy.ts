describe("Test Registration with Correct data", () => {
  let token: string;

  it("Admin login", () => {
    cy.request({
      url: "http://localhost:3000/auth/login",
      method: "POST",
      body: {
        email: Cypress.env("test_email"),
        password: Cypress.env("test_password"),
      },
    }).then((res) => {
      expect(res.status).equal(200);
      token = res.body.token;
      expect(token).not.equal(null);
    });
  });

  let userId: number;

  it("Registration", () => {
    cy.request({
      url: "http://localhost:3000/auth/registration",
      method: "POST",
      body: {
        email: "cypresstester@example.me",
        password: "cypressTester#123",
        lastName: "Tester",
        firstName: "Cypress",
        birthDate: "2020-01-01",
        postcode: "4321",
        city: "Vice City",
        address: "Washington Beach 29",
        mobile: "+36 3215",
      },
    }).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body).has.property("user");
      userId = res.body.user.id;
      expect(userId).to.not.equal(null);
    });
  });

  it("Check if User was created", () => {
    cy.request({
      url: `http://localhost:3000/auth/user/${userId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      expect(res.status).eq(200);
      expect(res.body.id).not.equal(null);
      expect(res.body.id).eq(userId);
    });
  });

  it("Delete", () => {
    cy.request({
      url: `http://localhost:3000/auth/user/${userId}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      expect(res.status).eq(200);
    });
  });

  it("Check if User not exists", () => {
    cy.request({
      url: `http://localhost:3000/auth/user/${userId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).eq(404);
    });
  });
});

describe("Unsuccessful registration", () => {
  it("Existing user", () => {
    cy.request({
      url: "http://localhost:3000/auth/registration",
      method: "POST",
      body: {
        email: "testuser1@example.me",
        password: "cypressTester#123",
        lastName: "Tester",
        firstName: "Cypress",
        birthDate: "2020-01-01",
        postcode: "4321",
        city: "Vice City",
        address: "Washington Beach 29",
        mobile: "+36 3215",
      },
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.eq(403);
      expect(res.body.meta.target).eq("User_email_key");
    });
  });

  it("Email is not email", () => {
    cy.request({
      url: "http://localhost:3000/auth/registration",
      method: "POST",
      body: {
        email: "testuser1example.me",
        password: "cypressTester#123",
        lastName: "Tester",
        firstName: "Cypress",
        birthDate: "2020-01-01",
        postcode: "4321",
        city: "Vice City",
        address: "Washington Beach 29",
        mobile: "+36 3215",
      },
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.eq(400);
      expect(res.body.message[0]).eq("email must be an email");
    });
  });

  it("Weak password", () => {
    cy.request({
      url: "http://localhost:3000/auth/registration",
      method: "POST",
      body: {
        email: "testuser1@example.me",
        password: "cypressTester",
        lastName: "Tester",
        firstName: "Cypress",
        birthDate: "2020-01-01",
        postcode: "4321",
        city: "Vice City",
        address: "Washington Beach 29",
        mobile: "+36 3215",
      },
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.eq(400);
      expect(res.body.message[0]).eq("password is not strong enough");
    });
  });
});
