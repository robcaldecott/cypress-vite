import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";

import("./mocks/browser").then(({ worker }) => {
  worker.start({ onUnhandledRequest: "bypass" });

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // Disable automatic retries
        retry: false,
      },
    },
  });

  if (window.Cypress) {
    window.appReady = true;
  }

  ReactDOM.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
});
