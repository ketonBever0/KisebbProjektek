import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      test_email: "testuser1@example.me",
      test_password: "123QWE#asd"
    },
  },
});
