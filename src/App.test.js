describe("Counter App", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("should increment count by 1 on Increment button click", () => {
      cy.get('[data-testid="increment-button"]').click();
      cy.contains("h2", "Count: 1");
    });
  
    it("should increment count correctly on multiple Increment clicks", () => {
      cy.get('[data-testid="increment-button"]').click().click().click();
      cy.contains("h2", "Count: 3");
    });
  
    it("should correctly update count with alternating Increment and Decrement clicks", () => {
      cy.get('[data-testid="increment-button"]').click().click().click();
      cy.get('[data-testid="decrement-button"]').click().click();
      cy.contains("h2", "Count: 2");
    });
  });
  