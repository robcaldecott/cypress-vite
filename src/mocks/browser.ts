import { setupWorker, rest, SetupWorkerApi } from "msw";
import { handlers } from "./handlers";

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers);

declare global {
  interface Window {
    msw: {
      worker: SetupWorkerApi;
      rest: typeof rest;
    };
    Cypress: object;
    appReady: boolean;
  }
}

// Make the `worker` and `rest` references available globally,
// so they can be accessed in both runtime and test suites.
window.msw = {
  worker,
  rest,
};
