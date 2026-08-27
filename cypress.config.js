import { defineConfig } from "cypress";
import mochawesome from "cypress-mochawesome-reporter/plugin.js";

export default defineConfig({
  allowCypressEnv: false,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports/html",
    overwrite: true,
    html: true,
    json: true,
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    consoleReporter: "spec",
  },

  e2e: {
    baseUrl: "https://practicesoftwaretesting.com/",
    setupNodeEvents(on, config) {
      mochawesome(on);
      const browserName = config.env.browserName ?? config.browser?.name ?? "default";
      config.reporterOptions.reportDir = `cypress/reports/html/${browserName}`;
      return config;
    },
  },
});
