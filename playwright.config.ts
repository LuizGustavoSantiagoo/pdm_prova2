// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './components/__tests__',

  webServer: {
    command: 'expo start --web --port 8081',
    port: 8081,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },

  use: {
    baseURL: 'http://localhost:8081',
    browserName: 'chromium',
    headless: false,
  },
});
