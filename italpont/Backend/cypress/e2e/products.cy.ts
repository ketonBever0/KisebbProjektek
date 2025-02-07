describe("Product Creation and Deletion", () => {
  let length: number;
  it("Test Fetch All", () => {
    cy.request("http://localhost:3000/product/all").then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.length.of.at.least(1);
      expect(res.body[0]).to.have.property("id");
      length = res.body.length;
    });
  });

  let token: string;
  it("Login and get token", () => {
    cy.request({
      url: "http://localhost:3000/auth/login",
      method: "POST",
      body: {
        email: Cypress.env("test_email"),
        password: Cypress.env("test_password"),
      },
    }).then((res) => {
      token = res.body.token;
    });
  });

  it("Add Product", () => {
    cy.request({
      url: "http://localhost:3000/product/add",
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        name: "Kevert",
        category: "Spéci",
        subCategory: "Spéci",
        brand: "Saját",
        volume: 50,
        alcoholPercentage: 20,
        price: 7980,
        description: "Kevert",
        images: "",
      },
    }).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body).to.have.property("product");
      productId = res.body.product.id;
    });
  });

  it("Get Products and check if current data length has increased with 1", () => {
    cy.request("http://localhost:3000/product/all").then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.length).eq(length + 1);
    });
  });

  let productId: number;

  it("Check if our new Product exists", () => {
    cy.request(`http://localhost:3000/product/get/${productId}`).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an("object");
      expect(res.body.id).to.eq(productId);
    });
  });

  it("Delete this product!", () => {
    cy.request({
      url: `http://localhost:3000/product/delete/${productId}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
    });
  });

  it("Check if data length is the same as before Product creation", () => {
    cy.request("http://localhost:3000/product/all").then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.length).eq(length);
    });
  });

  it("Check if our new Product does not exists", () => {
    cy.request({
      url: `http://localhost:3000/product/get/${productId}`,
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.eq(404);
    });
  });
});
