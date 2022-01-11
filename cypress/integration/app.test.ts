import { DefaultRequestBody, PathParams } from "msw";

describe("app", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.window().should("have.property", "appReady", true);
  });

  it("renders the heading", () => {
    cy.findByRole("heading", { name: /cypress demo/i, level: 1 }).should(
      "exist"
    );
  });

  it("renders in the loading state", () => {
    cy.findByLabelText(/loading/i).should("exist");
  });

  it("renders names", () => {
    cy.window().then((window) => {
      const { worker, rest } = window.msw;
      worker.use(
        rest.get<DefaultRequestBody, PathParams, string[]>(
          "/api/names",
          (req, res, ctx) => {
            return res(ctx.json(["Bob", "Alice"]));
          }
        )
      );
    });
    cy.findByText(/bob/i).should("exist");
    cy.findByText(/alice/i).should("exist");
  });

  it("handles errors", () => {
    cy.window().then((window) => {
      const { worker, rest } = window.msw;
      worker.use(
        rest.get("/api/names", (req, res, ctx) => {
          return res(ctx.status(500));
        })
      );
    });
    cy.findByText(/error fetching names/i).should("exist");
  });
});
