import { DefaultRequestBody, PathParams, rest } from "msw";

export const handlers = [
  rest.get<DefaultRequestBody, PathParams, string[]>(
    "/api/names",
    (req, res, ctx) => res(ctx.delay(), ctx.json(["John", "Jane"]))
  ),
];
