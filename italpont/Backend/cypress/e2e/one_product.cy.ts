describe("template spec", () => {
  it("Is Object?", () => {
    cy.request("http://localhost:3000/product/get/1").then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an("Object");
    });
  });

  it("Is 404?", () => {
    cy.request({
      url: "http://localhost:3000/product/get/0",
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.eq(404);
    });
  });
});
